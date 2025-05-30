const express = require('express');
const { getAllUsers, blockUser, unblockUser } = require('../controllers/adminController');
const protect = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/roleMiddleware');

const router = express.Router();

router.use(protect, isAdmin); // All routes below are protected and admin-only

router.get('/users', getAllUsers);
router.put('/block/:id', blockUser);
router.put('/unblock/:id', unblockUser);

module.exports = router;
