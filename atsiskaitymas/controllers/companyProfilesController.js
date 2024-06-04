import CompanyProfile from "../models/CompanyProfile.js";
import Company from "../models/Company.js";


// GET /companyProfiles: Fetch all company profiles.

export async function getCompanyProfiles(req, res) {

    try {
        const companyProfiles = await CompanyProfile.find({});
        res.json(companyProfiles);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }

}


// POST /companyProfiles: Add a new company profile (linked to a company).

// sunkiai sitas

export async function createCompanyProfile(req, res) {
    const { companyId, founder, foundedYear, numberOfEmployees } = req.body;

    if (!companyId || !founder || !foundedYear || !numberOfEmployees) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }

    const newCompanyProfile = new CompanyProfile({
        companyId,
        founder,
        foundedYear,
        numberOfEmployees
    })

    const company = await Company.findById(companyId)

    company.profileId = newCompanyProfile._id;
    
    try {
        await company.save();
        await newCompanyProfile.save();
        res.json({newCompanyProfile})
        // res.json(company)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


// PUT /companyProfiles/:id: Update a company profile by ID. Panasu kad ID paties profilio? ir sitas sunkiai:/

export async function updateCompanyProfileById(req, res) {
    const { id } = req.params;
    const { companyId,  founder, foundedYear, numberOfEmployees } = req.body; 

    try {
        const companyProfile = await CompanyProfile.findById(id);
        if (!companyProfile) {
            res.status(404).json({ message: `Company by id: ${id} not found`})
            return;
        }

        companyProfile.companyId = companyId,
        companyProfile.founder = founder,
        companyProfile.foundedYear = foundedYear,
        companyProfile.numberOfEmployees = numberOfEmployees
        

        await companyProfile.save()
        res.status(200).json(companyProfile)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}