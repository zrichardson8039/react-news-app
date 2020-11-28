import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import { ArticleSort } from './ArticleSort';
import { fetchArticles, updateKeyword } from './articlesSlice';

export const ArticleSearch = () => {
  const dispatch = useDispatch();

  const handleKeyword = e => {
    e.persist();
    dispatch(updateKeyword(e.target.value));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    await dispatch(fetchArticles());
  }

  return (
    <Form inline className="search-form">
      <Form.Control
        className="bg-dark d-lg-inline d-xs-block mr-lg-2 my-2"
        type="search"
        placeholder="Some search term"
        onChange={handleKeyword}
      />
      <ArticleSort />
      <Button 
        className="ml-2"
        variant="danger"
        type="submit"
        onClick={handleClick}
      >Search</Button>
    </Form>
  );
};