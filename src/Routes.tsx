import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from '@/components';
import { Home, NotFound } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
