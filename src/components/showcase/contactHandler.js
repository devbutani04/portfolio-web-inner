const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "rjparsana8@gmail.com",
    pass: "vltyvmstkuzbbvgm",
  },
});

app.post('/api/contact', async (req, res) => {
  const { contact, email, name, message } = req.body;
  console.log(req.body);

  try {
    const mailOptions = {
      from: 'rjparsana8@gmail.com',
      to: email, // Email received from the contact form
      subject: `New message from ${name}`,
      text: `Message: ${message}`,
      html: `<p>Message: ${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);

    res.status(200).json({ success: true, message: 'Message successfully sent.' });
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).json({ success: false, error: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// // Get the button, and when the user clicks on it, execute myFunction
// document.querySelector("myBtn").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myFunction() {
//   document.querySelector("myDropdown").classList.toggle("show");
// }