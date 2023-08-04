import { createTransport } from "nodemailer";


exports.handler = async (event) => {
    const { name, email, message } = JSON.parse(event.body);

    try {
      const transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'theintelligentmarketercompany@gmail.com',
            pass: process.env.VITE_GMAIL_PASS
        },
      });

      const mailOptions = {
        from: 'theintelligentmarketercompany@gmail.com',
        to: 'theintelligentmarketercompany@gmail.com',
        subject: `New Message from ${name}`,
        text: `Name: ${name}; Email: ${email}; Message: ${message}`,
        html: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`,
      };

      let info = await transporter.sendMail(mailOptions);

      if (info.messageId) {
        return {
          statusCode: 200,
          body: JSON.stringify({ message: nodemailer.getTestMessageUrl(info) }),
        };
      }

      return {
        statusCode: 400,
        body: "Oops"
      };

    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    }
  };