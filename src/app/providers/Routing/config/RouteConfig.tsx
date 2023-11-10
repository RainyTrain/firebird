import { AppRoutes, getHomePage, getMainPage, getNotFoundPage } from 'shared/const/router';
import { Navigate, RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage/ui/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getMainPage(),
    element: <Navigate to={getHomePage()} replace={true} />,
  },
  [AppRoutes.NOT_FOUND]: { path: getNotFoundPage(), element: <NotFoundPage /> },
  [AppRoutes.HOME]: { path: getHomePage(), element: <MainPage /> },
};
