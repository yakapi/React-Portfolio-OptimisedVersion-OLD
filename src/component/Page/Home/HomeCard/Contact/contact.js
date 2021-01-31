import React, { Component } from 'react'
import ContactCardStyle from './contact.module.css'
import Programming from './programmingSVG.svg'
import BtnMore from '../../../../Button/button_more'

class ContactCard extends Component {
  render() {
    var animL1, animL2, animL3, animL4 = {}
    var animR1, animR2, animR3, animR4, animR5 , animR55, animR44 = {}
    if (this.props.cLeft1 === true) {
      animL1 = {
        opacity: '1'
      }
    }else {
      animL1 = {}
    }
    if (this.props.cLeft2 === true) {
      animL2 = {
        opacity: '1'
      }
    }else {
      animL2 = {}
    }
    if (this.props.cLeft3 === true) {
      animL3 = {
        opacity: '1'
      }
    }else {
      animL3 = {}
    }
    if (this.props.cLeft4 === true) {
      animL4 = {
        opacity: '1'
      }
    }else {
      animL4 = {}
    }
    if (this.props.cRight1 === true) {
      animR1 = {
        transform: 'scale(1) translateX(0) translateY(0)'
      }
    }else {
      animR1 = {}
    }
    if (this.props.cRight2 === true) {
      animR2 = {
        left : '110%'
      }
    }else {
      animR2 = {}
    }
    if (this.props.cRight3 === true) {
      animR3 = {
        top : '110%'
      }
    }else {
      animR3 = {}
    }
    if (this.props.cRight4 === true) {
      animR4 = {
        opacity : '1'
      }
      animR44 = {
        transform: 'translateY(0)'
      }
    }else {
      animR4 = {}
      animR44 = {}
    }
    if (this.props.cRight5 === true) {
      animR5 = {
        opacity : '1'
      }
      animR55 = {
        transform: 'translateX(0)'
      }
    }else {
      animR5 = {}
      animR55 = {}
    }

    return (
      <div className={ContactCardStyle.project_size}>
        <div className={ContactCardStyle.size_zone}>
          <div className={ContactCardStyle.p_leftBox}>
            <p style={animL1} className={ContactCardStyle.titleP}>Ecrivez-moi</p>
            <div style={animL2} className={ContactCardStyle.line_enc}>
              <div className={ContactCardStyle.line1}></div>
              <div className={ContactCardStyle.line2}></div>
            </div>
            <div>
              <p style={animL3} className={ContactCardStyle.into}>contact</p>
            </div>
            <div style={animL4} className={ContactCardStyle.btn}>
              <BtnMore name='Voir Plus' />
            </div>
          </div>
            <div className={ContactCardStyle.p_rightZone}>
              <div className={ContactCardStyle.p_rightBox}>
                <div style={animR1} className={ContactCardStyle.img_enc_fx}>
                  <div style={animR2} className={ContactCardStyle.img_fx1}></div>
                  <div style={animR3} className={ContactCardStyle.img_fx2}></div>
                  <div className={ContactCardStyle.img_enc}>
                    <img className={ContactCardStyle.img_fit} width="100%" height="100%" alt="Contact_deco" src={Programming} />
                  </div>
                </div>
                <div style={animR4} className={ContactCardStyle.number}>
                  <p style={animR44} className={ContactCardStyle.nfx}>03</p>
                </div>
                <div style={animR5} className={ContactCardStyle.works}>
                  <p style={animR55} className={ContactCardStyle.wfx}>Mailing</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ContactCard
