import path from "path";
import fs from 'fs';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory: string = path.join(process.cwd(), 'content');

export async function getPageContent(name: string): Promise<string> {
    const fullPath: string = path.join(contentDirectory, `${name}.md`);
    const fileContents: string = fs.readFileSync(fullPath, 'utf8');

    // 使用 remark 将 markdown 转换为 HTML 字符串
    const processedContent = await remark()
        .use(html)
        .process(fileContents);
    const contentHtml: string = processedContent.toString();

    // 返回结合了 frontmatter 数据和处理后的内容
    return contentHtml;
}
