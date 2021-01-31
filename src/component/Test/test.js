import React, { Component } from 'react'

import Button from './button'
import Result from './resultButton'

import TestStyle from './test.module.css'

class Testy extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: "Composant Test",
      step: 1,
      button: false,
      result: false
    }

    console.log("Etape "+this.state.step+": Chargement Test Constructor");
  }
  toggleClick = (e) =>{
    console.log('Button CLiked');
    this.setState({button: !this.state.button})
  }
  componentDidMount(){
    console.log(`Etape ${this.state.step} : Composant Test MOUNT`);
  }
  componentDidUpdate(){
    console.log(`Etape ${this.state.step} : Composant Test UPDATE`);
  }
  componentWillUnmount(){
    console.log(`Etape ${this.state.step} : Composant Test UNMOUNT`);
  }
  render () {
    console.log(`Etape ${this.state.step} : Chargement Test Render`);
    return (
      <div>
        {console.log(`Etape ${this.state.step}: Renvoie du DOM`)}
        <h1 className={TestStyle.titre} >{this.state.name}</h1>
        <div className={TestStyle.box_one}>
          <Button click={this.toggleClick}/>
          <Result result={this.state.button}/>
        </div>
      </div>
    )
  }
}

export default Testy
