module.exports = function (app) {

    const Nexmo = require('nexmo');

    const nexmo = new Nexmo({
        apiKey: Your_API_KEY,
        apiSecret: Your_API_SECRET_KEY
    });

    const config = {
        number: YOUR_REGISTERED_MOBILE_NUMBER
    }

    app.post('/send', (req, res) => {
        // Send SMS
        nexmo.message.sendSms(
            config.number,
            req.body.toNumber,
            req.body.message, { type: 'unicode' },
            (err, responseData) => { if (responseData) { console.log(responseData) } }
        );
    });

}