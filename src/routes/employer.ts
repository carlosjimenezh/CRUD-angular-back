import { Router } from "express";
import { deleteEmployer, getEmployer, getEmployers, postEmployer, putEmployer } from "../controllers/employerController";

const router = Router()

router.get('/', getEmployers)
router.get('/:id', getEmployer)
router.delete('/:id', deleteEmployer)
router.post('/',postEmployer)
router.put('/:id',putEmployer)


export default router