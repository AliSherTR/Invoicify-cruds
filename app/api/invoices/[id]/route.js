import { connectDB } from "@/lib/db/connectDb";
import invoice from "@/lib/models/invoice";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        await connectDB();
        const data = await invoice.findById(id);
        revalidatePath(`/invoice/${id}`);
        return NextResponse.json({ message: "success", data: data });
    } catch (error) {
        // Return an error response
        return NextResponse.json(
            { message: "An error occurred", error: error.message },
            { status: 500 }
        );
    }
};

export const DELETE = async (request, { params }) => {
    const { id } = params;
    console.log(id);
    try {
        await connectDB();
        const data = await invoice.findByIdAndDelete(id);
        revalidatePath(`/invoice`);
        return NextResponse.json({ message: "success", data: data });
    } catch (error) {
        // Return an error response
        return NextResponse.json(
            { message: "An error occurred", error: error.message },
            { status: 500 }
        );
    }
};
