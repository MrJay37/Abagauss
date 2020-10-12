import React from "react";
import { connect} from 'react-redux'
import { Link } from "react-router-dom";
import { signOut, getCurrentUserInfo  } from '../../store/actions/auth'
import { FiLogOut } from 'react-icons/fi'

class Header extends React.Component {

  componentDidMount(){
    this.props.getCurrentUserInfo()
  }

  render() {
    const username = (this.props.auth[0].userInfo && this.props.auth[0].userInfo.username) || ''
    return (
      <div className="pageHeader">
        <div className="logo"><Link to="/">Abagauss | Hey there, {username}</Link></div>
        <ul className="navList">
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <li onClick={this.props.signOut} ><FiLogOut style={{color: 'white'}} /></li>
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  getCurrentUserInfo: () => dispatch(getCurrentUserInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
