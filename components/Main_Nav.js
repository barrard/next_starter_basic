import React from "react";
// import { connect } from "react-redux";
import { withRouter } from "next/router";

import Link from "next/link";

class Main_Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // let is_loggedin = this.props.user.is_loggedin;
    // console.log({ is_loggedin });
    let { pathname } = this.props.router;

    return (
      <nav>
        <ul>
        <li>
            <Link prefetch href="/" as="/">
              <a
                className={`${
                  pathname == "/" ? "active " : " "
                }" nav-link dropdown-item"`}
              >
                Dakine
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/about" as="/about">
              <a
                className={`${
                  pathname == "/about" ? "active " : " "
                }" nav-link dropdown-item"`}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/work-examples" as="/work-examples">
              <a
                className={`${
                  pathname == "/work-examples" ? "active " : " "
                }" nav-link dropdown-item"`}
              >
                Work Examples
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/future-projects" as="/future-projects">
              <a
                className={`${
                  pathname == "/future-projects" ? "active " : " "
                }" nav-link dropdown-item"`}
              >
                Future Projects
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/blog" as="/blog">
              <a
                className={`${
                  pathname == "/blog" ? "active " : " "
                }" nav-link dropdown-item"`}
              >
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/contact" as="/contact">
              <a
                className={`${
                  pathname == "/contact" ? "active " : " "
                }" nav-link dropdown-item"`}
              >
                Contact
              </a>
            </Link>
          </li>
          {/* {!is_loggedin && <Register_Login_Links pathname={pathname}/>}
          {is_loggedin && <Logout_Link pathname={pathname}/>} */}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return { user };
}

export default withRouter(Main_Nav);
//export default connect(mapStateToProps)(withRouter(Main_Nav));


const Logout_Link = ({pathname}) => (
<>
<li>
    <Link  href="/account-profile">
      <a
        className={`${
          pathname == "/account-profile" ? "active " : " "
        }" nav-link dropdown-item"`}
      >
        Profile
      </a>
    </Link>
  </li>
  <li>
    <Link  href="/auth/logout">
      <a
        className={`${
          pathname == "/auth/logout" ? "active " : " "
        }" nav-link dropdown-item"`}
      >
        Logout
      </a>
    </Link>
  </li>
</>
);

const Register_Login_Links = ({pathname}) => (
  <>
    <li>
      <Link prefetch href="/login">
        <a
          className={`${
            pathname == "/login" ? "active " : " "
          }" nav-link dropdown-item"`}
        >
          Login
        </a>
      </Link>
    </li>
    <li>
      <Link prefetch href="/sign-up">
        <a
          className={`${
            pathname == "/sign-up" ? "active " : " "
          }" nav-link dropdown-item"`}
        >
          Sign Up
        </a>
      </Link>
    </li>
  </>
);
