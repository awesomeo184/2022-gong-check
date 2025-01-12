import { lazy } from 'react';

import DefaultLayout from '@/layouts/DefaultLayout';
import HostLayout from '@/layouts/HostLayout';
import ManageLayout from '@/layouts/ManageLayout';
import UserLayout from '@/layouts/UserLayout';

const SpaceListPage = lazy(() => import('@/pages/user/SpaceList'));
const JobListPage = lazy(() => import('@/pages/user/JobList'));
const TaskListPage = lazy(() => import('@/pages/user/TaskList'));
const PasswordPage = lazy(() => import('@/pages/user/Password'));

const HomePage = lazy(() => import('@/pages/host/Home'));
const LoginPage = lazy(() => import('@/pages/host/Login'));
const AuthCallBackPage = lazy(() => import('@/pages/host/AuthCallBack'));
const DashBoardPage = lazy(() => import('@/pages/host/DashBoard'));
const SpaceCreatePage = lazy(() => import('@/pages/host/SpaceCreate'));
const SpaceRecordPage = lazy(() => import('@/pages/host/SpaceRecord'));

const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'enter/:hostId',
        element: <UserLayout />,
        children: [
          {
            path: 'pwd',
            element: <PasswordPage />,
          },
          {
            path: 'spaces',
            element: <SpaceListPage />,
          },
          {
            path: 'spaces/:spaceId',
            element: <JobListPage />,
          },
          {
            path: 'spaces/:spaceId/:jobId',
            element: <TaskListPage />,
          },
        ],
      },
      {
        path: 'host',
        element: <HostLayout />,
        children: [
          {
            path: '',
            element: <HomePage />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'authCallback',
            element: <AuthCallBackPage />,
          },
          {
            path: 'manage',
            element: <ManageLayout />,
            children: [
              {
                path: '',
                element: <DashBoardPage />,
              },
              {
                path: 'spaceCreate',
                element: <SpaceCreatePage />,
              },
              {
                path: 'spaceRecord',
                element: <SpaceRecordPage />,
              },
              // 공간 생성, 수정 <SpaceCreatePage/>
              // 공간 정보 수정 페이지 <SpaceUpdatePage/>
              // 공간 사용 내역 보기 페이지 <SpaceRecordPage/>
              // 체크리스트 생성 페이지 <JobCreatePage />
              // 체크리스트 수정 페이지 <JobUpdatePage />
              // 회원 정보 수정 페이지 <JobUpdatePage />
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <div>잘못된 접근입니다.</div>,
  },
];

export default routes;
