import express from "express";
import companiesRouter from "./companiesRouter.js"
import companyProfilesRouter from "./companyProfilesRouter.js"

const router = express.Router();

router.use(companiesRouter);
router.use(companyProfilesRouter);

export default router;