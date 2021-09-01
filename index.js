const express = require("express"),
  app = express(),
  port = 5000;

const { transporter, mailOptions } = require("./email");

transporter.sendMail(mailOptions);

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}...`));
