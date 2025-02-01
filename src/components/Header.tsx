"use client"
import { usePathname, useRouter } from "next/navigation";
import { Fade, Flex, Button, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";
import { useEffect, useState } from "react";
import { routes } from "@/app/resources";

export const Header = () => {
  const pathname = usePathname() ?? "";
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  // Get the current algorithm type from the path
  const getAlgorithmType = () => {
    if (pathname.includes("/sorting")) return "sorting";
    if (pathname.includes("/pathfinding")) return "pathfinding";
    return "";
  };

  // Define when to show the main navbar and when to show the custom navbar
  const shouldShowMainNavbar = 
    pathname !== "/" && 
    pathname !== "/login" && 
    pathname !== "/signup" && 
    !pathname.startsWith("/learn/");

  const shouldShowLearnNavbar = pathname.startsWith("/learn/") && pathname !== "/learn";

  const handleLogoClick = () => {
    router.push("/about");
  };

  // Function to generate the correct path for learn section buttons
  const getLearnPath = (section) => {
    const algorithmType = getAlgorithmType();
    return `/learn/${algorithmType}/${section}`;
  };

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex fitHeight className={styles.position} as="header" zIndex={9} fillWidth padding="8" horizontal="center">
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          <Flex hide="s">
            <img 
              src="../../trademark/logo.png" 
              alt="Logo" 
              width={150} 
              className={styles.logo} 
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            />
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          {pathname === "/" && (
            <Flex paddingRight="12" horizontal="end" vertical="center" textVariant="body-default-s" gap="20">
              <Button href="/login">Login</Button>
              <Button href="/signup">Signup</Button>
            </Flex>
          )}

          {/* Main Navbar */}
          {shouldShowMainNavbar && (
            <Flex fillWidth horizontal="center">
              <Flex background="surface" border="neutral-medium" radius="m-4" shadow="l" padding="4" horizontal="center">
                <Flex gap="4" vertical="center" textVariant="body-default-s">
                  {routes["/about"] && (
                    <>
                      <ToggleButton className="s-flex-hide" prefixIcon="person" href="/about" label="Profile" selected={pathname === "/about"} />
                      <ToggleButton className="s-flex-show" prefixIcon="person" href="/about" selected={pathname === "/about"} />
                    </>
                  )}
                  {routes["/learn"] && (
                    <>
                      <ToggleButton className="s-flex-hide" prefixIcon="grid" href="/learn" label="Learn" selected={pathname.startsWith("/learn")} />
                      <ToggleButton className="s-flex-show" prefixIcon="grid" href="/learn" selected={pathname.startsWith("/learn")} />
                    </>
                  )}
                  {routes["/blog"] && (
                    <>
                      <ToggleButton className="s-flex-hide" prefixIcon="grid" href="/blog" label="Blog" selected={pathname.startsWith("/blog")} />
                      <ToggleButton className="s-flex-show" prefixIcon="grid" href="/blog" selected={pathname.startsWith("/blog")} />
                    </>
                  )}
                </Flex>
              </Flex>
            </Flex>
          )}

          {/* Custom Learn Navbar */}
          {shouldShowLearnNavbar && (
            <Flex fillWidth horizontal="center">
              <Flex background="surface" border="neutral-medium" radius="m-4" shadow="l" padding="4" horizontal="center">
                <Flex gap="4" vertical="center" textVariant="body-default-s">
                  <ToggleButton 
                    prefixIcon="book" 
                    href={getLearnPath("study-material")} 
                    label="Study Material" 
                    selected={pathname.endsWith("/study-material")} 
                  />
                  <ToggleButton 
                    prefixIcon="grid" 
                    href={getLearnPath("visualize")} 
                    label="Visualize" 
                    selected={pathname.endsWith("/visualize")} 
                  />
                  <ToggleButton 
                    prefixIcon="code" 
                    href={getLearnPath("code")} 
                    label="Code" 
                    selected={pathname.endsWith("/code")} 
                  />
                  <ToggleButton 
                    prefixIcon="file" 
                    href={getLearnPath("sheets")} 
                    label="Sheets" 
                    selected={pathname.endsWith("/sheets")} 
                  />
                  <ToggleButton 
                    prefixIcon="help" 
                    href={getLearnPath("quiz")} 
                    label="Quiz" 
                    selected={pathname.endsWith("/quiz")} 
                  />
                </Flex>
              </Flex>
            </Flex>
          )}

          {(shouldShowMainNavbar || shouldShowLearnNavbar) && (
            <Flex paddingRight="12" horizontal="end" vertical="center" textVariant="body-default-s" gap="20">
              <Button onClick={handleLogout}>Logout</Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
};