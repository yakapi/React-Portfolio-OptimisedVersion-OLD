import React, { Component } from 'react'
import HeaderStyle from './hero.module.css'
import Monster from './Monster/monster'

class Heroe extends Component {
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
      <div style={mobile_height} className={HeaderStyle.header_box}>
        <div style={mobile_height} className={ HeaderStyle.left_head}>
          <div className={HeaderStyle.leftbox}>
            <h1 className={HeaderStyle.title}><span>Barlier</span><span className={HeaderStyle.victor}>Victor</span></h1>
            <div className={HeaderStyle.line_enc}>
              <div className={HeaderStyle.line1}></div>
              <div className={HeaderStyle.line2}></div>
            </div>
            <div className={HeaderStyle.integbox}>
              <p>Intégrateur /</p>
              <p className={HeaderStyle.wb}>/ Web</p>
            </div>
          </div>
        </div>
        <div style={mobile_height} className={HeaderStyle.MonsterBox}>
          <Monster />
        </div>

      </div>
    )
  }
}

export default Heroe
