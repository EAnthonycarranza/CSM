const mongoose = require('mongoose');
const PersonalInformationSchema = require('./schemas/PersonalInformation');
const EducationSchema = require('./schemas/Education');
const EmploymentSchema = require('./schemas/Employment');
const HistorySchema = require('./schemas/History');
const MedicalInformationSchema = require('./schemas/MedicalInformation');
const AgreementAcknowledgementSchema = require('./schemas/AgreementAcknowledgement');

const AdmissionAgreementSchema = new mongoose.Schema({
  personalInformation: { type: mongoose.Schema.Types.ObjectId, ref: 'PersonalInformation' },
  education: EducationSchema,
  employment: EmploymentSchema,
  history: HistorySchema,
  medicalInformation: MedicalInformationSchema,
  agreementAcknowledgement: AgreementAcknowledgementSchema,
}, { timestamps: true });

module.exports = mongoose.model('AdmissionAgreement', AdmissionAgreementSchema);
