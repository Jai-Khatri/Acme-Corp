import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const MONGODB_URL = process.env.MONGODB_URL

const ConnectToDB = async() => {

    try {

        const connection = await mongoose.connect(MONGODB_URL)

        if(connection){
            console.log("MONGODB connected on cluster:-", mongoose.connection.host)
        }
    } catch (error) {
        console.log("Error connecting to the MONGODB database : ", error)
    }
}

export default ConnectToDB