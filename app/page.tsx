'use client';

import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Button,
  Stack,
  Text,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useQuery } from '@tanstack/react-query';
import { getFileContent } from '../api/getFileContent';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  const {
    data: fileContent,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['fileContent'],
    queryFn: getFileContent,
  });

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />

      {isLoading && <Text>Loading...</Text>}
      {error && <Text c="red">Error: {error.message}</Text>}

      {fileContent && <Text c="green">fileContent: {fileContent}</Text>}

      <Accordion variant="separated">
        <AccordionItem value="First item">
          <AccordionControl>First item content</AccordionControl>

          <AccordionPanel>
            <Stack>
              <Text>First item content</Text>

              <Button
                onClick={() => {
                  notifications.show({
                    title: 'Test',
                    message: `This is a test notification`,
                  });
                }}
              >
                Show notification
              </Button>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
