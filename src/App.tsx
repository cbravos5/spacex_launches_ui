import Home from './pages/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from 'react-router-dom';
import { globalStyles } from "./styles/global";

function App() {
  globalStyles();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
      </Route>
    )
  );

  return (<RouterProvider router={router} />)
}

export default App
