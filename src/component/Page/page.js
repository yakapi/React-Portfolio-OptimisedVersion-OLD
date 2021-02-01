import React, { Component } from 'react'
import PageStyle from './page.module.css'

import HomePage from './Home/home'
import AboutPage from './About/about'
import ContactPage from './Contact/contact'
import ProjectPage from './Project/project'

class Page extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }
  componentWillUnmount(){
    // console.log(`Page ${this.props.name} : UNMOUNT`);
  }
  componentDidMount(){
    // console.log(`Page ${this.props.name} : MOUNT`);
  }
  componentDidUpdate(){
    // console.log(`Page ${this.props.name} : UPDATE`);
  }
  render () {
      if (this.props.name === 'contact') {
        return(
          <div className={PageStyle.page_container}>
            <ContactPage />
          </div>
        )
      }else if (this.props.name === 'home') {
        return(
          <div className={PageStyle.page_container}>
            <HomePage />
          </div>
        )
      }else if (this.props.name === 'about') {
        return(
          <div className={PageStyle.page_container}>
            <AboutPage />
          </div>
        )
      }else if (this.props.name === 'project') {
        return(
          <div className={PageStyle.page_container}>
            <ProjectPage />
          </div>
        )
      }
  }
}

export default Page
