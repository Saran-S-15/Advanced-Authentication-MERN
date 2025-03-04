import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const reciptent = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: reciptent,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        });
        console.log("Email sent successfully", response);
    } catch (error) {
        console.log(`Error sending verification email, ${error}`);
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const reciptent = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: reciptent,
            template_uuid: "90ae6009-c4c8-437c-8cb0-76b6d430e915",
            template_variables: {
                "company_info_name": "Auth Company",
                "name": name
            },
        });
        console.log("Email sent successfully", response);
    } catch (error) {
        console.log(`Error sending welcome email, ${error}`);
        throw new Error(`Error sending welcome email: ${error}`);
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        })
        console.log("Email sent successfully", response);
    } catch (error) {
        console.log(`Error sending password reset email, ${error}`);
        throw new Error(`Error sending password reset email: ${error}`);
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Successfully",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset"
        })
        console.log("Email sent successfully", response);
    } catch (error) {
        console.log(`Error sending password reset success email, ${error}`);
        throw new Error(`Error sending password reset success email: ${error}`);
    }
}
