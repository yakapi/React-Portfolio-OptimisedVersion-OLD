import React from 'react'
import ProjectStyle from './project.module.css'
import Programming from './programmingSVG.svg'
import BtnMore from '../Button/button_more'


function Project({pLeft1, pLeft2, pLeft3, pLeft4, pRight1, pRight2, pRight3, pRight4, pRight5}) {
  var animL1, animL2, animL3, animL4 = {}
  var animR1, animR2, animR3, animR4, animR5 , animR55, animR44 = {}
  if (pLeft1 === true) {
    animL1 = {
      opacity: '1'
    }
  }else {
    animL1 = {}
  }
  if (pLeft2 === true) {
    animL2 = {
      opacity: '1'
    }
  }else {
    animL2 = {}
  }
  if (pLeft3 === true) {
    animL3 = {
      opacity: '1'
    }
  }else {
    animL3 = {}
  }
  if (pLeft4 === true) {
    animL4 = {
      opacity: '1'
    }
  }else {
    animL4 = {}
  }
  if (pRight1 === true) {
    animR1 = {
      transform: 'scale(1) translateX(0) translateY(0)'
    }
  }else {
    animR1 = {}
  }
  if (pRight2 === true) {
    animR2 = {
      left : '110%'
    }
  }else {
    animR2 = {}
  }
  if (pRight3 === true) {
    animR3 = {
      top : '110%'
    }
  }else {
    animR3 = {}
  }
  if (pRight4 === true) {
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
  if (pRight5 === true) {
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
      <div className={ProjectStyle.project_size}>
        <div className={ProjectStyle.size_zone}>
          <div className={ProjectStyle.p_leftBox}>
            <p style={animL1} className={ProjectStyle.titleP}>Projets</p>
            <div style={animL2} className={ProjectStyle.line_enc}>
              <div className={ProjectStyle.line1}></div>
              <div className={ProjectStyle.line2}></div>
            </div>
            <div>
              <p style={animL3} className={ProjectStyle.into}>Web Dev</p>
            </div>
            <div style={animL4} className={ProjectStyle.btn}>
              <BtnMore name='Voir Plus'/>
            </div>
          </div>
            <div className={ProjectStyle.p_rightZone}>
              <div className={ProjectStyle.p_rightBox}>
                <div style={animR1} className={ProjectStyle.img_enc_fx}>
                  <div style={animR2} className={ProjectStyle.img_fx1}></div>
                  <div style={animR3} className={ProjectStyle.img_fx2}></div>
                  <div className={ProjectStyle.img_enc}>
                    <img className={ProjectStyle.img_fit} width="100%" height="100%" alt='programme' src={Programming} />
                  </div>
                </div>
                <div style={animR4} className={ProjectStyle.number}>
                  <p style={animR44} className={ProjectStyle.nfx}>01</p>
                </div>
                <div style={animR5} className={ProjectStyle.works}>
                  <p style={animR55} className={ProjectStyle.wfx}>Works</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}

export default Project
