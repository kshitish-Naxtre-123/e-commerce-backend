import mongoose from "mongoose"

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("successfully connect with mongodb database")
    } catch (error) {
        console.log(`ERROR:${error.message}`)
        process.exit(1)
    }
}
export default connectDB