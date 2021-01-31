import React, { Component } from 'react'
import MenuStyle from './menu.module.css'
import { Link } from "react-router-dom";


class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }
  componentDidUpdate(){
    console.log('MENU UPDATE');
  }
  componentDidMount(){
    console.log('MENU MUNT');
  }
  componentWillUnmount(){
    console.log('MENU UNMUNT');
  }
  render () {
    console.log(this.props.showMenu);
    let showMenuEffect = {
      top: '-100%',
      left: '-150%',
      opacity: '0',
      borderRadius: '100%',
      transition: '1s all ease-in-out'
    }
    let linkEffect1 = {
      bottom: '-100%',
      opacity: '0',
      transition: '1s all ease-in-out'
    }
    let linkEffect2 = {
      bottom: '-100%',
      opacity: '0',
      transition: '1s all ease-in-out'
    }
    let linkEffect3 = {
      bottom: '-100%',
      opacity: '0',
      transition: '1s all ease-in-out'
    }
    let linkEffect4 = {
      bottom: '-100%',
      opacity: '0',
      transition: '1s all ease-in-out'
    }
    if (this.props.showMenu === true) {
      showMenuEffect = {
        top: '0',
        left: '0',
        borderRadius: '0',
        opacity: '1',
        transition: '1s all ease-in-out'
      }
      if (this.props.menu1 === true) {
        linkEffect1 = {
          bottom: '0',
          opacity: '1',
          transition: '1s all ease-in-out'
        }
      }
      if (this.props.menu2 === true) {
        linkEffect2 = {
          bottom: '0',
          opacity: '1',
          transition: '1s all ease-in-out'
        }

      }
      if (this.props.menu3 === true) {
        linkEffect3 = {
          bottom: '0',
          opacity: '1',
          transition: '1s all ease-in-out'
        }

      }
      if (this.props.menu4 === true) {
        linkEffect4 = {
          bottom: '0',
          opacity: '1',
          transition: '1s all ease-in-out'
        }
      }
    }
    return (
      <div style={showMenuEffect} className={MenuStyle.menu_box}>
        <div className={MenuStyle.menu_content}>
          <ul className={MenuStyle.menu_list}>
            <li className={MenuStyle.menu_li}><p style={linkEffect1} className={MenuStyle.menu_a}><Link onClick={this.props.menuToggle} className={MenuStyle.menu_link} to='/'>Accueil</Link></p></li>
            <li className={MenuStyle.menu_li}><p style={linkEffect2} className={MenuStyle.menu_a}><Link onClick={this.props.menuToggle} className={MenuStyle.menu_link} to='/Project'>Projet</Link></p></li>
            <li className={MenuStyle.menu_li}><p style={linkEffect3} className={MenuStyle.menu_a}><Link onClick={this.props.menuToggle} className={MenuStyle.menu_link} to='/About'>A Propos</Link></p></li>
            <li className={MenuStyle.menu_li}><p style={linkEffect4} className={MenuStyle.menu_a}><Link onClick={this.props.menuToggle} className={MenuStyle.menu_link} to='/Contact'>Contact</Link></p></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu
