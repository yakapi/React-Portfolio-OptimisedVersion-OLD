import React, { Component } from 'react'
import ContactCardStyle from './contact.module.css'
import Programming from './programmingSVG.svg'
import BtnMore from '../../../../Button/button_more'

class ContactCard extends Component {
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
        if (this.props.stateView === 3) {
          //FX Project Left Active
          setTimeout(()=>{
            this.animL1.current.classList.add(ContactCardStyle.opa)
            setTimeout(()=>{
              this.animL2.current.classList.add(ContactCardStyle.opa)
              setTimeout(()=>{
                this.animL3.current.classList.add(ContactCardStyle.opa)
                setTimeout(()=>{
                  this.animL4.current.classList.add(ContactCardStyle.opa)
                },200)
              },300)
            },500)
          },400)
          //FX Project Right Active
          setTimeout(()=>{
            this.animR1.current.classList.add(ContactCardStyle.scale)
            setTimeout(()=>{
              this.animR4.current.classList.add(ContactCardStyle.opa)
              this.animR44.current.classList.add(ContactCardStyle.transY)
              this.animR5.current.classList.add(ContactCardStyle.opa)
              this.animR55.current.classList.add(ContactCardStyle.transX)
            },600)
          },500)
        }else{
          if (this.animR1.current.classList.contains(ContactCardStyle.scale)) {
            //FX Project Left Active
            setTimeout(()=>{
              this.animL1.current.classList.remove(ContactCardStyle.opa)
              setTimeout(()=>{
                this.animL2.current.classList.remove(ContactCardStyle.opa)
                setTimeout(()=>{
                  this.animL3.current.classList.remove(ContactCardStyle.opa)
                  setTimeout(()=>{
                    this.animL4.current.classList.remove(ContactCardStyle.opa)
                  },200)
                },300)
              },500)
            },400)
            //FX Project Right Active
            setTimeout(()=>{
              this.animR1.current.classList.remove(ContactCardStyle.scale)
              setTimeout(()=>{
                this.animR4.current.classList.remove(ContactCardStyle.opa)
                this.animR44.current.classList.remove(ContactCardStyle.transY)
                this.animR5.current.classList.remove(ContactCardStyle.opa)
                this.animR55.current.classList.remove(ContactCardStyle.transX)
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


    return (
      <div className={ContactCardStyle.project_size}>
        <div className={ContactCardStyle.size_zone}>
          <div className={ContactCardStyle.p_leftBox}>
            <p style={animL1} ref={this.animL1} className={ContactCardStyle.titleP}>A Propos</p>
            <div style={animL2} ref={this.animL2} className={ContactCardStyle.line_enc}>
              <div className={ContactCardStyle.line1}></div>
              <div className={ContactCardStyle.line2}></div>
            </div>
            <div>
              <p style={animL3} ref={this.animL3} className={ContactCardStyle.into}>curriculum</p>
            </div>
            <div style={animL4} ref={this.animL4} className={ContactCardStyle.btn}>
              <BtnMore name='Voir Plus'/>
            </div>
          </div>
            <div className={ContactCardStyle.p_rightZone}>
              <div className={ContactCardStyle.p_rightBox}>
                <div style={animR1} ref={this.animR1} className={ContactCardStyle.img_enc_fx}>
                  <div style={animR2} ref={this.animR2} className={ContactCardStyle.img_fx1}></div>
                  <div style={animR3} ref={this.animR3} className={ContactCardStyle.img_fx2}></div>
                  <div className={ContactCardStyle.img_enc}>
                    <img className={ContactCardStyle.img_fit} alt='a-propos_deco' width="100%" height="100%" src={Programming} />
                  </div>
                </div>
                <div style={animR4} ref={this.animR4} className={ContactCardStyle.number}>
                  <p style={animR44} ref={this.animR44} className={ContactCardStyle.nfx}>03</p>
                </div>
                <div style={animR5} ref={this.animR5} className={ContactCardStyle.works}>
                  <p style={animR55} ref={this.animR55} className={ContactCardStyle.wfx}>Maling</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ContactCard
