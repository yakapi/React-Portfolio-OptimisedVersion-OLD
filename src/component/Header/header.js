import React, { Component } from 'react'
import Monster from './Monster/monster'
import HeaderStyle from './header.module.css'


class Header extends Component {
  render() {
    return (
      <div className={HeaderStyle.header_box}>
        <div className={ HeaderStyle.left_head}>
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
        <div className={HeaderStyle.MonsterBox}>
          <Monster />
        </div>

      </div>
    )
  }
}

export default Header
