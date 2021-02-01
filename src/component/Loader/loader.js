import React, { Component } from 'react'
import LoaderStyle from './loader.module.css'

class Loader extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      loadBar: false
    }

  }
  componentDidMount(){
    // console.log('LOADER MOUNT');
    setTimeout(()=>{
      this.setState({loadBar: true})
    },100)
    setTimeout(()=>{
      this.setState({isLoaded: true})
    },1000)
  }
  componentWillUnmount(){
    // console.log('loader unmount');
  }
  componentDidUpdate(){
    // console.log('LOADER UPDATE');
  }
  render () {
    let style
    let load_bar
    if (this.state.loadBar === true) {
      load_bar = {
        width: '100%'
      }
    }
    if (this.state.isLoaded === true) {
      style = {
        top: '-110%'
      }
    }
    return (
      <div style={style} className={LoaderStyle.loader_container}>
        <div className={LoaderStyle.loader_box} >
          <div className={LoaderStyle.loading_bar_container}>
          <div style={load_bar} className={LoaderStyle.loading_bar}></div>
          </div>
          <p>Loading</p>
        </div>
      </div>
    )
  }
}

export default Loader
