import { Outlet, Link } from 'react-router-dom';
import './styles/Navigation.css';
import Divider from './divider/Divider';

function Navigation() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>Math Magicians</h1>
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Divider />
          <Link to="/calculator">Calculator</Link>
          <Divider />
          <Link to="/quote">Quote</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
export default Navigation;
