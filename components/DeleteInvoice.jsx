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
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
export default function DeleteInvoice({ invoice_id }) {
    const router = useRouter();
    const { toast } = useToast();
    const handleDeleteInvoice = async () => {
        try {
            const res = await fetch(
                `http://localhost:3000/api/invoices/${invoice_id}`,
                {
                    method: "DELETE",
                }
            );
            router.push("/invoice");
        } catch (error) {
            console.error("Error deleting invoice:", error);
        }
    };
    return (
        <>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
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
                    onClick={() => {
                        handleDeleteInvoice();
                        toast({
                            description: "Successfully deleted the invoice",
                        });
                    }}
                >
                    Delete
                </Button>
            </AlertDialogFooter>
        </>
    );
}
