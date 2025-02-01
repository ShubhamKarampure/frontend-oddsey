"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignUpForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Submit logic (API call or validation)
        console.log('Sign up successful');
        
        // Navigate to /home upon successful sign-up
        router.push('/home');
    };

    const handleLoginClick = () => {
        router.push('/login');
    };

    return (
        <div className={cn("tw-flex tw-items-center tw-justify-center", className)} {...props}>
            <Card className="tw-w-full tw-max-w-md tw-border-emerald-800">
                <CardHeader className="tw-space-y-2">
                    <CardTitle className="tw-text-2xl tw-text-emerald-400">
                        Sign Up
                    </CardTitle>
                    <CardDescription className="tw-text-zinc-100">
                        Enter your details to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent className="tw-space-y-6">
                    <div className="tw-space-y-2">
                        <Label htmlFor="email" className="tw-text-zinc-300">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@domain.com"
                            className="tw-text-zinc-100 tw-placeholder:text-zinc-500 focus:tw-border-emerald-600"
                        />
                    </div>
                    <div className="tw-space-y-2">
                        <Label htmlFor="password" className="tw-text-zinc-300">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="tw-text-zinc-100 tw-placeholder:text-zinc-500 focus:tw-border-emerald-600"
                        />
                    </div>
                    <div className="tw-space-y-2">
                        <Label htmlFor="confirmPassword" className="tw-text-zinc-300">
                            Confirm Password
                        </Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="tw-text-zinc-100 tw-placeholder:text-zinc-500 focus:tw-border-emerald-600"
                        />
                    </div>
                    <div className="tw-space-y-4">
                        <Button
                            onClick={handleSubmit}
                            className="tw-w-full tw-bg-emerald-600 hover:tw-bg-emerald-700 tw-text-white"
                        >
                            Sign Up
                        </Button>
                    </div>
                    <div className="tw-text-center tw-text-sm">
                        <span className="tw-text-zinc-400">Already have an account? </span>
                        <Button 
                            variant="link" 
                            onClick={handleLoginClick}
                            className="tw-text-emerald-400 hover:tw-text-emerald-300 tw-px-1"
                        >
                            Login
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}