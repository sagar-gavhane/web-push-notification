self.addEventListener('push', async (event) => {
  console.log('[event]', event)
  event.waitUntil(self.registration.showNotification(event.data.text()))
})

self.addEventListener('notificationclick', function (event) {
  event.notification.close()
  console.log('[closed]')
})
