function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding)
    // eslint-disable-next-line no-useless-escape
    .replace(/\-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

const run = async () => {
  try {
    const status = await Notification.requestPermission();

    if (status === 'granted') {
      const swReg = await navigator.serviceWorker.register('./sw.js')
      const subscription = await swReg.pushManager.getSubscription();

      if (subscription) {
        console.log('[subscription]', JSON.stringify(subscription))
      } else {
        const publicKey = 'BGaxJpmRdhhXPp3k0hyJ7ycXD_e1jBXzJnpFvyKxMkaATT3SVxijDFforu0W3cTIZq1Xiyd1vgYuo6v_dG6ca4c';
        const applicationServerKey = urlB64ToUint8Array(publicKey);
        const _subscription = await swReg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey
        })
        console.log('[_subscription]', JSON.stringify(_subscription))
      }
    }
  } catch (err) {
    console.log('[err]', err)
  }
};

run();
