import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../PageTemplate';

const CategoryRegister = () => {
  return (
    <PageTemplate>
      <h1>Video Category Register</h1>
      <form>
        <label>
          Category Name: <input type="text" />
        </label>
        <button>Add</button>
      </form>
      <Link to="/">Home</Link>
    </PageTemplate>
  );
};

export default CategoryRegister;
