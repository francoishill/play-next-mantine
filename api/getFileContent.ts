'use server'
import fs from 'fs/promises';

export async function getFileContent() {
	const content = await fs.readFile('D:/dump/tmpText.txt', 'utf-8');

	await new Promise((resolve) => setTimeout(resolve, 1000));
	
	return content;
}
