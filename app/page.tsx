import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Text } from '@mantine/core';
import { getFileContent } from '../api/getFileContent';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default async function HomePage() {
  const fileContent = await getFileContent();

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />

      <Text c="green">fileContent: {fileContent}</Text>

      <Accordion variant="separated">
        <AccordionItem value="First item">
          <AccordionControl>First item content</AccordionControl>

          <AccordionPanel>First item content</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
