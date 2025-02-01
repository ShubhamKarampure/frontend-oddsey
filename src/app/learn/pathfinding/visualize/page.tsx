import { Card, Column, Row, Line, Text, Icon, SmartImage } from "@/once-ui/components";

export default function PathFindingCard() {
  return (
    <a href="https://frontend-odddsey.vercel.app/#/path-finder/" 
       style={{ textDecoration: 'none' }}>
      <Card maxWidth={24} radius="l-4" direction="column">
        <SmartImage
          sizes="640px"
          fillWidth
          aspectRatio="4 / 3"
          radius="l"
          src="/images/courses/pathfinding.gif"
        />
        <Column fillWidth paddingX="20" paddingY="24" gap="8">
          <Text variant="body-default-xl">Visualize Pathfinding Algorithms</Text>
          <Text onBackground="neutral-weak" variant="body-default-s">
            Explore the dynamic world of pathfinding algorithms and watch them solve real-world navigation problems through interactive visualizations.
          </Text>
        </Column>
        <Line background="neutral-alpha-medium" />
        <Row
          paddingX="20"
          paddingY="12"
          gap="8"
          vertical="center"
          textVariant="label-default-s"
          onBackground="neutral-medium"
        >
        </Row>
      </Card>
    </a>
  );
}
