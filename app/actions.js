"use server";

import { connectDB } from "@/lib/db/connectDb";
import Invoice from "@/lib/models/invoice"; // Adjust the path as needed
import { revalidatePath } from "next/cache";

function generateUniqueId() {
    const prefix = "RT";
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}${randomNumber}`;
}

export async function createInvoice(prevState, data) {
    await connectDB();

    try {
        const formDataObject = {};
        Array.from(data.entries()).forEach(([key, value]) => {
            formDataObject[key] = value;
        });

        // Transform itemList from JSON string to an array
        if (formDataObject.itemsList) {
            formDataObject.itemsList = JSON.parse(formDataObject.itemsList);
        }

        // Create a new Invoice document using the Mongoose model
        const newInvoice = new Invoice({
            ownerStreeAddress: formDataObject.ownerStreetAddress,
            ownerPostCode: formDataObject.ownerPostCode,
            ownerCity: formDataObject.ownerCity,
            ownerCountry: formDataObject.ownerCountry,
            clientName: formDataObject.clientName,
            clientEmail: formDataObject.clientEmail,
            status: "pending", // Default status
            invoiceDate: new Date(formDataObject.invoiceDate),
            clientAddress: {
                street: formDataObject.clientStreetAddress,
                city: formDataObject.clientCity,
                postCode: formDataObject.clientPostCode,
                country: formDataObject.clientCountry,
            },
            paymentTerms: formDataObject.paymentTerms,
            items: formDataObject.itemsList.map((item) => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                total: item.totalPrice,
            })),
            total: formDataObject.itemsList.reduce(
                (acc, item) => acc + item.totalPrice,
                0
            ),
            invoiceId: generateUniqueId(),
        });

        // Save the invoice to the database
        await newInvoice.save();
        revalidatePath("/invoice");

        return { status: "success", message: "Invoice created successfully" };
    } catch (error) {
        console.error("Error creating invoice:", error);
        return { status: "error", message: "Failed to create invoice" };
    }
}
