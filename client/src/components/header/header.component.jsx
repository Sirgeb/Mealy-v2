import React from 'react';
import moment from 'moment';

import { HeaderStyles } from './header.styles';

const Header = props => {

  return (
    <HeaderStyles>
      <div className="container">
        <div className="title">
          <h1>Mealy</h1>
          <span className="description">
            Helps you have the right meal at the right time. Today is&nbsp;
            { moment().format("dddd, Do MMMM YYYY") }.
          </span> 
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
