"use client";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { useEffect } from "react";

export default function NotFound() {
    useEffect(() => {
        console.error("404 Error: User attempted to access a non-existent route.");
    }, []);

    return (
        <div className="container flex flex-col items-center justify-center py-32 text-center">
            <h1 className="text-8xl font-display font-bold mb-6">404</h1>
            <h2 className="text-3xl font-display font-semibold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Button asChild className="rounded-full">
                <Link href="/">Return to Home</Link>
            </Button>
        </div>
    );
}
