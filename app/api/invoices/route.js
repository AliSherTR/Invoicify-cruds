import { connectDB } from "@/lib/db/connectDb";
import invoice from "@/lib/models/invoice";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();

        const invoices = await invoice.find();

        return NextResponse.json(invoices);
    } catch (error) {
        throw new Error("Error getting invoices!!");
    }
};
