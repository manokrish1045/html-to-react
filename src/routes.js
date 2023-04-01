import React, { lazy } from 'react';
import DashBoard from '../src/Views/dashboard';
import StudentsCreate from '../src/Views/Students/studentCreate'
import StudentsList from '../src/Views/Students/studentList'
export const Routes = [
    {
        path: "/",
        component: DashBoard,
        exact: true
    },
    {
        path: "/dashboard",
        component: DashBoard,
        exact: true
    },
    {
        path: "/students",
        component: StudentsList,
        exact: true
    },
    {
        path: "/students/create",
        component: StudentsCreate,

    },
    {
        path: "/students/list",
        component: StudentsList,

    }
]