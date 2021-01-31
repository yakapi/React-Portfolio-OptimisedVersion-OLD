import React, { Component } from 'react'
import HomeStyle from './home.module.css'

import Bar from '../../Bar/bar'

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    return (
      <div className={HomeStyle.screen_home}>
        <Bar />
      </div>
    )
  }
}

export default HomePage
