import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <div className=" flex items-center justify-center min-h-screen bg-transparent gap-5">
            <Link
                href="/invoice"
                className=" underline font-normal text-blue-600"
            >
                Go to Invoices
            </Link>

            <Button variant="outline">Logout</Button>
        </div>
    );
}
