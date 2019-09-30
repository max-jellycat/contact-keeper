const express = require('express')
const { check, validationResult } = require('express-validator')

const auth = require('../middleware/auth')
const Contact = require('../models/Contact')
const User = require('../models/User')

const router = express.Router()


// @route   GET  api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({ created_at: -1 })
    res.json(contacts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
})

// @route   POST  api/contacts
// @desc    Add a new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add a new contact')
})

// @route   PUT  api/contacts/:id
// @desc    Edit a contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Edit a contact')
})

// @route   DELETE  api/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete a contact')
})

module.exports = router
