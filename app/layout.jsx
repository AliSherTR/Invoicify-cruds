import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Invoicify",
    description: "Create and manage all your invoices",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <div className="grid grid-cols-12 bg-transparent overflow-hidden h-screen">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className=" lg:col-start-1 lg:col-end-1 col-start-1 col-span-full">
                        <SideBar />

                        </div>

                        <main className="lg:col-start-2 bg-[#f8f8fb] dark:bg-[#141625] col-span-full min-h-screen flex items-center justify-center overflow-auto ">
                            <div className=" max-w-[1200px] m-auto w-full">
                                {children}
                            </div>
                        </main>
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
