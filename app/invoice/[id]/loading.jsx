import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
    return (
        <div className="flex flex-col space-y-3 max-w-3xl w-full m-auto">
            <Skeleton className="h-[125px] mb-4 w-full rounded-xl" />
            <div className="space-y-2 max-w-3xl m-auto">
                <Skeleton className="h-12 w-[800px]" />
                <Skeleton className="h-12 w-full " />
            </div>
        </div>
    );
}
