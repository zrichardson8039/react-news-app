import React from 'react';
import { useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { ArticleCard } from './ArticleCard';

export const ArticleList = () => {
  const articles = useSelector(state => state.articles.data);
  const articleCards = articles.map(article => {
    return (
      <Col xs='12' md='6' xl='4' key={article.url} className="my-3 d-flex align-items-stretch">
        <ArticleCard article={article} />
      </Col>
    );
  });

  return (
    <Row className="py-5 px-5">
      {articleCards}
    </Row>
  );
};