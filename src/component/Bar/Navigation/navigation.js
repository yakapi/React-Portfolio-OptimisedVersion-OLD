import React, { Component } from 'react'
import NavStyle from './nav.module.css'

import Logo from './logo.svg'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Linkedin from './linkedin.svg'
import Github from './github-sign.svg'

class Navigation extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    let burgerFx1 = {
      transform: 'rotate(0)',
      transition: '1s all ease-in-out'
    }
    let burgerFx2 = {
      transform: 'rotate(0)',
      transition: '1s all ease-in-out'
    }
    if (this.props.stateMenu === true) {
      burgerFx1 = {
        transform: 'rotate(45deg) translateY(12px)',
        transition: '1s all ease-in-out'
      }
      burgerFx2 = {
        transform: 'rotate(-45deg) translateY(-12px)',
        transition: '1s all ease-in-out'
      }
    }
    return (
      <div className={NavStyle.navigation}>
        <div className={NavStyle.navbox}>
          <div className={ NavStyle.nav_left }>
            <div className={ NavStyle.logo }>
                <img width="100%" height="100%" alt="logo-personnel" src={Logo} />
            </div>
          </div>
          <div className={ NavStyle.nav_right }>
            <div className={ NavStyle.social_bar }>
              <ul className={ NavStyle.social}>
                <li><a href="https://www.facebook.com/victor.barlier/" className={NavStyle.social_enc}><img width="100%" height="100%" alt="facebook-icon" src={Facebook} /></a></li>
                <li><a href="https://www.instagram.com/d_cay.420/" className={NavStyle.social_enc}><img width="100%" height="100%" alt="instagram-icon" src={Instagram}/></a></li>
                <li><a href="https://www.linkedin.com/in/victor-barlier/" className={NavStyle.social_enc}><img width="100%" height="100%" alt="linkedin-icon" src={Linkedin}/></a></li>
                <li><a href="https://github.com/yakapi" className={NavStyle.social_enc}><img width="100%" height="100%" alt="github-icon" src={Github}/></a></li>
              </ul>
            </div>
            <div className={ NavStyle.burger }>
              <div onClick={this.props.toggleClick} className={NavStyle.enc_burger}>
                <div style={burgerFx1} className={NavStyle.line1}></div>
                <div style={burgerFx2} className={NavStyle.line2}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
