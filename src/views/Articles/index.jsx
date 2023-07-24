import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import axios from "axios";

function Articles() {
  const [markdownContent, setMarkdownContent] = useState('');
  
  const { fileName } = useParams();
  
  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await axios.get(`../src/data/posts/${fileName}.md`);
        const mainContent = response.data.split('<!--more-->')[1];
        setMarkdownContent(mainContent);
      } catch(error) {
        console.error('Error fetching markdown content:', error);
      }
    } 

    fetchMarkdownContent();

  }, []);

  return (
    <div className="relative w-820px m-x-auto p-20px">
      <ReactMarkdown >{markdownContent}</ReactMarkdown>
    </div>
  )
};

export default Articles;