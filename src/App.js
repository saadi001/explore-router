
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Main from './Layout/Main';
import Friends from './Components/Friends/Friends';

function App() {
  const router = createBrowserRouter([
      { path:'/', element: <Main></Main>, children:[
           { path:'/', element: <Home></Home>}, 
           { path:'home', element: <Home></Home>}, 
           {path: 'about', element: <About></About>},
           {path: 'friends',
           loader: async() =>{
            return fetch('https://jsonplaceholder.typicode.com/users')
        },
           element: <Friends></Friends>},
           { path: 'products', element: <Products></Products>}
      ]},

      { path: '*', element: <div>404 NOT FOUND</div>}

  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
