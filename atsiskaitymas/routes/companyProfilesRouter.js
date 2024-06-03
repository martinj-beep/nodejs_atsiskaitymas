import express from "express";
import { createCompanyProfile, getCompanyProfiles, updateCompanyProfileById } from "../controllers/companyProfilesController.js";

const router = express.Router();

router.get("/companyProfiles", getCompanyProfiles);
router.post("/companyProfiles", createCompanyProfile);
router.put("/companyProfiles/:id", updateCompanyProfileById);

export default router