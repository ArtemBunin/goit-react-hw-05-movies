import { AppBAr } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div>
      <AppBAr />
      <Outlet />
    </div>
  );
};
