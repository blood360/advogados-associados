import React from 'react';
import './ArticleCard.css';

function ArticleCard({ article }) {
  const readMoreLink = `/blog/${article.id}`; // Link para a página do artigo individual

  return (
    <div className="article-card-container">
      <h3 className="article-card-title">{article.title}</h3>
      <p className="article-card-date">{new Date(article.date).toLocaleDateString('pt-BR')}</p>
      <p className="article-card-summary">{article.summary}</p>
      <a href={readMoreLink} className="article-card-readmore">Leia Mais &rarr;</a>
    </div>
  );
}

export default ArticleCard;