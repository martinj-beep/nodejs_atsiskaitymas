import Company from "../models/Company.js";


// GET /companies: Fetch all companies.

export async function getCompanies(req, res) {

    try {
        const companies = await Company.find({});
        res.json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }

}


// GET /companies/:id: Fetch a single company by ID and it's company profile

export async function getCompanyById(req, res) {
    const { id } = req.params;

    try {
        const company = await Company.findById(id);
        res.json(company)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}


// POST /companies: Add a new company.

export async function createCompany(req, res) {
    const { name, industry, location, profileId } = req.body;

    if (!name || !industry || !location) { // || !profileId
        res.status(400).json({ message: "All fields are required" });
        return;
    }

    const newCompany = new Company({
        name,
        industry,
        location,
        profileId
    })
    
    try {
        await newCompany.save();
        res.json({newCompany})
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


// PUT /companies/:id: Update a company by ID.

export async function updateCompanyById(req, res) {
    const { id } = req.params;
    const { name, industry, location, profileId } = req.body;

    try {
        const company = await Company.findById(id);
        if (!company) {
            res.status(404).json({ message: `Company by id: ${id} not found`})
            return;
        }

        company.name = name,
        company.industry = industry,
        company.location = location,
        company.profileId = profileId
        

        await company.save()
        res.status(200).json(company)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}