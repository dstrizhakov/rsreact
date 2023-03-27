import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Component, ReactNode } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Form from './pages/Form';
import Layout from './components/Layout';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="form" element={<Form />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="404" />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
