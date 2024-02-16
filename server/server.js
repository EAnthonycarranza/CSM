const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const admissionRoutes = require('./api/routes/admissionRoutes'); // Adjust path as necessary

const app = express();

app.use(cors());
app.use(express.json());

console.log(process.env.JWT_SECRET); // This logs the JWT_SECRET value

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use('/api/admissions', admissionRoutes);

const authRoutes = require('./api/routes/authRoutes');
app.use('/api/users', authRoutes);

const personalInformationRoutes = require('./api/routes/personalInformationRoutes'); // Adjust the path as necessary
app.use('/api/personalInformation', personalInformationRoutes);

const medicalInformationRoutes = require('./api/routes/medicalInformationRoutes');
app.use('/api/medicalInformation', medicalInformationRoutes);

const historyRoutes = require ('./api/routes/historyRoutes');
app.use('/api/history', historyRoutes);

const educationRoutes = require('./api/routes/educationRoutes');
app.use('/api/education', educationRoutes);

const employmentRoutes = require('./api/routes/employmentRoutes');
app.use('/api/employment', employmentRoutes);

const agreementAcknowledgementRoutes = require('./api/routes/agreementAcknowledgementRoutes');
app.use('/api/agreementAcknowledgement', agreementAcknowledgementRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
