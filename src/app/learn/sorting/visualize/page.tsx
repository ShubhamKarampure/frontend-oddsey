import { Card, Column, Row, Line, Text, Icon, SmartImage } from "@/once-ui/components";

export default function ProximaBCard() {
  return (
    <a href="https://frontend-odddsey.vercel.app/#/sorting-visualizer/bubble" 
       style={{ textDecoration: 'none' }}>
      <Card maxWidth={24} radius="l-4" direction="column">
        <SmartImage
          sizes="640px"
          fillWidth
          aspectRatio="4 / 3"
          radius="l"
          src="/images/courses/sorting.gif"
        />
        <Column fillWidth paddingX="20" paddingY="24" gap="8">
          <Text variant="body-default-xl">Visualize Sorting Algorithms</Text>
          <Text onBackground="neutral-weak" variant="body-default-s">
            Dive into the fascinating world of sorting algorithms and see them in action with interactive visualizations.
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
