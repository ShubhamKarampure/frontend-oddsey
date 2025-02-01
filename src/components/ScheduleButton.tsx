'use client';

import { IconButton } from "@/once-ui/components";

interface ScheduleButtonProps {
  href: string;
  title: string;
}

export default function ScheduleButton({ href, title }: ScheduleButtonProps) {
  return (
    <IconButton
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const date = new Date();
        const alertMessage = `${title} scheduled for ${date.toLocaleDateString()}`;
        alert(alertMessage);
      }}
      data-border="rounded"
      variant="secondary"
      icon="chevronRight"
    />
  );
}