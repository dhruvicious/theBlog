import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string; // or Date if you parse it as a date
}

export async function getBlogPostList() : Promise<BlogPost[]>{
  const fileNames = await readDirectory('/content');

  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      title: frontmatter.title,
      abstract: frontmatter.abstract,
      publishedOn: frontmatter.publishedOn,
    });
  }

  return blogPosts.sort((p1:any, p2:any) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export async function loadBlogPost(slug:any) {
  try {
    const rawContent = await readFile(`/content/${slug}.mdx`);

    const { data: frontmatter, content } = matter(rawContent);

    return { frontmatter, content };
  } catch {
    return null;
  }
}

function readFile(localPath:any) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

function readDirectory(localPath:any) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
