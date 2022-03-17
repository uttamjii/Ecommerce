const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {

    const transporter = nodeMailer.createTransport({
        // host: "smtp.gmail.com",
        // type: "SMTP",
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        secure: true,
        service: process.env.SMPT_SERVICE,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
        // html:`<h1>himanshu uttam</h1>`
    }

    await transporter.sendMail(mailOptions)

}
module.exports = sendEmail;