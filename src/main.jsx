import React        from 'react';
import ReactDOM     from 'react-dom/client';
import App          from './App.jsx';
import HomePage     from './pages/HomePage.jsx';
import AboutPage    from './pages/AboutPage.jsx';
import RecipePage   from './pages/RecipePage';
import ErrorPage    from './pages/ErrorPage.jsx';
import Ingredient   from './components/Ingredient.jsx';
import Insctruction from './components/Instruction.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />} >
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/recipe/:recipeid' element={<RecipePage />} >
        <Route path='/recipe/:recipeid/instructions' element={<Insctruction />} />
        <Route path='/recipe/:recipeid/ingredients' element={<Ingredient />} />
      </Route>
    </Route>
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
