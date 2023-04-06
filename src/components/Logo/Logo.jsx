import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';
import {NavbarBrand} from "reactstrap";

const Logo = ({ className }) => {
  const name="<PORTFOLIO/>"
  return (
    <div className={className}>
      <Link to={routes.HOME}>
      <NavbarBrand href="/" className="mr-lg-5">
							<h2 className="text-white" id="nav-title" style={{fontSize:"30px",color:"#cd5ff8"}} >
								{name}
							</h2>
						</NavbarBrand>
      </Link>
    </div>
  );
};

export default Logo;
