"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { createInvoice, State } from "@/app/actions";
import { useFieldArray, useForm } from "react-hook-form";
import { useFormState, useFormStatus } from "react-dom";
// import AlertModal from "./AlertModal";
import { SheetTrigger } from "./ui/sheet.jsx";

export default function AddInvoice() {
    const status = useFormStatus();
    const [state, formAction] = useFormState(createInvoice, null);
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (!state) {
            return;
        }
    }, [state]);

    const { fields, append, remove } = useFieldArray({
        control,
        name: "itemList",
    });

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("ownerStreetAddress", data.ownerStreetAddress);
        formData.append("ownerCity", data.ownerCity);
        formData.append("ownerPostCode", data.ownerPostCode.toString());
        formData.append("ownerCountry", data.ownerCountry);
        formData.append("clientName", data.clientName);
        formData.append("clientEmail", data.clientEmail);
        formData.append("clientStreeAddress", data.clientStreetAddress);
        formData.append("clientCity", data.clientCity);
        formData.append("clientPostCode", data.clientPostCode.toString());
        formData.append("clientCountry", data.clientCountry);
        const invoiceDate = new Date(data.invoiceDate);
        formData.append("invoiceDueDate", invoiceDate.toISOString());
        formData.append("paymentTerms", data.paymentTerms);
        formData.append("projectDescription", data.projectDescription);
        const itemListObjects = data.itemList.map((item) => {
            const totalPrice = item.quantity * item.price;
            return {
                name: item.itemName,
                price: item.price.toString(),
                quantity: item.quantity.toString(),
                totalPrice: totalPrice.toString(),
            };
        });
        formData.append("itemsList", JSON.stringify(itemListObjects));

        formAction(formData);

        // reset();
    };

    const calculateTotal = (index) => {
        const item = fields[index];
        return item.quantity * item.price;
    };

    // if (state?.status === "success") <AlertModal />;

    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            <p className=" text-[#7c5dfa] text-sm font-bold mb-3 mt-5">
                Bill from
            </p>

            <div className=" mb-5">
                <label
                    htmlFor="ownerStreetAddress"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    Street Address
                </label>
                <input
                    type="text"
                    id="ownerStreetAddress"
                    {...register("ownerStreetAddress", {
                        required: "Street Address is required",
                    })}
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                />
                {errors.ownerStreetAddress && (
                    <span className="text-red-600 text-sm">
                        {errors.ownerStreetAddress.message}
                    </span>
                )}
            </div>

            <div className=" flex justify-between items-center gap-3 mb-5">
                <div>
                    <label
                        htmlFor="ownerCity"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        City
                    </label>
                    <input
                        type="text"
                        id="ownerCity"
                        {...register("ownerCity", {
                            required: "City is required",
                        })}
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    />
                    {errors.ownerCity && (
                        <span className="text-red-600 text-sm">
                            {errors.ownerCity.message}
                        </span>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="ownerPostCode"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Post Code
                    </label>
                    <input
                        type="text"
                        id="ownerPostCode"
                        {...register("ownerPostCode", {
                            required: "Post Code is required",
                        })}
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    />
                    {errors.ownerPostCode && (
                        <span className="text-red-600 text-sm">
                            {errors.ownerPostCode.message}
                        </span>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="ownerCountry"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Country
                    </label>
                    <input
                        type="text"
                        id="ownerCountry"
                        {...register("ownerCountry", {
                            required: "Country is required",
                        })}
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    />
                    {errors.ownerCountry && (
                        <span className="text-red-600 text-sm">
                            {errors.ownerCountry.message}
                        </span>
                    )}
                </div>
            </div>

            <p className=" text-[#7c5dfa] text-sm font-bold mb-3 mt-5">
                Bill To
            </p>

            <div className=" mb-5">
                <label
                    htmlFor="clientName"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    {`Client's`} Name
                </label>
                <input
                    type="text"
                    id="clientName"
                    {...register("clientName", {
                        required: "Client's Name is required",
                    })}
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                />
                {errors.clientName && (
                    <span className="text-red-600 text-sm">
                        {errors.clientName.message}
                    </span>
                )}
            </div>
            <div className=" mb-5">
                <label
                    htmlFor="clientEmail"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    {`Client's`} Email
                </label>
                <input
                    type="email"
                    id="clientEmail"
                    {...register("clientEmail", {
                        required: "Client's Email is required",
                    })}
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                />
                {errors.clientEmail && (
                    <span className="text-red-600 text-sm">
                        {errors.clientEmail.message}
                    </span>
                )}
            </div>

            <div className=" mb-5">
                <label
                    htmlFor="clientStreetAddress"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    Street Address
                </label>
                <input
                    type="text"
                    id="clientStreetAddress"
                    {...register("clientStreetAddress", {
                        required: "Street Address is required",
                    })}
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                />
                {errors.clientStreetAddress && (
                    <span className="text-red-600 text-sm">
                        {errors.clientStreetAddress.message}
                    </span>
                )}
            </div>

            <div className=" flex justify-between items-center gap-3 mb-5">
                <div>
                    <label
                        htmlFor="clientCity"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        City
                    </label>
                    <input
                        type="text"
                        id="clientCity"
                        {...register("clientCity", {
                            required: "City is required",
                        })}
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    />
                    {errors.clientCity && (
                        <span className="text-red-600 text-sm">
                            {errors.clientCity.message}
                        </span>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="clientPostCode"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Post Code
                    </label>
                    <input
                        type="text"
                        id="clientPostCode"
                        {...register("clientPostCode", {
                            required: "Post Code is required",
                        })}
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    />
                    {errors.clientPostCode && (
                        <span className="text-red-600 text-sm">
                            {errors.clientPostCode.message}
                        </span>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="clientCountry"
                        className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                    >
                        Country
                    </label>
                    <input
                        type="text"
                        id="clientCountry"
                        {...register("clientCountry", {
                            required: "Country is required",
                        })}
                        className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                    />
                    {errors.clientCountry && (
                        <span className="text-red-600 text-sm">
                            {errors.clientCountry.message}
                        </span>
                    )}
                </div>
            </div>

            <div className=" mb-5">
                <label
                    htmlFor="invoiceDate"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    Invoice Date
                </label>
                <input
                    type="date"
                    id="invoiceDate"
                    {...register("invoiceDate", {
                        required: "Invoice Date is required",
                    })}
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                />
                {errors.invoiceDate && (
                    <span className="text-red-600 text-sm">
                        {errors.invoiceDate.message}
                    </span>
                )}
            </div>

            <div className=" mb-5">
                <label
                    htmlFor="paymentTerms"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    Payment Terms
                </label>
                <input
                    type="text"
                    id="paymentTerms"
                    {...register("paymentTerms", {
                        required: "Payment Terms are required",
                    })}
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                />
                {errors.paymentTerms && (
                    <span className="text-red-600 text-sm">
                        {errors.paymentTerms.message}
                    </span>
                )}
            </div>

            <div className=" mb-5">
                <label
                    htmlFor="projectDescription"
                    className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                >
                    Project Description
                </label>
                <input
                    type="text"
                    id="projectDescription"
                    {...register("projectDescription", {
                        required: "Project Description is required",
                    })}
                    className=" w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                />
                {errors.projectDescription && (
                    <span className="text-red-600 text-sm">
                        {errors.projectDescription.message}
                    </span>
                )}
            </div>

            {/* Items List */}
            <p className="text-[#777f98] text-lg font-bold mb-3 mt-5">
                Items List
            </p>
            {fields.map((field, index) => (
                <div
                    key={field.id}
                    className="flex justify-between items-center gap-3 mb-5"
                >
                    <div>
                        <label
                            htmlFor={`itemList.${index}.itemName`}
                            className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                        >
                            Item Name:
                        </label>
                        <input
                            type="text"
                            id={`itemList.${index}.itemName`}
                            {...register(`itemList.${index}.itemName`, {
                                required: "Item Name is required",
                            })}
                            className="w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                        />
                        {errors.itemList?.[index]?.itemName && (
                            <span className="text-red-600">
                                {errors.itemList[index].itemName?.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor={`itemList.${index}.quantity`}
                            className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                        >
                            Quantity:
                        </label>
                        <input
                            type="number"
                            id={`itemList.${index}.quantity`}
                            {...register(`itemList.${index}.quantity`, {
                                required: "Quantity is required",
                            })}
                            defaultValue={0}
                            onChange={() => calculateTotal(index)}
                            className="w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                        />
                        {errors.itemList?.[index]?.quantity && (
                            <span className="text-red-600">
                                {errors.itemList[index].quantity?.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor={`itemList.${index}.price`}
                            className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id={`itemList.${index}.price`}
                            {...register(`itemList.${index}.price`, {
                                required: "Price is required",
                            })}
                            className="w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                        />
                        {errors.itemList?.[index]?.price && (
                            <span className="text-red-600">
                                {errors.itemList[index].price?.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor={`itemList.${index}.total`}
                            className="text-[#7e88c3] text-xs block mb-3 dark:text-white"
                        >
                            Total
                        </label>
                        <input
                            type="text"
                            id={`itemList.${index}.total`}
                            value={calculateTotal(index)}
                            className="w-full py-3 px-2 border border-gray-300 dark:bg-[#1e2139] dark:border-[#1e2139]"
                            disabled
                        />
                    </div>
                    <div>
                        <label
                            htmlFor={`itemList.${index}.removeItem`}
                            className="text-[#7e88c3] text-xs block mb-3 opacity-0"
                        >
                            1234
                        </label>

                        <button type="button" onClick={() => remove(index)}>
                            <svg
                                width="13"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                                className="hover:fill-red-600 ms-2 transition-all duration-150 ease-in-out dark:fill-white dark:hover:fill-red-600"
                            >
                                <path
                                    d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                                    fillRule="nonzero"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
            <Button
                type="button"
                variant="outline"
                className="text-center w-full flex items-center text-[#7e88c3] font-extrabold text-sm"
                onClick={() => append({ itemName: "", quantity: 0, price: 0 })}
            >
                <span className="me-3">+</span> Add New Item
            </Button>

            {/* Submit button */}
            <div className="flex justify-between items-center w-full mt-5 mb-5">
                <SheetTrigger>
                    <Button
                        onClick={() => reset()}
                        variant="outline"
                        className="text-center text-[#7e88c3] text-sm"
                    >
                        Discard
                    </Button>
                </SheetTrigger>
                <div>
                    <Button
                        variant="outline"
                        className="text-center rounded-[20px] py-4 me-3 text-sm"
                    >
                        Save as Draft
                    </Button>
                    <Button
                        type="submit"
                        className="text-center rounded-[20px] py-4 text-sm"
                        disabled={status.pending}
                    >
                        Save & Send
                    </Button>
                </div>
            </div>
        </form>
    );
}
