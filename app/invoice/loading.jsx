import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function loading() {
    return (
        <div className=" space-y-3 max-w-3xl w-full m-auto">
            <Skeleton className="h-12" />
            <Skeleton className="h-12" />

            <Skeleton className="h-12" />
            <Skeleton className="h-12" />
            <Skeleton className="h-12" />
            <Skeleton className="h-12" />
            <Skeleton className="h-12" />
            <Skeleton className="h-12" />
            <Skeleton className="h-12" />
            <Skeleton className="h-12" />
            <Skeleton className="h-12" />
            <Skeleton className="h-12" />
            <Skeleton className="h-12" />
            <Skeleton className="h-12" />
        </div>
    );
}
