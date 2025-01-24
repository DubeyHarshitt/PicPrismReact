const User = require("../Models/userModel");

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// calling file to generate token from helpers
const { generateAccessToken } = require("../Helpers/accessToken");
const { generateRefreshToken } = require("../Helpers/refreshToken");



const signup = async (req, res)=>{
    const { username, email, password, accountType } = req.body;
    
    try {
        let user = await User.findOne({ username });
        if(user){
            return res.status(400).json({ success:false , message: "UserName Already Exists" });
        }

        const securePassword = await bcrypt.hash(password , 10);

        user = new User({
            username,
            email,
            password:securePassword,
            accountType
        });

        await user.save();
        return res.status(201).json({ success: true, message: "User Created Successfully"});

    } catch (error) {
        return res.status(500).json({ success:false, message: error.message });
    }
};

const login = async (req, res)=>{
    const { email, password }= req.body;
    try {
        let user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ success:false, message: "Please SignUp "});
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if(!comparePassword) return res.status(400).json({ success:false, message:"Invalid Credentials" });

        const data = {
            id: user._id,
            accountType : user.accountType,
            author: user.username,
        };
        const accessToken = generateAccessToken(data);
        const refreshToken = generateRefreshToken(data);
        // console.log("accessToken  :-  "+accessToken);
        // console.log("refreshToken  :-  "+refreshToken);


        return res.status(200).json({ success:true, message:"Login Successful", accessToken: accessToken, refreshToken: refreshToken, role: user.accountType, author: user.username });

    } catch (error) {
        return res.status(500).json({ success:false, message:error.message })
    }
};

module.exports = { login, signup }