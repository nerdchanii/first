import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {};

const Home = (props: Props) => {
  return <Navigate to="/todos" />;
};

export default Home;
