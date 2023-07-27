import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

import '../../assets/agu-markdown.css'

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
        <ReactMarkdown className='markdown-body min-h-auto font-sans'>{markdownContent}</ReactMarkdown>
      </div>
      <span className='relative m-y-10 flex justify-center text-gray-3'>©2023 Ma5hr00m. All rights reserved.</span>
    </>
  );
}

export default About;
