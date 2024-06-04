import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
      },
    industry: {
        type: String,
        require: true
      },
    location: {
        type: String,
        require: true
      },
    profileId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CompanyProfile"
   }
})

export default mongoose.model("Company", companySchema)