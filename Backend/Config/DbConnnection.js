import mongoose from "mongoose";


const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGOOSE_DB)
    } catch (error) {
        console.log("mongodbb connection error ", erro);
    }
}
export default connectMongoDB