<<<<<<< HEAD:index.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "programmhtml@gmail.com",
    pass: "gjppseyflntnnxxi",
  },
});
=======
// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "programmhtml@gmail.com",
//     pass: "gjppseyflntnnxxi",
//   },
// });
>>>>>>> de37e84f8057a963c2f628564daf32a18e897260:src/components/showcase/contactHandler.js

// app.post('/api/contact', async (req, res) => {
//   const { contact, email, name, message } = req.body;
//   console.log(req.body);

//   try {
//     const mailOptions = {
//       from: email,
//       to: 'programmhtml@gmail.com', // Email received from the contact form
//       subject: `Contact Data`,
//       // text: `Message: ${message}`,
//       html: `<p>Name : ${name}</p>
//               <p>Contact : ${contact}</p>
//               <p>Email : ${email}</p>
//               <p>Massage : ${message}</p>`,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ', info.response);

//     res.status(200).json({ success: true, message: 'Message successfully sent.' });
//   } catch (error) {
//     console.error('Error sending email: ', error);
//     res.status(500).json({ success: false, error: 'Failed to send email.' });
//   }
// });

// app.post('/api/report-bug', async (req, res) => {
//   const { email, description } = req.body;
//   console.log(req.body);

//   try {
//     const mailOptions = {
//       from: email,
//       to: 'programmhtml@gmail.com', // Email received from the contact form
//       subject: `Bug data`,
//       // text: `Message: ${message}`,
//       html: `<p>${email}</p>
//               <p>${description}</p>`,
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ', info.response);

//     res.status(200).json({ success: true, message: 'Message successfully sent.' });
//   } catch (error) {
//     console.error('Error sending email: ', error);
//     res.status(500).json({ success: false, error: 'Failed to send email.' });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // // Get the button, and when the user clicks on it, execute myFunction
// // document.querySelector("myBtn").onclick = function() {myFunction()};

// // /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// // function myFunction() {
// //   document.querySelector("myDropdown").classList.toggle("show");
// // }
