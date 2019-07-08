require('dotenv').config();
const webpush = require('web-push');

const { PUBLIC_KEY, PRIVATE_KEY } = process.env
webpush.setVapidDetails('mailto:example@yourdomain.org', PUBLIC_KEY, PRIVATE_KEY);

const subscription = { "endpoint": "https://fcm.googleapis.com/fcm/send/cvNUJySqXdY:APA91bFjL6_mHxbQ2_hvndKqCFDHNC3cNX1dyPzR-QDzsOExtDALvCiKRXQVm7VtbhMBNGlIDNxaWFOOBnbIuNva0hcfbPFA8jS5Z0IhIIQQXcx2IoSV0U7pSGinBPjrxYm_WuDfMNRG", "expirationTime": null, "keys": { "p256dh": "BG35EGWqpx7YIiD7SoxqtkN5wUv1wkAZ57S06RUgE4eTXOdpxkzrsDXR1iWndz1DxBf100QQ6r1c-zh1shix9Ys", "auth": "vkP2UH3SgCx0j8rMNdVm9w" } }

webpush.sendNotification(subscription, `This is random text message: ${new Date().toISOString()}`);
