import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import BooksList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
