import React from 'react'
import AboutStyle from './about.module.css'
import Design from './design2.svg'
import BtnMore from '../Button/button_more'


function About({aLeft1, aLeft2, aLeft3, aLeft4, aRight1, aRight2, aRight3, aRight4, aRight5}) {
  var animL1, animL2, animL3, animL4 = {}
  var animR1, animR2, animR3, animR4, animR5 , animR55, animR44 = {}
  if (aLeft1 === true) {
    animL1 = {
      opacity: '1'
    }
  }else {
    animL1 = {}
  }
  if (aLeft2 === true) {
    animL2 = {
      opacity: '1'
    }
  }else {
    animL2 = {}
  }
  if (aLeft3 === true) {
    animL3 = {
      opacity: '1'
    }
  }else {
    animL3 = {}
  }
  if (aLeft4 === true) {
    animL4 = {
      opacity: '1'
    }
  }else {
    animL4 = {}
  }
  if (aRight1 === true) {
    animR1 = {
      transform: 'scale(1) translateX(0) translateY(0)'
    }
  }else {
    animR1 = {}
  }
  if (aRight2 === true) {
    animR2 = {
      left : '110%'
    }
  }else {
    animR2 = {}
  }
  if (aRight3 === true) {
    animR3 = {
      top : '110%'
    }
  }else {
    animR3 = {}
  }
  if (aRight4 === true) {
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
  if (aRight5 === true) {
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
      <div className={AboutStyle.project_size}>
        <div className={AboutStyle.size_zone}>
          <div className={AboutStyle.p_leftBox}>
            <p style={animL1} className={AboutStyle.titleP}>A Propos</p>
            <div style={animL2} className={AboutStyle.line_enc}>
              <div className={AboutStyle.line1}></div>
              <div className={AboutStyle.line2}></div>
            </div>
            <div>
              <p style={animL3} className={AboutStyle.into}>curriculum</p>
            </div>
            <div style={animL4} className={AboutStyle.btn}>
              <BtnMore name='Voir Plus'/>
            </div>
          </div>
            <div className={AboutStyle.p_rightZone}>
              <div className={AboutStyle.p_rightBox}>
                <div style={animR1} className={AboutStyle.img_enc_fx}>
                  <div style={animR2} className={AboutStyle.img_fx1}></div>
                  <div style={animR3} className={AboutStyle.img_fx2}></div>
                  <div className={AboutStyle.img_enc}>
                    <img className={AboutStyle.img_fit} alt='a-propos_deco' width="100%" height="100%" src={Design} />
                  </div>
                </div>
                <div style={animR4} className={AboutStyle.number}>
                  <p style={animR44} className={AboutStyle.nfx}>02</p>
                </div>
                <div style={animR5} className={AboutStyle.works}>
                  <p style={animR55} className={AboutStyle.wfx}>Storytelling</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}

export default About
