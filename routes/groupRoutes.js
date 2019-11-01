const express = require("express");
const router = express.Router();
const GroupsController = require('../controllers/groupController');

const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, GroupsController.getAllGroups);
router.post('/', authMiddleware, GroupsController.addGroup);
router.get('/:groupId', authMiddleware, GroupsController.getGroupById);
router.put('/:groupId', authMiddleware, GroupsController.updateGroup);
router.delete('/:groupId', authMiddleware, GroupsController.deleteGroup);

module.exports = router;