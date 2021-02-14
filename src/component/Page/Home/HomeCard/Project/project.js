import React, { Component } from 'react'
import ProjectCardStyle from './project.module.css'
import Programming from './programmingSVG.svg'
import BtnMore from '../../../../Button/button_more'

class ProjectCard extends Component {
  constructor(props){
    super(props)
    this.animL1 = React.createRef()
    this.animL2 = React.createRef()
    this.animL3 = React.createRef()
    this.animL4 = React.createRef()
    this.animR1 = React.createRef()
    this.animR2 = React.createRef()
    this.animR3 = React.createRef()
    this.animR4 = React.createRef()
    this.animR5 = React.createRef()
    this.animR44 = React.createRef()
    this.animR55 = React.createRef()
  }
  componentDidMount(){
  }
  componentDidUpdate(){
        if (this.props.stateView === 1) {
          //FX Project Left Active
          setTimeout(()=>{
            this.animL1.current.classList.add(ProjectCardStyle.opa)
            setTimeout(()=>{
              this.animL2.current.classList.add(ProjectCardStyle.opa)
              setTimeout(()=>{
                this.animL3.current.classList.add(ProjectCardStyle.opa)
                setTimeout(()=>{
                  this.animL4.current.classList.add(ProjectCardStyle.opa)
                },200)
              },300)
            },500)
          },400)
          //FX Project Right Active
          setTimeout(()=>{
            this.animR1.current.classList.add(ProjectCardStyle.scale)
            setTimeout(()=>{
              this.animR4.current.classList.add(ProjectCardStyle.opa)
              this.animR44.current.classList.add(ProjectCardStyle.transY)
              this.animR5.current.classList.add(ProjectCardStyle.opa)
              this.animR55.current.classList.add(ProjectCardStyle.transX)
            },600)
          },500)
        }else{
          if (this.animR1.current.classList.contains(ProjectCardStyle.scale)) {
            //FX Project Left Active
            setTimeout(()=>{
              this.animL1.current.classList.remove(ProjectCardStyle.opa)
              setTimeout(()=>{
                this.animL2.current.classList.remove(ProjectCardStyle.opa)
                setTimeout(()=>{
                  this.animL3.current.classList.remove(ProjectCardStyle.opa)
                  setTimeout(()=>{
                    this.animL4.current.classList.remove(ProjectCardStyle.opa)
                  },200)
                },300)
              },500)
            },400)
            //FX Project Right Active
            setTimeout(()=>{
              this.animR1.current.classList.remove(ProjectCardStyle.scale)
              setTimeout(()=>{
                this.animR4.current.classList.remove(ProjectCardStyle.opa)
                this.animR44.current.classList.remove(ProjectCardStyle.transY)
                this.animR5.current.classList.remove(ProjectCardStyle.opa)
                this.animR55.current.classList.remove(ProjectCardStyle.transX)
              },600)
            },500)
          }
        }

  }
  componentWillUnmount(){
  }
  render() {
    var animL1, animL2, animL3, animL4 = {}
    var animR1, animR2, animR3, animR4, animR5 , animR55, animR44 = {}
    let responsive_test = window.innerWidth;
    let mobile_value = window.innerHeight;
    let mobile_val_height = mobile_value + 'px';
    let mobile_height = {}
    if (responsive_test < 450) {
      mobile_height = {
        height: mobile_val_height
      }
    }
    return (
      <div style={mobile_height} className={ProjectCardStyle.project_size}>
        <div style={mobile_height} className={ProjectCardStyle.size_zone}>
          <div className={ProjectCardStyle.p_leftBox}>
            <p style={animL1} ref={this.animL1} className={ProjectCardStyle.titleP}>Mes Projets</p>
            <div style={animL2} ref={this.animL2} className={ProjectCardStyle.line_enc}>
              <div className={ProjectCardStyle.line1}></div>
              <div className={ProjectCardStyle.line2}></div>
            </div>
            <div>
              <p style={animL3} ref={this.animL3} className={ProjectCardStyle.into}>Web Dev</p>
            </div>
            <div style={animL4} ref={this.animL4} className={ProjectCardStyle.btn}>
              <BtnMore name='Voir Plus'/>
            </div>
          </div>
            <div className={ProjectCardStyle.p_rightZone}>
              <div className={ProjectCardStyle.p_rightBox}>
                <div style={animR1} ref={this.animR1} className={ProjectCardStyle.img_enc_fx}>
                  <div style={animR2} ref={this.animR2} className={ProjectCardStyle.img_fx1}></div>
                  <div style={animR3} ref={this.animR3} className={ProjectCardStyle.img_fx2}></div>
                  <div className={ProjectCardStyle.img_enc}>
                    <img className={ProjectCardStyle.img_fit} alt='a-propos_deco' width="100%" height="100%" src={Programming} />
                  </div>
                </div>
                <div style={animR4} ref={this.animR4} className={ProjectCardStyle.number}>
                  <p style={animR44} ref={this.animR44} className={ProjectCardStyle.nfx}>01</p>
                </div>
                <div style={animR5} ref={this.animR5} className={ProjectCardStyle.works}>
                  <p style={animR55} ref={this.animR55} className={ProjectCardStyle.wfx}>Works</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard
