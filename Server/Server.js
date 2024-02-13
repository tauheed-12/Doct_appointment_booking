const env = require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser'); 
const nodemailer = require('nodemailer'); 
const app = express();
const port = 8080;
var doctemail='';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const doctorSchema = new mongoose.Schema({
  id: Number,
  name: String,
  specialty: String,
  address:String,
  email:String
});
const Doctor = mongoose.model('datas', doctorSchema);
app.get('/api/doctors/:id', async (req, res) => {
  const doctorId = parseInt(req.params.id);

  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Doctors", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const details = await Doctor.findOne({ id: doctorId });
    mongoose.connection.close();

    console.log(details);
    doctemail=details.email;
    res.status(201).json({ message: "got the info", details });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/send-email', (req, res) => {
  const { name, email, slot, text } = req.body;
  console.log(name);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.EMAIL,
      pass: env.PASSWORD,
    },
  });

  const mailOptions = {
    from:'sheikhtauheed95@gmail.com',
    to: doctemail, 
    subject: `Consultation Booking Slot of - ${slot}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${text}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Consultation booked. Email sent to doctor: ' + info.response);
  });
});

app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});
