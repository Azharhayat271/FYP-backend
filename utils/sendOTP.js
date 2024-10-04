const nodemailer = require('nodemailer');
require('dotenv').config();

const sendOtpEmail = async (email, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'Your OTP Code',
            html: `
                <p>Your OTP code is:</p>
                <h2>${otp}</h2>
                <p>Please enter this code in the application to proceed.</p>
                <p>If you did not request this code, please ignore this email.</p>
            `,
        };

        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return { success: true, message: 'OTP email sent' };
    } catch (error) {
        console.error('Error sending OTP email:', error);
        return { success: false, message: 'Error sending OTP email' };
    }
};

module.exports = { sendOtpEmail };
