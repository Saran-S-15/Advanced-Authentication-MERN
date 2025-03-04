import jwt from "jsonwebtoken";

export const protectRoute = (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "You are not authorized to access this route" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: "Invalid token. You are not authorized to access this route" });
        }

        req.userId = decoded.userId;

        next();
    } catch (error) {
        console.log("Error in Protect Route Middleware: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

