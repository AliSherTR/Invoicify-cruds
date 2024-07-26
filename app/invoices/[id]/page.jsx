import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Invoice({ params }) {
    return (
        <div className=" max-w-3xl m-auto">
            <Link href="/invoices" className=" flex items-center gap-3 mb-4">
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
                        variant="pending"
                        className=" flex items-center gap-3 px-16 "
                    >
                        {/* {status === "pending" && (
                    <span
                        className="bg-orange-600 
                     font-extrabold text-lg px-1 py-1 rounded-full"
                    ></span>
                )} */}
                        {/* {status === "paid" && (
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
                )} */}
                        <span
                            className="bg-orange-600 
                     font-extrabold text-lg px-1 py-1 rounded-full"
                        ></span>{" "}
                        <span className=" mx-1 text-xs">Pending</span>
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
                            {params.id}
                        </p>
                        <p className=" font-light text-sm text-gray-400">
                            Re-branding
                        </p>
                    </div>
                    <div>
                        <p className=" font-light  text-gray-400  text-xs">
                            19 Union Terrace
                        </p>
                        <p className=" font-light text-xs text-gray-400">
                            London
                        </p>
                        <p className=" font-light text-xs text-gray-400">
                            E1 3EZ
                        </p>
                        <p className=" font-light text-xs text-gray-400 ">
                            United Kingdom
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 mt-3">
                    <div>
                        {" "}
                        <h1 className=" text-gray-400 text-sm mb-4 ">
                            Invoice Date
                        </h1>
                        <p>18 Aug 2021</p>
                        <h1 className=" text-gray-400 text-sm mb-4  mt-8">
                            Paymet Due
                        </h1>
                        <p>19 Aug 2021</p>
                    </div>
                    <div>
                        <h1 className=" text-gray-400 text-sm mb-4 ">
                            Bill To
                        </h1>
                        <p className="mb-8">Jensen Huang</p>

                        <p className=" font-light  text-gray-400  text-xs">
                            19 Union Terrace
                        </p>
                        <p className=" font-light text-xs text-gray-400">
                            London
                        </p>
                        <p className=" font-light text-xs text-gray-400">
                            E1 3EZ
                        </p>
                        <p className=" font-light text-xs text-gray-400 ">
                            United Kingdom
                        </p>
                    </div>
                    <div>
                        <h1 className=" font-light  text-gray-400 text-sm mb-4">
                            Sent To
                        </h1>
                        <p>jensen@mail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
