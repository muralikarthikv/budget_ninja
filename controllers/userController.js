const userModel=require('../models/userModel')

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;  // Corrected from request.body to req.body
        const user = await userModel.findOne({ email, password });  // Store the result in a variable
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });  // Use JSON response for consistency
        }
        
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,  // Provide the error message for better debugging
        });
    }
};
const registerController = async (req,res) =>{
    try {
        const newUser =new userModel(req.body)
        await newUser.save(),
        res.status(201).json({
            success:true,
            newUser,
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            error
        })
    }
}
module.exports = {loginController ,registerController}