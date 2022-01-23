import './App.module.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Banner from '../features/Banner';
import MyListsView from '../views/MyListsView';

export default function App(): JSX.Element {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<MyListsView />} />
      </Routes>
    </Router>
  );
}
