import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Component, ReactNode } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Layout from './components/Layout';

class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1>Hello world</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nobis perspiciatis amet
//         libero eius. Natus facere quos laborum maiores eaque ducimus porro, blanditiis ex excepturi
//         animi repellat deserunt quasi consequatur?
//       </p>
//     </div>
//   );
// }

export default App;
