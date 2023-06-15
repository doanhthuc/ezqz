import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import ManageQuestionPage from "./pages/ManageQuestion";
import ManageEventPage from "./pages/ManageEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <HomePage /> },
      {
        path: "manageQuestion",
        element: <ManageQuestionPage />,
        children: [
          {
            path: ":questionId",
            id: "question-detail",
            //loader: eventDetailLoader,
            children: [
              {
                index: true,
                // element: <EventDetailPage />,
                // action: deleteEventAction,
              },
              {
                path: "edit",
                //  element: <EditEventPage />,
                //   action: multiAction
              },
            ],
          },
          {
            path: "new",
            // element: <NewQuestionPage />,
            // action: multiAction
          },
        ],
      },
      {
        path: "manageEvent",
        element: <ManageEventPage />,
        children: [
          {
            path: ":eventId",
            id: "event-detail",
            //loader: eventDetailLoader,
            children: [
              {
                index: true,
                // element: <EventDetailPage />,
                // action: deleteEventAction,
              },
              {
                path: "edit",
                //  element: <EditEventPage />,
                //   action: multiAction
              },
            ],
          },
          {
            path: "new",
            // element: <NewQuestionPage />,
            // action: multiAction
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
