const mongoose = require('mongoose');

const AgreementAcknowledgementSchema = new mongoose.Schema({
  studentSignature: String,
  witnessSignature: String,
  dateSigned: String,
});

module.exports = AgreementAcknowledgementSchema;
