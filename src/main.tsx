import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import Root from './routes/root/Root.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import Error from './components/Error/Error.tsx';
import { detailsLoader, pageLoader, rootLoader } from './utils/loaders.ts';
import PersonDetails from './components/PersonDetails/PersonDetails.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path="/page/:pageId"
                element={<Root />}
                loader={pageLoader}
                errorElement={<Error />}
            >
                <Route
                    path="/page/:pageId/details/:personId"
                    element={<PersonDetails />}
                    loader={detailsLoader}
                />
            </Route>
            <Route
                path="/"
                element={<Root />}
                loader={rootLoader}
                errorElement={<Error />}
            >
                <Route
                    path="details/:personId"
                    element={<PersonDetails />}
                    loader={detailsLoader}
                />
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    </React.StrictMode>
);
