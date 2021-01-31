import React, { Component } from 'react'
import hero from './hero.svg'
import flamy from './flamy.svg'
import MonsterStyle from './monster.module.css'

function MouseEffect({translateX, translateY, translateFlUpY, translateFlUpX, translateFlDownY, translateFlDownX}){
  let enc_hero_pos = {
    transform: 'translateX('+translateX+'px) translateY('+translateY+'px)'

  }
  let enc_flammy_down = {
    transform: 'translateX('+translateFlUpX+'px) translateY('+translateFlUpY+'px)'

  }
  let enc_flammy_up = {
    transform: 'translateX('+translateFlDownX+'px) translateY('+translateFlDownY+'px)'

  }
  return(
    <div>
      <div style={enc_hero_pos} className={ MonsterStyle.encard_hero }>
        <img width="100%" height="100%" alt="hero_home" src={ hero }/>
      </div>
      <div style={enc_flammy_down} className={ MonsterStyle.enc_flamy1 }>
        <img width="100%" height="100%" alt="flame" src={flamy} />
      </div>
      <div style={enc_flammy_up} className={ MonsterStyle.enc_flamy2 }>
        <img width="100%" height="100%" alt="flame"  src={flamy} />
      </div>
      <div style={enc_flammy_up} className={ MonsterStyle.enc_flamy3 }>
        <img width="100%" height="100%" alt="flame"  src={flamy} />
      </div>
      <div style={enc_flammy_down} className={ MonsterStyle.enc_flamy4 }>
        <img width="100%" height="100%" alt="flame"  src={flamy} />
      </div>
      <div style={enc_flammy_up} className={ MonsterStyle.enc_flamy5 }>
        <img width="100%" height="100%" alt="flame"  src={flamy} />
      </div>
      <div style={enc_flammy_down} className={ MonsterStyle.enc_flamy6 }>
        <img width="100%" height="100%" alt="flame"  src={flamy} />
      </div>
    </div>
  )
}
class Monster extends Component {
  constructor(props){
    super(props)
    this.state = {
      translateX: 0,
      translateY: 0,
      translateFlDownX: 0,
      translateFlUpX: 0,
      translateFlDownY: 0,
      translateFlUpY: 0,
    }
  }
  componentDidMount(){

    document.addEventListener('mousemove', (et)=>{
      var screen_width = window.innerWidth;
      var x_0 = screen_width / 2;
      var screen_height = window.innerHeight;
      var y_0 = screen_height / 2;

      var MousePosX = et.clientX
      var MousePosY = et.clientY

      if (MousePosX < x_0) {
        let translateX_value_left = x_0 - MousePosX
        let translateX_value_left_effect = translateX_value_left / 25
        let translateFlUpY_value_left = x_0 - MousePosX
        let translateFlUpY_value_left_effect = translateFlUpY_value_left / 45
        this.setState({translateX: -translateX_value_left_effect})
        this.setState({translateFlUpY: -translateFlUpY_value_left_effect})
        this.setState({translateFlDownY: translateFlUpY_value_left_effect})

      }else{
        let translateX_value_right = MousePosX - x_0
        let translateX_value_right_effect = translateX_value_right / 25
        let translateFlUpY_value_right = MousePosX - x_0
        let translateFlUpY_value_right_effect = translateFlUpY_value_right / 45
        this.setState({translateFlUpY: translateFlUpY_value_right_effect})
        this.setState({translateFlDownY: -translateFlUpY_value_right_effect})
        this.setState({translateX: translateX_value_right_effect})
      }

      if (MousePosY < y_0) {
        let translateY_value_top = y_0 - MousePosY
        let translateY_value_top_effect = translateY_value_top / 25
        let translateFlUpX_value_top = y_0 - MousePosY
        let translateFlUpX_value_top_effect = translateFlUpX_value_top / 45
        this.setState({translateY: -translateY_value_top_effect})
        this.setState({translateFlUpX: -translateFlUpX_value_top_effect})
        this.setState({translateFlDownX: translateFlUpX_value_top_effect})
      }else {
        let translateY_value_down = MousePosY - y_0
        let translateY_value_down_effect = translateY_value_down / 25
        let translateFlUpX_value_down = MousePosY - y_0
        let translateFlUpX_value_down_effect = translateFlUpX_value_down / 45
        this.setState({translateY: translateY_value_down_effect})
        this.setState({translateFlUpX: translateFlUpX_value_down_effect})
        this.setState({translateFlDownX: -translateFlUpX_value_down_effect})
      }

    })
  }
  componentDidUpdate(){
    // console.log('composant a update:' + this.state.translateX);
  }
  render() {

    return (
      <div>
        <MouseEffect translateX={this.state.translateX} translateY={this.state.translateY} translateFlUpY={this.state.translateFlUpY} translateFlUpX={this.state.translateFlUpX} translateFlDownY={this.state.translateFlDownY} translateFlDownX={this.state.translateFlDownX}/>
      </div>
    )
  }
}

export default Monster
