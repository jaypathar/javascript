const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "patharjay20@gmail.com",
    pass: "fzzbpcketpbopowp",
  },
});

const mailOptions = {
  from: "patharjay20@gmail.com",
  to: "jayp.albiorix@gmail.com",
  subject: "nodemailer test",
  text: "Test sending mail using nodejs",
};

transport.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent " + info.response);
  }
});


