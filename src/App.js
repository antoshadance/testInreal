import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/Pages/Home';
import Error404 from './components/Error404';
import Products from './components/Pages/Products';
import WebApp from "./components/Pages/services/WebApp";
import OneCDev from './components/Pages/services/1c';
import Analytics from "./components/Pages/services/Analytics";
import BusinessProcess from "./components/Pages/services/BusinessProcess"
import JavaScriptDev from './components/Pages/services/JavaScript';
import TechDoc from './components/Pages/services/TechDoc.jsx';
import Module1CEIS from './components/Pages/products/Module1CEIS.jsx';
import ScrollToTop from './scrollToTop.js';
import AboutPage from './components/Pages/AboutPage.jsx';


function App() {

  const router = createBrowserRouter([{
    path:"/",
    element:<Home/>,
  },
  {
    path:"/products",
    element:<Module1CEIS/>
  },
  {
    path:"/services/web-app-development",
    element:<WebApp/>
  },
  {
    path:"/services/1c-development",
    element:<OneCDev/>,
  },
  {
    path:"/services/analytics",
    element:<Analytics/>,
  },
  {
    path:"/services/business-process-description",
    element:<BusinessProcess/>,
  },
  {
    path:"/services/javascript",
    element:<JavaScriptDev/>,
  },
  {
    path:"/services/tech-documentation",
    element:<TechDoc/>
  },
  {
    path:"/test",
    element: <Products/>
  },
  {
    path:"/about",
    element: <AboutPage/>
  },
  {
  path: "/*",
  element: <Error404 />
  }
])

  return (
        <RouterProvider router={router}>
          <ScrollToTop/>
        </RouterProvider>
  );
}

export default App;
