import React, { Component } from 'react'
import TestStyle from './test.module.css'

class Result extends Component {

  constructor (props) {
    super(props)

    this.state = {
      name: 'Result Composant',
      step: 'X'
    }
    console.log(`Etape ${this.state.step} : Chargement Result Constructor`);
  }
  componentDidMount(){
    console.log(`Etape ${this.state.step} :Result MOUNT`);
  }
  componentDidUpdate(){
    console.log(`Etape ${this.state.step} : Result UPDATE`);
  }
  componentWillUnmount(){
    console.log(`Etape ${this.state.step} : Result UNMOUNT`);
  }
  render () {
    let style = {
      opacity: 0
    }
    if (this.props.result === true) {
      style = {
        opacity: 1
      }
    }
    console.log(`Etape ${this.state.step} : Chargement Result Render`);
    return (
      <div>
        {console.log(`Etape ${this.state.step} : MODIF RESULT DOM`)}
        <h2>{this.state.name}</h2>
        <p style={style} className={TestStyle.text_result}>SOME TEXT A AFFICHER PETASSE OUAIS OUAIS OUAIS J4AI BIEN DIT PETASSE MDR</p>
      </div>
    )
  }
}

export default Result
