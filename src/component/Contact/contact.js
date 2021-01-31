import React from 'react'
import ContactStyle from './contact.module.css'
import Programming from './programmingSVG.svg'
import BtnMore from '../Button/button_more'


function Contact({cLeft1, cLeft2, cLeft3, cLeft4, cRight1, cRight2, cRight3, cRight4, cRight5}) {
  var animL1, animL2, animL3, animL4 = {}
  var animR1, animR2, animR3, animR4, animR5 , animR55, animR44 = {}
  if (cLeft1 === true) {
    animL1 = {
      opacity: '1'
    }
  }else {
    animL1 = {}
  }
  if (cLeft2 === true) {
    animL2 = {
      opacity: '1'
    }
  }else {
    animL2 = {}
  }
  if (cLeft3 === true) {
    animL3 = {
      opacity: '1'
    }
  }else {
    animL3 = {}
  }
  if (cLeft4 === true) {
    animL4 = {
      opacity: '1'
    }
  }else {
    animL4 = {}
  }
  if (cRight1 === true) {
    animR1 = {
      transform: 'scale(1) translateX(0) translateY(0)'
    }
  }else {
    animR1 = {}
  }
  if (cRight2 === true) {
    animR2 = {
      left : '110%'
    }
  }else {
    animR2 = {}
  }
  if (cRight3 === true) {
    animR3 = {
      top : '110%'
    }
  }else {
    animR3 = {}
  }
  if (cRight4 === true) {
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
  if (cRight5 === true) {
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
      <div className={ContactStyle.project_size}>
        <div className={ContactStyle.size_zone}>
          <div className={ContactStyle.p_leftBox}>
            <p style={animL1} className={ContactStyle.titleP}>Ecrivez-moi</p>
            <div style={animL2} className={ContactStyle.line_enc}>
              <div className={ContactStyle.line1}></div>
              <div className={ContactStyle.line2}></div>
            </div>
            <div>
              <p style={animL3} className={ContactStyle.into}>contact</p>
            </div>
            <div style={animL4} className={ContactStyle.btn}>
              <BtnMore name='Voir Plus' />
            </div>
          </div>
            <div className={ContactStyle.p_rightZone}>
              <div className={ContactStyle.p_rightBox}>
                <div style={animR1} className={ContactStyle.img_enc_fx}>
                  <div style={animR2} className={ContactStyle.img_fx1}></div>
                  <div style={animR3} className={ContactStyle.img_fx2}></div>
                  <div className={ContactStyle.img_enc}>
                    <img className={ContactStyle.img_fit} width="100%" height="100%" alt="Contact_deco" src={Programming} />
                  </div>
                </div>
                <div style={animR4} className={ContactStyle.number}>
                  <p style={animR44} className={ContactStyle.nfx}>03</p>
                </div>
                <div style={animR5} className={ContactStyle.works}>
                  <p style={animR55} className={ContactStyle.wfx}>Mailing</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}

export default Contact
