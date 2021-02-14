import React, { Component } from 'react'
import AboutCardStyle from './about.module.css'
import BtnMore from '../../../../Button/button_more'
import Design from './design2.svg'

class AboutCard extends Component {
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
        if (this.props.stateView === 2) {
          //FX Project Left Active
          setTimeout(()=>{
            this.animL1.current.classList.add(AboutCardStyle.opa)
            setTimeout(()=>{
              this.animL2.current.classList.add(AboutCardStyle.opa)
              setTimeout(()=>{
                this.animL3.current.classList.add(AboutCardStyle.opa)
                setTimeout(()=>{
                  this.animL4.current.classList.add(AboutCardStyle.opa)
                },200)
              },300)
            },500)
          },400)
          //FX Project Right Active
          setTimeout(()=>{
            this.animR1.current.classList.add(AboutCardStyle.scale)
            setTimeout(()=>{
              this.animR4.current.classList.add(AboutCardStyle.opa)
              this.animR44.current.classList.add(AboutCardStyle.transY)
              this.animR5.current.classList.add(AboutCardStyle.opa)
              this.animR55.current.classList.add(AboutCardStyle.transX)
            },600)
          },500)
        }else{
          if (this.animR1.current.classList.contains(AboutCardStyle.scale)) {
            //FX Project Left Active
            setTimeout(()=>{
              this.animL1.current.classList.remove(AboutCardStyle.opa)
              setTimeout(()=>{
                this.animL2.current.classList.remove(AboutCardStyle.opa)
                setTimeout(()=>{
                  this.animL3.current.classList.remove(AboutCardStyle.opa)
                  setTimeout(()=>{
                    this.animL4.current.classList.remove(AboutCardStyle.opa)
                  },200)
                },300)
              },500)
            },400)
            //FX Project Right Active
            setTimeout(()=>{
              this.animR1.current.classList.remove(AboutCardStyle.scale)
              setTimeout(()=>{
                this.animR4.current.classList.remove(AboutCardStyle.opa)
                this.animR44.current.classList.remove(AboutCardStyle.transY)
                this.animR5.current.classList.remove(AboutCardStyle.opa)
                this.animR55.current.classList.remove(AboutCardStyle.transX)
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
      <div style={mobile_height} className={AboutCardStyle.project_size}>
        <div style={mobile_height} className={AboutCardStyle.size_zone}>
          <div className={AboutCardStyle.p_leftBox}>
            <p style={animL1} ref={this.animL1} className={AboutCardStyle.titleP}>A Propos</p>
            <div style={animL2} ref={this.animL2} className={AboutCardStyle.line_enc}>
              <div className={AboutCardStyle.line1}></div>
              <div className={AboutCardStyle.line2}></div>
            </div>
            <div>
              <p style={animL3} ref={this.animL3} className={AboutCardStyle.into}>curriculum</p>
            </div>
            <div style={animL4} ref={this.animL4} className={AboutCardStyle.btn}>
              <BtnMore name='Voir Plus'/>
            </div>
          </div>
            <div className={AboutCardStyle.p_rightZone}>
              <div className={AboutCardStyle.p_rightBox}>
                <div style={animR1} ref={this.animR1} className={AboutCardStyle.img_enc_fx}>
                  <div style={animR2} ref={this.animR2} className={AboutCardStyle.img_fx1}></div>
                  <div style={animR3} ref={this.animR3} className={AboutCardStyle.img_fx2}></div>
                  <div className={AboutCardStyle.img_enc}>
                    <img className={AboutCardStyle.img_fit} alt='a-propos_deco' width="100%" height="100%" src={Design} />
                  </div>
                </div>
                <div style={animR4} ref={this.animR4} className={AboutCardStyle.number}>
                  <p style={animR44} ref={this.animR44} className={AboutCardStyle.nfx}>02</p>
                </div>
                <div style={animR5} ref={this.animR5} className={AboutCardStyle.works}>
                  <p style={animR55} ref={this.animR55} className={AboutCardStyle.wfx}>Storytelling</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default AboutCard
