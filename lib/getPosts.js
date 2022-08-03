import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getPosts = () => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), 'pages', 'blog'), {
    withFileTypes: true,
  });

  return dirFiles
    .filter(file => !file.name.endsWith('.js'))
    .map((file) => {
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'pages', 'blog', file.name, 'index.mdx'),
        'utf-8'
      );

      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, '');
      return { data, content, slug };
    })
  }