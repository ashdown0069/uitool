import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminLogin } from './pages/adminLogin';
import { AdminManageList } from './pages/adminManageList/adminManageMenu';
import { AdminManagePage } from '@pages/adminManageList/adminManagePage';
import { AdminManage } from '@pages/adminManageList/adminManage';
import { AdminMangePageAction } from '@pages/adminManageList/adminManagePageAction';
import { AdminManageLoader } from '@pages/adminManageList/adminManageLoader';
import { AdminMangeMenuAction } from '@pages/adminManageList/adminManageMenuAction';
import { EditPage } from '@pages/editPages/editPage';
import {
  editPageLoader,
  editPageAction,
} from '@pages/editPages/editPageLoaderAndAction';
import { PreviewPage } from '@pages/previewPages/previewPage';
import { previewPageLoader } from '@pages/previewPages/previewPageLoaderAndAction';
import { previewPageAction } from '@pages/previewPages/previewPageLoaderAndAction';
const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLogin />,
  },
  {
    path: '/edit/:id',
    element: <EditPage />,
    loader: editPageLoader,
    action: editPageAction,
  },
  {
    path: '/adminlist',
    element: <AdminManage />,
    loader: AdminManageLoader,
    children: [
      {
        path: '/adminlist/menu', //nav loader, action
        element: <AdminManageList />,
        action: AdminMangeMenuAction,
      },
      {
        path: '/adminlist/page',
        element: <AdminManagePage />,
        // loader: AdminManageLoader,
        action: AdminMangePageAction,
      },
    ],
  },
  {
    path: '/signup',
    element: (
      <p className="mt-20 text-center text-body1B">
        구현되지 않은 페이지 입니다
      </p>
    ),
  },

  {
    path: '/find',
    element: (
      <p className="mt-20 text-center text-body1B">
        구현되지 않은 페이지 입니다
      </p>
    ),
  },

  {
    path: '/:path',
    element: <PreviewPage />,
    loader: previewPageLoader,
    action: previewPageAction,
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
