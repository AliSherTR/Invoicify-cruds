import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default async function Invoice({ params }) {
    const { id } = params;

    const res = await fetch(`http://localhost:3000/api/invoices/${id}`, {
        cache: "no-store",
    });

    const data = await res.json();
    return (
        <div className=" max-w-3xl m-auto">
            <Link href="/invoice" className=" flex items-center gap-3 mb-4">
                {" "}
                <span className=" text-purple-700 font-extrabold text-sm">
                    {" "}
                    &lt;{" "}
                </span>{" "}
                <span className=" font-semibold text-sm tracking-wider">
                    {" "}
                    Go Back
                </span>
            </Link>

            <div className=" px-6 py-9 rounded-xl bg-white dark:bg-[#1e2139] flex items-center justify-between mb-4 shadow-sm">
                <div className=" flex items-center gap-3">
                    <span className=" text-sm mx-4">Status:</span>
                    <Button
                        variant={data.status}
                        className=" flex items-center gap-3 px-16 "
                    >
                        {data.status === "pending" && (
                            <span
                                className="bg-orange-600
                     font-extrabold text-lg px-1 py-1 rounded-full"
                            ></span>
                        )}
                        {data.status === "paid" && (
                            <span
                                className="bg-green-600
                     font-extrabold text-lg px-1 py-1 rounded-full"
                            ></span>
                        )}
                        {data.status === "draft" && (
                            <span
                                className="bg-gray-600
                     font-extrabold text-lg px-1 py-1 rounded-full"
                            ></span>
                        )}

                        <span className=" mx-1 text-xs">{data.status}</span>
                    </Button>
                </div>
                <div>
                    <Button variant="outline" className="rounded-full mx-1">
                        Edit
                    </Button>
                    <Button variant="destructive" className="rounded-full mx-1">
                        Delete
                    </Button>
                </div>
            </div>

            <div className=" px-6 py-9 rounded-xl bg-white dark:bg-[#1e2139]">
                <div className=" flex justify-between">
                    <div>
                        <p className=" font-bold text-sm mb-2">
                            {" "}
                            <span className=" text-gray-500">#</span>
                            {data.invoiceId}
                        </p>
                        <p className=" font-light text-sm text-gray-400">
                            Re-branding
                        </p>
                    </div>
                    <div>
                        <p className=" font-light  text-gray-400  text-xs">
                            {data.ownerStreeAddress}
                        </p>
                        <p className=" font-light text-xs text-gray-400">
                            {data.ownerCity}
                        </p>
                        <p className=" font-light text-xs text-gray-400">
                            {data.ownerPostCode}
                        </p>
                        <p className=" font-light text-xs text-gray-400 ">
                            {data.ownerCountry}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 mt-3">
                    <div>
                        {" "}
                        <h1 className=" text-gray-400 text-sm mb-4 ">
                            Invoice Date
                        </h1>
                        <p>{data.invoiceDate}</p>
                        <h1 className=" text-gray-400 text-sm mb-4  mt-8">
                            Paymet Due
                        </h1>
                        <p>19 Aug 2021</p>
                    </div>
                    <div>
                        <h1 className=" text-gray-400 text-sm mb-4 ">
                            Bill To
                        </h1>
                        <p className="mb-8">{data.clientName}</p>

                        <p className=" font-light  text-gray-400  text-xs">
                            19 Union Terrace
                        </p>
                        <p className=" font-light text-xs text-gray-400">
                            {data.clientAddress?.city}
                        </p>
                        <p className=" font-light text-xs text-gray-400">
                            {data.clientAddress?.postCode}
                        </p>
                        <p className=" font-light text-xs text-gray-400 ">
                            {data.clientAddress?.country}
                        </p>
                    </div>
                    <div>
                        <h1 className=" font-light  text-gray-400 text-sm mb-4">
                            Sent To
                        </h1>
                        <p>{data.clientEmail}</p>
                    </div>
                </div>

                <div className="max-w-2xl m-auto w-full p-8  mt-8 rounded-xl bg-[#f9fafe] dark:bg-[#252945]">
                    <Table className="mb-5">
                        <TableCaption>
                            A list of prducts in invoice.
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">
                                    Item Name
                                </TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead className="text-right">
                                    Total
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">
                                    Iphone 14 Pro Max
                                </TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>PKR 320,000 </TableCell>
                                <TableCell className="text-right">
                                    PKR 320,000
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <div className=" flex justify-between bg-[#252945] dark:bg-black px-4 py-8 rounded-b-xl text-white">
                        <h1 className=" text-xs  text-gray-400">Amount Due</h1>
                        <h1 className=" text-xl font-bold ">PKR 320,000</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
