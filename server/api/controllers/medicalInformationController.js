const MedicalInformation = require('../models/schemas/MedicalInformation');

exports.getMedicalInformations = async (req, res) => {
  try {
    const medicalInfos = await MedicalInformation.find();
    res.json(medicalInfos);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getMedicalInformationById = async (req, res) => {
  try {
    const medicalInfo = await MedicalInformation.findById(req.params.id);
    if (!medicalInfo) return res.status(404).json({ msg: 'Medical information not found' });
    res.json(medicalInfo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createMedicalInformation = async (req, res) => {
  try {
    const newMedicalInfo = new MedicalInformation(req.body);
    const savedMedicalInfo = await newMedicalInfo.save();
    res.status(201).json(savedMedicalInfo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.updateMedicalInformation = async (req, res) => {
  try {
    const medicalInfo = await MedicalInformation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!medicalInfo) return res.status(404).json({ msg: 'Medical information not found' });
    res.json(medicalInfo);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteMedicalInformation = async (req, res) => {
  try {
    const medicalInfo = await MedicalInformation.findById(req.params.id);
    if (!medicalInfo) return res.status(404).json({ msg: 'Medical information not found' });
    await medicalInfo.remove();
    res.json({ msg: 'Medical information removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
