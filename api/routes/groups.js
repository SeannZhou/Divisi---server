/**
 * Contains all api functions for group related routes
 * createGroup
 * getGroup
 * userJoinsGroup
 * userLeaveGroup
 * addMixtape
 */

const express = require("express");
const router = express.Router();
const passport = require("passport");

// load controllers
const controller = require("../controllers/groups");
const { createGroup, getGroup, userJoinsGroup, userLeaveGroup, addMixtape } = controller;

router.post("/group", createGroup);
router.get('/group/:id', getGroup);
router.patch("/group/:id/join", userJoinsGroup);
router.patch("/group/:id/leave", userLeaveGroup);
router.patch("/group/:id/addMixtape", addMixtape);

module.exports = router;
