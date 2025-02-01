import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
               id="get-started"
                  data-border="rounded"
                  href="/login"
                  variant="primary"
                  size="m"
                  arrowIcon
            >
                <Flex gap="8" vertical="center">
                  Get Started
                </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      <Flex fillWidth gap="24" mobileDirection="column">
        <Flex flex={1} paddingLeft="l">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Latest from the blog
          </Heading>
        </Flex>
        <Flex flex={3} paddingX="20">
          <Posts range={[1, 2]} columns="2" />
        </Flex>
      </Flex>
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
