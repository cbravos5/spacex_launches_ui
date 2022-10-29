import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Next from './pages/Next';
import { globalStyles } from './styles/global';

const PageRouter = () => {
  globalStyles();

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home/>} />
      <Route path="/next" element={<Next />} />
    </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default PageRouter;
