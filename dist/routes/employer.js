"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employerController_1 = require("../controllers/employerController");
const router = (0, express_1.Router)();
router.get('/', employerController_1.getEmployers);
router.get('/:id', employerController_1.getEmployer);
router.delete('/:id', employerController_1.deleteEmployer);
router.post('/', employerController_1.postEmployer);
router.put('/:id', employerController_1.putEmployer);
exports.default = router;