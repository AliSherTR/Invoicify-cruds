"use client";
import Image from "next/image";
import Logo from "@/components/Logo";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import avatar from "@/public/image-avatar.jpg";

export default function SideBar() {
    return (
        <aside className="lg:h-screen  bg-transparent relative z-50 rounded-tr-[30px] rounded-br-[30px] border-none flex lg:flex-col overflow-hidden">
            <Logo />

            <div className=" flex lg:flex-col lg:w-full lg:items-center lg:justify-center flex-1 items-end justify-end gap-x-5 me-4 lg:me-0">
            <div className=" lg:flex-1 flex flex-col justify-end items-center pb-10 lg:border-b lg:h-full lg:w-full">
                <ThemeToggleButton />
            </div>
            <div className=" py-10 flex items-center justify-center cursor-pointer lg:w-full lg:self-stretch ">
                <Image
                    src={avatar}
                    alt="avatar"
                    className=" hover:border-[5px] border-purple-700 rounded-full"
                    width={40}
                    height={40}
                />
            </div>
            </div>
           
        </aside>
    );
}
