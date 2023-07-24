import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDict = path.join(process.cwd(), 'src/data/posts');

const files = fs.readdirSync(postsDict);

const articles = [];

files.forEach((file) => {
  const filePath = path.join(postsDict, file);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const title = data.title || 'Notitle';
  const date = data.date || 'Nodate';
  const category = data.category || 'Nocategory';
  const fileName = path.parse(file).name;

  const previewContent = content.split('<!--more-->')[0].replace(/[\n\r]/g, '');

  const article = {
    "title": title,
    "date": date,
    "category": category,
    "fileName": fileName,
    "previewContent": previewContent
  };

  articles.push(article);
});

// 根据日期对文章进行排序
const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));

// 将排序后的结果输出到文件中
const sortedArticlesJSON = JSON.stringify(sortedArticles, null, 2);
fs.writeFileSync('src/data/articles.json', sortedArticlesJSON);
