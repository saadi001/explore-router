
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';

function App() {
  const router = createBrowserRouter([
      { path:'/', element: <Home></Home>},
      { path:'home', element: <Home></Home>},
      {path: 'about', element: <About></About>},
      { path: 'products', element: <Products></Products>}

  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
