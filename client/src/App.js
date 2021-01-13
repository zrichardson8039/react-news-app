import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';

import { ArticleList } from './features/articles/ArticleList';
import { ArticleSearchBar } from './features/articles/ArticleSearchBar';

function App() {
  return (
    <Container fluid className="min-vh-100 bg-dark">
      <ArticleSearchBar />
      <ArticleList />
    </Container>
  );
}

export default App;
