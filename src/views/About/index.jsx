import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

function About() {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await axios.get('../src/data/about/about.md');
        setMarkdownContent(response.data);
      } catch (error) {
        console.error('Error fetching markdown file:', error);
      }
    };

    fetchMarkdownContent();
  }, []);

  return (
    <>
      <div className='relative w-820px p-20px m-x-auto'>
        <h1 className='m-0 font-mono text-3xl font-400'>
          <a className='text-green-5 m-r-4 font-900'>#</a>
          About.Me
        </h1>
        <ReactMarkdown className='min-h-auto font-sans'>{markdownContent}</ReactMarkdown>
      </div>
      <span className='relative m-y-10 flex justify-center'>©2023 Ma5hr00m. All rights reserved.</span>
    </>
  );
}

export default About;
