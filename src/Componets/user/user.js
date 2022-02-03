import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../feed/feed';
import UserHeader from './userHeader';
import UserPhotoPost from './userPhotoPost';
import UserStats from './userStats';

const user = () => {

  return <section className="Container">
<UserHeader/>
<Routes>
  <Route path="/" element={<Feed />}/>
  <Route path="postar" element={<UserPhotoPost/>} />
  <Route path="estatisticas" element={<UserStats/>} />
</Routes>
  </section>
};

export default user;
