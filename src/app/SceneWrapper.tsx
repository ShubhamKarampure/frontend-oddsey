'use client';

import { Flex } from "@/once-ui/components";
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation';

const Scene = dynamic(() => import("@/components/Scene"), { 
  ssr: false,
  loading: () => null
});

export function SceneWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (!isHomePage) return null;

  return (
    <Flex 
      position="absolute"
      top="0"
      right="0"
      style={{ 
        width: '1100px', 
        height: '1100px',
        pointerEvents: 'none',
        zIndex: 10 
      }}
    >
      <Scene />
    </Flex>
  );
}
