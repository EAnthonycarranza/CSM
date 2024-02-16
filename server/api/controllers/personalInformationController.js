const PersonalInformation = require('../models/schemas/PersonalInformation'); // Adjust path as needed

exports.getPersonalInformations = async (req, res) => {
  try {
    const personalInfos = await PersonalInformation.find();
    res.json(personalInfos);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getPersonalInformationById = async (req, res) => {
  try {
    const personalInfo = await PersonalInformation.findById(req.params.id);
    if (!personalInfo) return res.status(404).json({ msg: 'Personal information not found' });
    res.json(personalInfo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createPersonalInformation = async (req, res) => {
    console.log('Attempting to create personal information:', req.body); // Log the incoming request body
    try {
      const newPersonalInfo = new PersonalInformation(req.body);
      const savedPersonalInfo = await newPersonalInfo.save();
      console.log('Personal information saved:', savedPersonalInfo); // Log the saved information
      res.status(201).json(savedPersonalInfo);
    } catch (err) {
      console.error('Error saving personal information:', err); // Log any errors
      res.status(500).send('Server Error');
    }
  };
  

exports.updatePersonalInformation = async (req, res) => {
  try {
    const personalInfo = await PersonalInformation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!personalInfo) return res.status(404).json({ msg: 'Personal information not found' });
    res.json(personalInfo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deletePersonalInformation = async (req, res) => {
  try {
    const personalInfo = await PersonalInformation.findById(req.params.id);
    if (!personalInfo) return res.status(404).json({ msg: 'Personal information not found' });
    await personalInfo.remove();
    res.json({ msg: 'Personal information removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
