import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Banner from 'components/features/Banner';
import MyListsView from 'components/views/MyLists';
import ListView from 'components/views/List';
import ListEditor from 'components/views/ListEditor';
import './styles.module.css'; // global styles

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
