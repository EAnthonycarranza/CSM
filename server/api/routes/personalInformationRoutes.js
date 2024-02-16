const express = require('express');
const router = express.Router();
const {
  getPersonalInformations,
  getPersonalInformationById,
  createPersonalInformation,
  updatePersonalInformation,
  deletePersonalInformation
} = require('../controllers/personalInformationController');

// Fetch all personal information records
router.get('/', getPersonalInformations);

// Fetch a single personal information record by ID
router.get('/:id', getPersonalInformationById);

// Create a new personal information record
router.post('/', createPersonalInformation);

// Update an existing personal information record by ID
router.put('/:id', updatePersonalInformation);

// Delete a personal information record by ID
router.delete('/:id', deletePersonalInformation);

module.exports = router;
