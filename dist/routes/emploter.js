"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employerController_1 = require("../controllers/employerController");
const router = (0, express_1.Router)();
router.get('/', employerController_1.getEmployers);
exports.default = router;
