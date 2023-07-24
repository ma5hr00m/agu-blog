import { NavLink } from 'react-router-dom';

import articles from '../../data/articles.json';

function Archive() {
  const groupedArticles = articles.reduce((acc, article) => {
    const year = new Date(article.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(article);
    return acc;
  }, {});

  const years = Object.keys(groupedArticles).sort((a, b) => (b - a));

  return (
    <div className='relative w-700px p-20px m-x-auto'>
      {years.map(year => (
        <>
          <h2 className='text-gray-8'>{year}</h2>
          <ul key={year} className="p-0 p-x-20px list-none space-y-3">
            {groupedArticles[year].map(article => (
              <li key={article.title}>
                <NavLink to={`/articles/${article.fileName}`} className='flex justify-between text-gray-5 decoration-none'>
                  <span>{article.title}</span>
                  <span>{article.date.slice(0, 10)}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
}

export default Archive;
