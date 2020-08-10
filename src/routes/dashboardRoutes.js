import { WEB_URL } from '../config';
import Dashboard from '../containers/Dashboard';

const dashboardRoutes = [
  {
    path: WEB_URL.DASHBOARD,
    exact: true,
    isProtected: true,
    component: Dashboard
  },
];

export default dashboardRoutes;
