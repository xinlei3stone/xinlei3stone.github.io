import fs from 'fs';
import path from 'path';
import { parse } from 'smol-toml';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export function getMarkdownContent(filename: string): string {
    try {
        const filePath = path.join(CONTENT_DIR, filename);
        return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        console.error(`Error loading markdown file ${filename}:`, error);
        return '';
    }
}

export function getTomlContent<T>(filename: string): T | null {
    try {
        const filePath = path.join(CONTENT_DIR, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const parsed = parse(fileContent) as unknown as T;
        // TOML parsers return null-prototype objects; React Server Components
        // cannot serialize those when passing props to Client Components.
        return JSON.parse(JSON.stringify(parsed)) as T;
    } catch (error) {
        console.error(`Error loading TOML file ${filename}:`, error);
        return null;
    }
}

export function getPageConfig<T = unknown>(pageName: string): T | null {
    return getTomlContent<T>(`${pageName}.toml`);
}
