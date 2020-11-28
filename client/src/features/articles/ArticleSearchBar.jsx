import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { ArticleSearch } from './ArticleSearch';

export const ArticleSearchBar = () => {
  return (
    <Row className="bg-dark py-3 px-5">
      <Col>
        <ArticleSearch />
      </Col>
    </Row>
  );
};