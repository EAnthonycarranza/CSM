const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    highestGradeCompleted: String,
    yearGraduated: String,
    collegeHoursCompleted: Number,
    degree: String // e.g., BSc, BA, etc.
  });  

module.exports = EducationSchema;
