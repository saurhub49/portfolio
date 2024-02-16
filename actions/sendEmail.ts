"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import EmailBody from "@/components/helpers/EmailBody";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");
    const name = formData.get("name");

    // simple server-side validation
    if (!validateString(name, 50)) {
        return {
            error: "Invalid sender name",
        };
    }
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Portfolio mail <onboarding@resend.dev>",
            to: "saurabhmahajan854@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail,
            react: React.createElement(EmailBody, {
                message: message,
                senderEmail: senderEmail,
                name: name,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};