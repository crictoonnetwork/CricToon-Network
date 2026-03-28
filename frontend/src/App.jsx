import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNav from './BottomNav';
import Create from './Create';
import Library from './Library';
import Video from './Video';
import Videos from './Videos';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/library" element={<Library />} />
          <Route path="/video" element={<Video />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;