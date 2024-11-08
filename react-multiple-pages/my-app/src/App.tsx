import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
            </>
          }>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/details/:itemId" element={<Details />} />
          <Route path="/notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
