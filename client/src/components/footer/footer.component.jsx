import React from 'react';

import ReactTooltip from 'react-tooltip';

import FooterStyles from './footer.styles';

const Footer = () => {
  return (
    <FooterStyles>
         Copyright &copy; 2019 - Mealy
        <div>Designed and developed by  <span data-tip="Contact Phone: +2348060230771, Email: chybesta@gmail.com">Sirgeb</span> </div> 
        <ReactTooltip place="right" type="dark" effect="float"/>
    </FooterStyles>
  )
}

export default Footer;
