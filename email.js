require("dotenv").config();
const cron = require("node-cron");
const nodemailer = require("nodemailer");
const { getText } = require("./texts");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

let mailOptions = {
  from: process.env.EMAIL,
  to: process.env.RECEIVER,
  subject: "Reminder to Eat!",
  text: getText(),
};

cron.schedule("00 0 11,15,19 * * *", () => {
  // Send e-mail
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

module.exports = { transporter, mailOptions };
