import express from "express";
import { getCompanies, getCompanyById, createCompany, updateCompanyById } from "../controllers/companiesController.js";

const router = express.Router();

router.get("/companies", getCompanies);
router.get("/companies/:id", getCompanyById);
router.post("/companies", createCompany);
router.put("/companies/:id", updateCompanyById);

export default router