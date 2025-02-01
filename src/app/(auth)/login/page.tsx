"use client"
import { LoginForm } from "@/components/ui/login-form"

export default function Page() {
    return (
        <div className="tw-flex tw-w-full tw-items-center tw-justify-center tw-p-5 md:tw-p-10">
            <div className="tw-w-full tw-max-w-sm">
                <LoginForm />
            </div>
        </div>
    )
}
