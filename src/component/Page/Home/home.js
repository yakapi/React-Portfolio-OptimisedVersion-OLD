import React, { Component } from 'react'
import HomeStyle from './home.module.css'

import Bar from '../../Bar/bar'
import Hero from './Hero/hero'
import ProjectCard from './HomeCard/Project/project'
import AboutCard from './HomeCard/About/about'
import ContactCard from './HomeCard/Contact/contact'
import Background from './Baground/bg'
import Loader from '../../Loader/loader'


class HomePage extends Component {
  componentDidUpdate(){
    console.log("HOME UPDATE");
  }
  render () {
    let responsive_test = window.innerWidth;
    let mobile_value = window.innerHeight;
    let mobile_val_height = mobile_value + 'px';
    let mobile_height = {}
    if (responsive_test < 450) {
      mobile_height = {
        height: mobile_val_height
      }
    }
    return (
      <div style={mobile_height} className={HomeStyle.home_container}>
        <Loader/>
        <Bar />
        <Background />
        <Screen />
      </div>
    )
  }
}

export default HomePage

function ShowBar({stateBar}){
  var line1 = {}
  var line2 = {}
  var line3 = {}
  var line0 = {}
  var pos = {}
  if (stateBar === 0) {
    line0 = {
      width: '67px'
    }
  }else {
    line0 = {}
  }
  if (stateBar === 1) {
    pos = {
      transform: 'translateY(100vh)'
    }
    line1 = {
      width: '67px'
    }
  }else {
    line1 = {}
  }
  if (stateBar === 2) {
    pos = {
      transform: 'translateY(200vh)'
    }
    line2 = {
      width: '67px'
    }
  }else {
    line2 = {}
  }
  if (stateBar === 3) {
    pos = {
      transform: 'translateY(300vh)'
    }
    line3 = {
      width: '67px'
    }
  }else {
    line3 = {}
  }

  return(
    <div style={pos} className={HomeStyle.showBar}>
      <div className={HomeStyle.showBox}>
        <div style={line0} className={HomeStyle.showLine}  ></div>
        <div style={line1} className={HomeStyle.showLine}></div>
        <div style={line2} className={HomeStyle.showLine}></div>
        <div style={line3} className={HomeStyle.showLine}></div>
      </div>
    </div>
  )
}

function ScrollDown({scroll}){
  // console.log(scroll);
  var scrollfx = {}
  if (scroll !== 0) {
    scrollfx = {
      opacity: '0',
      top: '550vh'
    }
  }else {
    scrollfx = {}
  }
  return(
    <div style={scrollfx} className={HomeStyle.scrollBox}>
      <div className={HomeStyle.scrollFlex}>
        <p>SCROLLDOWN</p>
        <div className={HomeStyle.sline}></div>
      </div>
    </div>
  )
}

class Screen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      wheelEvent: false,
      wheelState: 0,
    }
  }
  wheelEngine = (e)=>{

    if (this.state.wheelEvent === false) {

      if (e.deltaY < 0) {
        // scroll up
        //Deplacement du screen
        if (this.state.wheelState !== 0) {
          this.setState({wheelEvent: true})
          var wheelStateCount = this.state.wheelState - 1
          this.setState({wheelState: wheelStateCount})
          setTimeout(()=>{
            this.setState({wheelEvent: false})
          },1500)
        }

      }else {
        //scroll down
        if (this.state.wheelState !== 3) {
          this.setState({wheelEvent: true})
          wheelStateCount = this.state.wheelState + 1
          this.setState({wheelState: wheelStateCount})
          setTimeout(()=>{
            this.setState({wheelEvent: false})
          },1500)
          // Effet Deplacement des pages scroll up
        }

      }
    }
  }

  TouchStart = null
  touchEngineStart = (et)=>{
    this.TouchStart = et.touches[0].clientY;
  }
  touchEngineEnd = (evt)=>{
    var TouchEnd = evt.changedTouches[0].clientY
    if (this.state.wheelEvent === false) {
      if (this.TouchStart > TouchEnd + 5) {
        //scroll down
        if (this.state.wheelState !== 3) {
          this.setState({wheelEvent: true})
          var wheelStateCount = this.state.wheelState + 1
          this.setState({wheelState: wheelStateCount})
          setTimeout(()=>{
            this.setState({wheelEvent: false})
          },1500)
          // Effet Deplacement des pages scroll up
        }
      }else if (this.TouchStart < TouchEnd - 5) {
        // console.log('slide up');
        // scroll up
        //Deplacement du screen
        if (this.state.wheelState !== 0) {
          this.setState({wheelEvent: true})
           wheelStateCount = this.state.wheelState - 1
          this.setState({wheelState: wheelStateCount})
          setTimeout(()=>{
            this.setState({wheelEvent: false})
          },1500)
          // Effet Deplacement des pages scroll up
        }
      }
    }
  }
  componentDidMount(){
    window.addEventListener('touchstart', this.touchEngineStart)
    window.addEventListener('touchend', this.touchEngineEnd)
    window.addEventListener('wheel', this.wheelEngine)
  }
  count = 0
  componentDidUpdate(){
    // this.count = this.count +1
    // console.log('Screen UPDATE'+this.count);
  }
  componentWillUnmount(){
    window.removeEventListener('touchstart', this.touchEngineStart)
    window.removeEventListener('touchend', this.touchEngineEnd)
    window.removeEventListener('wheel', this.wheelEngine)
  }
  render() {
    // console.log(`RENDER state ${this.state.wheelState}`);
    var test = {}
    let ProjectState, AboutState, ContactState = 0
    if (this.state.wheelState === 1) {
      ProjectState = 1
      test = {
        transform: 'translateY(-100vh)'
      }

    }else if (this.state.wheelState === 2) {
      test = {
        transform: 'translateY(-200vh)'
      }
      AboutState = 2

    }else if (this.state.wheelState === 3) {
      test = {
        transform: 'translateY(-300vh)'
      }
      ContactState = 3
    }else {
      test = {}

    }
    // <ProjectCard pLeft1={this.state.pl1} pLeft2={this.state.pl2} pLeft3={this.state.pl3} pLeft4={this.state.pl4} pRight1={this.state.pr1} pRight4={this.state.pr4} pRight5={this.state.pr5} />
    return (
      <div style={test} className={HomeStyle.home_screen}>
        <ShowBar stateBar={this.state.wheelState} />
        <Hero/>
        <ScrollDown scroll={this.state.wheelState} />
        <ProjectCard stateView={ProjectState}/>
        <AboutCard stateView={AboutState} />
        <ContactCard stateView={ContactState} />
      </div>
    )
  }
}
