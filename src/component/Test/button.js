import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  static propTypes = {

  }

  constructor (props) {
    super(props)

    this.state = {
      name: "Button Composant"
    }
  }

  render () {
    return (
      <div>{this.state.name}</div>
    )
  }
}

export default Button
