import User from "../Model/UserModel.js"

export const ContactMessage = async(req, res) => {
    try {
        const { name, email, message } = req.body
        console.log(req.body);
        
        if (!name || !email || !message) {
            return res.status(400).json({
                message: "Name, email and message are required",
                success: false
            })
        }

        const user = await User.create({
            name,
            email,
            message
        })

        return res.status(200).json({
            message: "Message sent successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong. Please try again later",
            success: false
        });
    }
}