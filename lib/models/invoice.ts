import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema(
    {
        ownerAddress: {
            street: {
                type: String,
                required: [true, "Street Address is required"],
            },
            city: String,
            postCode: String,
            country: String,
        },
        client: {
            name: { type: String, required: [true, "Client name is required"] },
            email: {
                type: String,
                required: [true, "Client email is required"],
            },
        },
        status: { type: String, default: "pending" },
        invoiceDueDate: {
            type: Date,
            required: true,
        },

        clientAddress: {
            street: String,
            city: String,
            postCode: String,
            country: String,
        },
        paymentTerms: {
            type: String,
        },
        projectDescription: {
            type: String,
            required: [true, "An invoice must have a description"],
        },
        items: [
            { name: String, quantity: Number, price: Number, total: Number },
        ],
        total: Number,
        invoiceId: String,
    },
    { timestamps: true }
);

export default mongoose.models.Invoice ||
    mongoose.model("Invoice", InvoiceSchema);
