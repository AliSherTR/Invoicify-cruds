"use client";
import Image from "next/image";
import Logo from "@/components/Logo";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import avatar from "@/public/image-avatar.jpg";

export default function SideBar() {
    return (
        <aside className="lg:h-screen bg-[#252945] relative z-50 rounded-tr-[30px] rounded-br-[30px] border-none flex flex-col overflow-hidden">
            <Logo />
            <div className=" flex-1 flex flex-col justify-end items-center pb-10 border-b">
                <ThemeToggleButton />
            </div>
            <div className=" py-10 flex items-center justify-center cursor-pointer">
                <Image
                    src={avatar}
                    alt="avatar"
                    className=" hover:border-[5px] border-purple-700 rounded-full"
                    width={40}
                    height={40}
                />
            </div>
        </aside>
    );
}
