import React from 'react';
import { useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';

import { fetchArticles, updateSort } from "./articlesSlice";

export const ArticleSort = () => {
  const dispatch = useDispatch(); 

  const handleClick = async (sort) => {
    dispatch(updateSort(sort));
    await dispatch(fetchArticles());
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Sort Articles
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleClick('publishedAt')}>Date</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick('relevancy')}>Relevance</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick('popularity')}>Popularity</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};