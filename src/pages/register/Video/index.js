import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../PageTemplate';

const VideoRegister = () => {
  return (
    <PageTemplate>
      <h1>Video Register</h1>
      <Link to="/register/Category">Add Category</Link>
    </PageTemplate>
  );
};

export default VideoRegister;
