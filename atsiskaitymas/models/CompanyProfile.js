import mongoose from "mongoose";

const companyProfileSchema = new mongoose.Schema({
    companyId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
   },
    founder: {
        type: String,
        require: true
      },
    foundedYear: {
        type: Number,
        require: true
      },
    numberOfEmployees: {
        type: Number,
        require: true
      }
})

export default mongoose.model("CompanyProfile", companyProfileSchema)