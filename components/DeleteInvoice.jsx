"use client";
import React from "react";
import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
export default function DeleteInvoice({ invoice_id }) {
    const handleDeleteInvoice = async () => {
        try {
            const res = await fetch(
                `http://localhost:3000/api/invoices/${invoice_id}`,
                {
                    method: "DELETE",
                }
            );
            console.log("Invoice deleted successfully:");
        } catch (error) {
            console.error("Error deleting invoice:", error);
        }
    };
    return (
        <>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Are you absolutely sure? {invoice_id}
                </AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the invoice and remove invoice data from our servers.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel className="rounded-full">
                    Cancel
                </AlertDialogCancel>
                <Button
                    variant="destructive"
                    className="rounded-full mx-1"
                    onClick={handleDeleteInvoice}
                >
                    Delete
                </Button>
            </AlertDialogFooter>
        </>
    );
}
