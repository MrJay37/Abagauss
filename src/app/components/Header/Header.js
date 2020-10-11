import React from "react";
import { connect} from 'react-redux'
import { Link } from "react-router-dom";
import { signOut } from '../../store/actions/auth'

const Header = (props) => {

  return (
    <div className="pageHeader">
      <div className="logo">Abagauss</div>
      <ul className="navList">
        <Link to="/login">
          <li>Profile</li>
        </Link>
        <li onClick={props.signOut}>Settings</li>
      </ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(Header);
