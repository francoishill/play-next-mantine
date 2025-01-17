import { Text } from '@mantine/core';
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
    </>
  );
}
