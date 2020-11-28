import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ArticleCard = ({ article }) => {
  const handleClick = () => window.open(article.url, '_blank');

  return (
    <Card className="article-card">
      <Card.Img 
        variant="top"
        src={article.urlToImage}
        alt={article.source.name}
        onClick={handleClick}
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description.substring(0, 100)}...</Card.Text>
        <Button variant="dark" onClick={handleClick}>Read More</Button>
      </Card.Body>
    </Card>
  );
};