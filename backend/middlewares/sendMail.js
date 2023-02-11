import { createTransport } from "nodemailer";

export const sendMail = async (text) => {
  const transporter = createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    
    auth: {
      user: process.env.SMPT_USER,
      pass: process.env.SMPT_PASSWORD,
    },
    tls:{
      rejectUnauthorized:false
  },
  });

  await transporter.sendMail({
    subject: "CONTACT REQUEST FROM PORTFOLIO",
    to: process.env.MYMAIL,
    from: process.env.MYMAIL,
    text,
  });
};

// host: "sandbox.smtp.mailtrap.io",
// port: 2525,
// auth: {
//   user: "fbdaf8171b0a2d",
//   pass: "e56c01bed2a894"
// }