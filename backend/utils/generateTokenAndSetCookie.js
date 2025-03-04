import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        httpOnly: true, // cookie cannot be accessed by client side scripts
        secure: process.env.NODE_ENV === "production", // cookie will only be set in production
        sameSite: "strict", // cookie will only be set in the same
        maxAge: 7 * 24 * 60 * 60 * 1000, // cookie will expire after 7 days
    });
}

export default generateTokenAndSetCookie;