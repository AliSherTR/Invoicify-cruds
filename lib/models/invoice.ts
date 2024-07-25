import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
    ownerStreeAddress: { type: String, required: true },
    ownerPostCode: { type: String, required: true },
    ownerCity: { type: String },
    ownerCountry: { type: String },
    clientName: { type: String },
    clientEmail: { type: String },
    status: { type: String, default: "pending" },
    invoiceDate: {
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
    items: [{ name: String, quantity: Number, price: Number, total: Number }],
    total: Number,
    invoiceId: String,
});

export default mongoose.models.Invoice ||
    mongoose.model("Invoice", InvoiceSchema);
