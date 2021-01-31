import React, { Component } from 'react'

import TestStyle from './test.module.css'

class Button extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: "Button Composant",
      step: "a"
    }
    console.log(`Etape ${this.state.step} : Chargement Button Constructor`);
  }
  componentDidMount(){
    console.log(`Etape ${this.state.step} : Composant Button MOUNT`);
  }
  render () {
    console.log(`Etape ${this.state.step} : Chargement Button Render`);
    return (
      <div>
        {    console.log(`Etape ${this.state.step} : Modification DOM`)}
        <h1>{this.state.name}</h1>
        <p onClick={this.props.click} className={TestStyle.button}>Click</p>
      </div>
    )
  }
}

export default Button
