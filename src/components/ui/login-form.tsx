"use client";
import React, { useState } from 'react';
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
import { useRouter } from 'next/navigation'; // Changed from 'next/router' to 'next/navigation'

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUpClick = () => {
        router.push('/signup');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Add your authentication logic here
            // Example:
            // const response = await signIn({ email, password });
            // if (response.success) {
            //     router.push('/home');
            // }

            // For now, we'll just navigate to home
            router.push('/about');
        } catch (error) {
            console.error('Login error:', error);
            // Handle error appropriately
        } finally {
            setIsLoading(false);
        }
    };

    const handleForgotPassword = () => {
        router.push('/forgot-password');
    };

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        try {
            // Add your Google authentication logic here
            // Example:
            // await signInWithGoogle();
            router.push('/about');
        } catch (error) {
            console.error('Google login error:', error);
            // Handle error appropriately
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={cn("tw-flex tw-items-center tw-justify-center", className)} {...props}>
            <Card className="tw-w-full tw-max-w-md tw-border-emerald-800">
                <CardHeader className="tw-space-y-2">
                    <CardTitle className="tw-text-2xl tw-text-emerald-400">
                        Login
                    </CardTitle>
                    <CardDescription className="tw-text-zinc-100">
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="tw-space-y-6">
                    <form onSubmit={handleSubmit}>
                        <div className="tw-space-y-2">
                            <Label htmlFor="email" className="tw-text-zinc-300">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="example@domain.com"
                                className="tw-text-zinc-100 tw-placeholder:text-zinc-500 focus:tw-border-emerald-600"
                                disabled={isLoading}
                            />
                        </div>
                        <div className="tw-space-y-2">
                            <div className="tw-flex tw-items-center tw-justify-between">
                                <Label htmlFor="password" className="tw-text-zinc-300">
                                    Password
                                </Label>
                                <Button 
                                    type="button"
                                    variant="link" 
                                    onClick={handleForgotPassword}
                                    className="tw-text-emerald-400 hover:tw-text-emerald-300 tw-px-0"
                                    disabled={isLoading}
                                >
                                    Forgot your password?
                                </Button>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                className="tw-text-zinc-100 tw-placeholder:text-zinc-500 focus:tw-border-emerald-600"
                                disabled={isLoading}
                            />
                        </div>
                        <div className="tw-space-y-4 tw-mt-6">
                            <Button 
                                type="submit" 
                                className="tw-w-full tw-bg-emerald-600 hover:tw-bg-emerald-700 tw-text-white"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </Button>
                            <Button 
                                type="button"
                                variant="outline" 
                                onClick={handleGoogleLogin}
                                className="tw-w-full tw-border-zinc-700 tw-text-zinc-300 hover:tw-text-zinc-100"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Connecting...' : 'Login with Google'}
                            </Button>
                        </div>
                    </form>
                    <div className="tw-text-center tw-text-sm">
                        <span className="tw-text-zinc-400">Don't have an account? </span>
                        <Button 
                            type="button"
                            variant="link" 
                            onClick={handleSignUpClick}
                            className="tw-text-emerald-400 hover:tw-text-emerald-300 tw-px-1"
                            disabled={isLoading}
                        >
                            Sign up
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}