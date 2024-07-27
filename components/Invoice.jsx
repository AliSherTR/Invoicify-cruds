import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import rightArrow from "../../invoice-app/public/icon-arrow-right.svg";
import Link from "next/link";

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getUTCFullYear();

    return `${day}-${month}-${year}`;
}

export default function Invoice({ status, invoice }) {
    return (
        <Link href={`/invoice/${invoice._id}`}>
            <div className=" flex items-center justify-between gap-4 py-7 rounded-[10px]  px-4 cursor-pointer hover:border-purple-800 transition-all ease-in-out box-border border border-transparent bg-white dark:bg-[#1e2139] dark:text-white mb-4 ">
                <p className="text-sm font-semibold flex-1">
                    #{invoice.invoiceId}
                </p>
                <p className="text-[#7e88c3] text-[0.685rem] dark:text-white flex-1">
                    Due {formatDate(invoice.invoiceDate)}
                </p>
                <p className="text-[#7e88c3] text-[0.685rem] dark:text-white flex-1">
                    {invoice.clientName}
                </p>
                <p className="text-lg font-semibold flex-1">
                    {Intl.NumberFormat("ur-PK", {
                        style: "currency",
                        currency: "PKR",
                    }).format(invoice.total)}
                </p>
                <Button
                    variant={status}
                    className="flex items-center gap-2 flex-1"
                >
                    {status === "pending" && (
                        <span
                            className="bg-orange-600 
                     font-extrabold text-lg px-1 py-1 rounded-full"
                        ></span>
                    )}

                    {status === "paid" && (
                        <span
                            className="bg-green-600 
                     font-extrabold text-lg px-1 py-1 rounded-full"
                        ></span>
                    )}

                    {status === "draft" && (
                        <span
                            className="bg-gray-600 
                     font-extrabold text-lg px-1 py-1 rounded-full"
                        ></span>
                    )}

                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </Button>
                <Image src={rightArrow} alt="&rarr;" className=" ml-4 block" />
            </div>
        </Link>
    );
}
