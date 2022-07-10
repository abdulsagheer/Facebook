const User = require('../models/User')
const {validateEmail} = require('../helpers/validation')

exports.register = async (req, res) => {
    try {
        const {first_name, last_name, email, password, username, bYear, bMonth, bDay, gender} = req.body;
        if(!validateEmail(email)) {
            return res.status(400).json({
                message: 'Invalid email address'
            })
        }
        const check = await User.findOne({ email })
        if(check) {
            return res.status(400).json({
                message: "This email address is already in use.",
            });
        }
        return;
        const user = await new User({
            first_name,
            last_name,
            email,
            password,
            username,
            bYear,
            bMonth,
            bDay,
            gender,
        });
        user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};