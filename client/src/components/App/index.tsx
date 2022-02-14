import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Banner from '../features/Banner/Banner';
import MyListsView from '../views/MyLists/MyLists';
import ListView from '../views/List/List';
import ListEditor from '../views/ListEditor/ListEditor';
import './App.module.css'; // global styles

export default function App(): JSX.Element {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<MyListsView />} />
        <Route path="/list/:id" element={<ListView />} />
        <Route path="/listeditor/" element={<ListEditor />} />
        <Route path="/listeditor/:id" element={<ListEditor />} />
      </Routes>
    </Router>
  );
}
