import * as React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import ManageQuestionPage from './pages/ManageQuestion';
import ManageEventPage from './pages/ManageEvent';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: 'manageQuestion',
                element: <ManageQuestionPage />,
            },
            {
                path: 'manageEvent',
                element: <ManageEventPage />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
