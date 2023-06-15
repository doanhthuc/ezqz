import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { QuestionListTable } from './components/Table/QuestionListTable';
import MockQuestionData from './MockQuestionData';
import Pagination from '@mui/material/Pagination';
import QuestionListWrapper from './pages/QuestionListPageTest';

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
//  return <RouterProvider router={router} />;
  const mockQuestionData = MockQuestionData

  

  return (
    <Container maxWidth="lg">
      {/* <QuestionListTable questionList={mockQuestionData}/> */}
      {/* <Pagination count={10} variant="outlined" shape="rounded" onChange={handlePageChange}/> */}
      <QuestionListWrapper />
    </Container>
  );	
}
