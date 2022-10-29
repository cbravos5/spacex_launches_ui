import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import { globalStyles } from './styles/global';

const PageRouter = () => {
  globalStyles();

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home/>} />
    </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default PageRouter;