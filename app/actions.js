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
            ownerAddress: {
                street: formDataObject.ownerStreetAddress,
                postCode: formDataObject.ownerPostCode,
                city: formDataObject.ownerCity,
                country: formDataObject.ownerCountry,
            },
            client: {
                name: formDataObject.clientName,
                email: formDataObject.clientEmail,
            },
            status: "pending", // Default status
            invoiceDueDate: new Date(formDataObject.invoiceDueDate),

            clientAddress: {
                street: formDataObject.clientStreetAddress,
                city: formDataObject.clientCity,
                postCode: formDataObject.clientPostCode,
                country: formDataObject.clientCountry,
            },
            paymentTerms: formDataObject.paymentTerms,
            projectDescription: formDataObject.projectDescription,
            items: formDataObject.itemsList.map((item) => ({
                name: item.name,
                quantity: parseInt(item.quantity, 10),
                price: parseFloat(item.price),
                total: parseFloat(item.totalPrice),
            })),
            total: formDataObject.itemsList.reduce(
                (acc, item) => acc + parseFloat(item.totalPrice),
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
