import User from "../Schemas/user.schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET;

// Create User Controller (Sign up)
export const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const userResponse = { ...newUser._doc };
        delete userResponse.password;

        return res.status(201).json({ success: true, data: userResponse });
    } catch (error) {
        console.log("Error in createUser controller:-", error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};

// Get User Controller
export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id).select("-password");
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }
        return res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.log("Error in getUser controller:-", error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};

// Verify User Controller (Login)
export const VerifyUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, error: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, error: "Invalid email or password" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: "3h" }
        );

        const userResponse = { ...user._doc };
        delete userResponse.password;

        return res.status(200).json({
            success: true,
            message: "Authentication successful",
            token,
            user: userResponse
        });
    } catch (error) {
        console.log("Error in verifyUser controller:-", error.message);
        return res.status(500).json({ success: false, error: error.message });
    }
};
