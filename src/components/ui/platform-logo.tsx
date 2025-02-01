import Image from "next/image"

interface PlatformLogoProps {
  platform: "LeetCode" | "HackerRank" | "Codeforces"
  className?: string
}

export function PlatformLogo({ platform, className = "h-6 w-6" }: PlatformLogoProps) {
  const logoSrc = {
    LeetCode: "/trademark/leetcode.png",
    HackerRank: "/trademark/hackerank.png",
    Codeforces: "/trademark/codeforces.png",
  }[platform]

  return (
    <Image src={logoSrc || "/placeholder.svg"} alt={`${platform} logo`} width={24} height={24} className={className} />
  )
}

