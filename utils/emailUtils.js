import nodemailer from "nodemailer";

export const sendPasswordResetEmail = async (email, resetCode) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kshitishnayak82@gmail.com",
      pass: "kmgl qpyy ncpt wtuv",
    },
  });

  const mailOptions = {
    from: "kshitishnayak82@gmail.com",
    to: email,
    subject: "Password Reset",
    html: `
        <div style="font-family: Arial, sans-serif">
            <p style="font-size: 28px; color: #000; font-weight:700;">Welcome to E-commerce site</p>
            <p style="font-size:18px;color:#333">You requested a password reset. Use the code below to reset your password:</p>
            <p style="font-size: 24px; font-weight: 700; color: #000;background-color: yellow; display: inline-block; padding: 15px;border-radius: 8px;">${resetCode}</p>
            <p>If you did not request this, please ignore this email.</p>
        </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
