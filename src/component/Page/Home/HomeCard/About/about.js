import React, { Component } from 'react'
import AboutCardStyle from './about.module.css'
import BtnMore from '../../../../Button/button_more'
import Design from './design2.svg'

class AboutCard extends Component {
  render() {
    var animL1, animL2, animL3, animL4 = {}
    var animR1, animR2, animR3, animR4, animR5 , animR55, animR44 = {}
    if (this.props.aLeft1 === true) {
      animL1 = {
        opacity: '1'
      }
    }else {
      animL1 = {}
    }
    if (this.props.aLeft2 === true) {
      animL2 = {
        opacity: '1'
      }
    }else {
      animL2 = {}
    }
    if (this.props.aLeft3 === true) {
      animL3 = {
        opacity: '1'
      }
    }else {
      animL3 = {}
    }
    if (this.props.aLeft4 === true) {
      animL4 = {
        opacity: '1'
      }
    }else {
      animL4 = {}
    }
    if (this.props.aRight1 === true) {
      animR1 = {
        transform: 'scale(1) translateX(0) translateY(0)'
      }
    }else {
      animR1 = {}
    }
    if (this.props.aRight2 === true) {
      animR2 = {
        left : '110%'
      }
    }else {
      animR2 = {}
    }
    if (this.props.aRight3 === true) {
      animR3 = {
        top : '110%'
      }
    }else {
      animR3 = {}
    }
    if (this.props.aRight4 === true) {
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
    if (this.props.aRight5 === true) {
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
      <div className={AboutCardStyle.project_size}>
        <div className={AboutCardStyle.size_zone}>
          <div className={AboutCardStyle.p_leftBox}>
            <p style={animL1} className={AboutCardStyle.titleP}>A Propos</p>
            <div style={animL2} className={AboutCardStyle.line_enc}>
              <div className={AboutCardStyle.line1}></div>
              <div className={AboutCardStyle.line2}></div>
            </div>
            <div>
              <p style={animL3} className={AboutCardStyle.into}>curriculum</p>
            </div>
            <div style={animL4} className={AboutCardStyle.btn}>
              <BtnMore name='Voir Plus'/>
            </div>
          </div>
            <div className={AboutCardStyle.p_rightZone}>
              <div className={AboutCardStyle.p_rightBox}>
                <div style={animR1} className={AboutCardStyle.img_enc_fx}>
                  <div style={animR2} className={AboutCardStyle.img_fx1}></div>
                  <div style={animR3} className={AboutCardStyle.img_fx2}></div>
                  <div className={AboutCardStyle.img_enc}>
                    <img className={AboutCardStyle.img_fit} alt='a-propos_deco' width="100%" height="100%" src={Design} />
                  </div>
                </div>
                <div style={animR4} className={AboutCardStyle.number}>
                  <p style={animR44} className={AboutCardStyle.nfx}>02</p>
                </div>
                <div style={animR5} className={AboutCardStyle.works}>
                  <p style={animR55} className={AboutCardStyle.wfx}>Storytelling</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default AboutCard
