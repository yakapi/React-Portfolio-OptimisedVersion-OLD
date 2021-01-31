import React, { Component } from 'react'
import BtnMoreStyle from './btnMore.module.css'

class BtnMore extends Component {
  render() {
    return (
      <div className={BtnMoreStyle.btnZone}>
        <div className={BtnMoreStyle.btnBox}>
          <p>{this.props.name}</p>
        </div>
      </div>
    )
  }
}

export default BtnMore
