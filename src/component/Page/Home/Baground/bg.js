import React, { Component } from 'react'
import BgStyle from './bg.module.css'
import bg from './circlebg.svg'

function BackgroundEffect ({translateX, translateY}){
  let enc_back_pos = {
    transform: 'translateX('+translateX+'px) translateY('+translateY+'px)'
  }
    return(
      <div style={enc_back_pos} className={ BgStyle.background_box }>
        <img width="100%" height="100%" alt='background_home' src={bg} />
      </div>
    )
}

class Background extends Component {
  constructor(props){
    super(props)
    this.state= {
      translateX: 0,
      translateY: 0
    }
  }
  bgMove = (et)=>{
    var screen_width = window.innerWidth;
    var x_0 = screen_width / 2;
    var screen_height = window.innerHeight;
    var y_0 = screen_height / 2;

    var MousePosX = et.clientX
    var MousePosY = et.clientY

    if (MousePosX < x_0) {
      let translateX_value_left = x_0 - MousePosX
      let translateX_value_left_effect = translateX_value_left / 35
      this.setState({translateX: translateX_value_left_effect})

    }else{
      let translateX_value_right = MousePosX - x_0
      let translateX_value_right_effect = translateX_value_right / 35
      this.setState({translateX: -translateX_value_right_effect})
    }

    if (MousePosY < y_0) {
      let translateY_value_top = y_0 - MousePosY
      let translateY_value_top_effect = translateY_value_top / 35
      this.setState({translateY: translateY_value_top_effect})
    }else {
      let translateY_value_down = MousePosY - y_0
      let translateY_value_down_effect = translateY_value_down / 35
      this.setState({translateY: -translateY_value_down_effect})
    }

  }
  componentDidMount(){
    document.addEventListener('mousemove', this.bgMove)
  }
  componentWillUnmount(){
    document.removeEventListener('mousemove', this.bgMove)
  }
  render() {
    let responsive_test = window.innerWidth;
    let mobile_value = window.innerHeight;
    let mobile_height = {}
    if (responsive_test < 450) {
      let height_value = mobile_value + 'px'
      mobile_height = {
        height: height_value
      }
    }
    return (
      <div style={mobile_height} className={ BgStyle.bg_box }>
        <BackgroundEffect translateX={this.state.translateX} translateY={this.state.translateY}/>
      </div>
    )
  }
}

export default Background
