import { Resend } from "resend";
import { NextResponse } from "next/server";
import { mailBody } from "@/utils/mailBody";

const POST = async (req: Request) => {
    const { fname, email, message } = await req.json();

    try {
        if (!process.env.API_KEY || !process.env.FROM || !process.env.TO) {
            return new NextResponse(null, {
                status: 500,
                statusText: "Missing email configuration",
            });
        }

        const resend = new Resend(process.env.API_KEY);
        const { data, error } = await resend.emails.send({
            from: process.env.FROM,
            to: process.env.TO,
            subject: `New message from ${fname}`,
            html: mailBody(message, email),
            reply_to: email,
        });

        if (error) {
            return new NextResponse(
                JSON.stringify({ error: error.message || "Could not send the message" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }
        return new NextResponse(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        if (error instanceof Error) {
            return new NextResponse(
                JSON.stringify({ error: error.message }),
                {
                    status: 500,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }
    }
};

export { POST };
