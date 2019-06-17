import React from 'react';
// import { connect } from 'react-redux';
// import { toastr } from 'react-redux-toastr';
import { withRouter } from 'next/router';

import Main_Layout from '../layouts/Main_Layout.js';

class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state={}
  }
  render(){
    return(
      <Main_Layout>
      Contact
      </Main_Layout>
    )
  }
}


// function mapStateToProps(state) {
//   const { user, csrf, locals, crowdsales, two_factor_auth } = state;
//   return { ...user, ...csrf, ...locals, ...crowdsales, ...two_factor_auth };
// }


export default withRouter(Contact);