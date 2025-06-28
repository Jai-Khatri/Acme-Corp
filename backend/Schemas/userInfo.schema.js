import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: [true, "User reference is required"]
    },
    currentWeight: {
        type: Number,
        required: [true, "Current weight is required"],
        min: [0, "Current weight must be positive"]
    },
    nextShipment: {
        type: Date,
        required: [true, "Next shipment date is required"]
    },
    weightLost: {
        type: Number,
        required: [true, "Weight lost is required"],
        min: [0, "Weight lost must be positive"]
    },
    bmi: {
        type: Number,
        required: [true, "BMI is required"],
        min: [0, "BMI must be positive"]
    },
    day: {
        type: Number,
        required: [true, "Day is required"],
        min: [1, "Day must be at least 1"]
    },
    pillsTaken: {
        type: Number,
        required: [true, "Pills taken is required"],
        min: [0, "Pills taken must be positive"]
    },
    daysLeft: {
        type: Number,
        required: [true, "Days left is required"],
        min: [0, "Days left must be positive"]
    }
}, 
{ versionKey: false, timestamps: true });



const UserInfo = mongoose.model("UserInfo" , userInfoSchema)

export default UserInfo;