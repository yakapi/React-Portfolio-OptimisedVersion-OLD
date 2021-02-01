import React, { Component } from 'react'
import ProjectCardStyle from './project.module.css'
import Programming from './programmingSVG.svg'
import BtnMore from '../../../../Button/button_more'

class ProjectCard extends Component {
  render() {
    var animL1, animL2, animL3, animL4 = {}
    var animR1, animR2, animR3, animR4, animR5 , animR55, animR44 = {}
    if (this.props.pLeft1 === true) {
      animL1 = {
        opacity: '1'
      }
    }else {
      animL1 = {}
    }
    if (this.props.pLeft2 === true) {
      animL2 = {
        opacity: '1'
      }
    }else {
      animL2 = {}
    }
    if (this.props.pLeft3 === true) {
      animL3 = {
        opacity: '1'
      }
    }else {
      animL3 = {}
    }
    if (this.props.pLeft4 === true) {
      animL4 = {
        opacity: '1'
      }
    }else {
      animL4 = {}
    }
    if (this.props.pRight1 === true) {
      animR1 = {
        transform: 'scale(1) translateX(0) translateY(0)'
      }
    }else {
      animR1 = {}
    }
    if (this.props.pRight4 === true) {
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
    if (this.props.pRight5 === true) {
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
      <div className={ProjectCardStyle.project_size}>
        <div className={ProjectCardStyle.size_zone}>
          <div className={ProjectCardStyle.p_leftBox}>
            <p style={animL1} className={ProjectCardStyle.titleP}>Projets</p>
            <div style={animL2} className={ProjectCardStyle.line_enc}>
              <div className={ProjectCardStyle.line1}></div>
              <div className={ProjectCardStyle.line2}></div>
            </div>
            <div>
              <p style={animL3} className={ProjectCardStyle.into}>Web Dev</p>
            </div>
            <div style={animL4} className={ProjectCardStyle.btn}>
              <BtnMore name='Voir Plus'/>
            </div>
          </div>
            <div className={ProjectCardStyle.p_rightZone}>
              <div className={ProjectCardStyle.p_rightBox}>
                <div style={animR1} className={ProjectCardStyle.img_enc_fx}>
                  <div style={animR2} className={ProjectCardStyle.img_fx1}></div>
                  <div style={animR3} className={ProjectCardStyle.img_fx2}></div>
                  <div className={ProjectCardStyle.img_enc}>
                    <img className={ProjectCardStyle.img_fit} width="100%" height="100%" src={Programming} />
                  </div>
                </div>
                <div style={animR4} className={ProjectCardStyle.number}>
                  <p style={animR44} className={ProjectCardStyle.nfx}>01</p>
                </div>
                <div style={animR5} className={ProjectCardStyle.works}>
                  <p style={animR55} className={ProjectCardStyle.wfx}>Works</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard
