const bcrypt = require('bcryptjs')
const User = require("../models/UserModel");


const signupUser = async (req,res) => {
    try {
        const {name,email,username,password} = req.body;
        const user = await User.findOne({$or:[{email},{username}]});

        if(user){
            return res.status(400).json({message: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            name,
            email,
            username,
            password: hashedPassword,
        });

        await newUser.save();

        if(newUser){
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                username: newUser.username,
            })
        }
        else{
            res.status(400).json({message: "Invalid user data"})
        }
    } 
    catch (error) {
        res.status(500).json({message: error.mesage})
        console.log('Error in signupUser', error.message)
    }
}
const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({$or:[{email}]});

        if(!user){
            return res.status(400).json({message: "Please try to login with valid credentials"});
        }
        
        const PasswordCompare = await bcrypt.compare(password,user.password)
        
        if(!PasswordCompare){
            return res.status(400).json({message: "Please try to login with valid credentials"});
        }

        const data = {
            user: {
                id: user.id
            }
        }

        res.status(201).json(data)

    } 
    catch (error) {
        res.status(500).json({message: error.mesage})
        console.log('Error in signupUser', error.message)
    }
}

module.exports = {signupUser,loginUser};