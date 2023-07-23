import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminLogin } from './pages/adminLogin';
import { AdminManageList } from './pages/adminManageList/adminList';
import TestPage from './pages/testPage';
import { TestYS } from '@pages/testPageYS';
const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLogin />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
  {
    path: '/testYS',
    element: <TestYS />,
  },
  {
    path: '/adminlist',
    element: <AdminManageList />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
