// Importing Models
const User = require('../models/User')
// Importing Helper functions
const {validateEmail, validateLength, validateUsername} = require('../helpers/validation')
const {generateToken} =  require('../helpers/tokens');
// Importing Libraries
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            password,
            username,
            bYear,
            bMonth,
            bDay,
            gender,
        } = req.body;

        // Implementing email validation
        if (!validateEmail(email)) {
            return res.status(400).json({
            message: "Invalid email address",
            });
        }
        const check = await User.findOne({ email });

        // Check if the email address already exists
        if (check) {
            return res.status(400).json({
            message: "This email address is already in use.",
            });
        }

        // Validating the length first name and last name
        if (!validateLength(first_name, 3, 30)) {
            return res.status(400).json({
            message: "The first name must be at least 3 characters long.",
            });
        }
        if (!validateLength(last_name, 3, 30)) {
            return res.status(400).json({
            message: "The last name must be at least 3 characters long.",
            });
        }

        // Validating the length of password
        if (!validateLength(password, 6, 40)) {
            return res.status(400).json({
            message: "The password must be at least 6 characters long.",
            });
        }

        // Encrypted password 
        const cryptedPassword = await bcrypt.hash(password, 12);

        // Implementing username validation
        let tempUsername = first_name+last_name;
        let newUsername = await validateUsername(tempUsername);

        const user = await new User({
            first_name,
            last_name,
            email,
            password,
            username: newUsername,
            bYear,
            bMonth,
            bDay,
            gender,
        });
        user.save();
        const emailVerification = generateToken(
            { id: user._id.toString() },
            "30m"
        );
        console.log(emailVerification)
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};