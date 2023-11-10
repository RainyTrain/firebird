import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { RouteConfig } from '../config/RouteConfig';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = <Suspense fallback="Loading...">{route.element}</Suspense>;

    return <Route path={route.path} key={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(RouteConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
