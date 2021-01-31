import React, { Component } from 'react'
import PageProjectStyle from './project.module.css'
import Menu from '../../Menu/menu'
import Navigation from '../../Navigation/nav'
import ContactForm from './ContactForm/contact'
import MapLeaf from './Map/map'

import email from './email.svg'
import markLocation from './maps-and-flags.svg'
import phone from './phone.svg'

class PageProject extends Component {
  constructor(props){
    super(props)
    this.state = {
      showMenu: false,
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false

    }
  }
  toggleMenu = (e)=>{
    if (this.state.showMenu === false) {
      this.setState({showMenu: !this.state.showMenu})
      setTimeout(()=>{
        this.setState({menu1: !this.state.menu1})
        setTimeout(()=>{
          this.setState({menu2: !this.state.menu2})
          setTimeout(()=>{
            this.setState({menu3: !this.state.menu3})
            setTimeout(()=>{
              this.setState({menu4: !this.state.menu4})
            },200)
          },200)
        },200)
      },600)
    }else{
      this.setState({menu4: !this.state.menu4})
      setTimeout(()=>{
        this.setState({menu3: !this.state.menu3})
        setTimeout(()=>{
          this.setState({menu2: !this.state.menu2})
          setTimeout(()=>{
            this.setState({menu1: !this.state.menu1})
            setTimeout(()=>{
              this.setState({showMenu: !this.state.showMenu})
            },200)
          },200)
        },200)
      },200)
    }
  }
  render() {


    return (
      <div className={PageProjectStyle.page_content}>
        <Menu
        showMenu={this.state.showMenu}
        menu1={this.state.menu1} menu2={this.state.menu2}
        menu3={this.state.menu3} menu4={this.state.menu4}
        menuToggle={this.toggleMenu}/>
        <Navigation stateMenu={this.state.showMenu} toggleClick={this.toggleMenu}/>
        <ScreenContact />
      </div>
    )
  }
}

export default PageProject

class ScreenContact extends Component{
  componentDidMount(){
  }

  render(){
    return(
      <div className={PageProjectStyle.screen_view}>
        <div className={PageProjectStyle.form_box} >
          <div className={PageProjectStyle.info_zone} >
            <div className={PageProjectStyle.info_box} >
              <h2 className={PageProjectStyle.info_titre}>Informations</h2>
              <MapLeaf />
              <div className={PageProjectStyle.info_general}>
                <div className={PageProjectStyle.info_line}>
                  <div className={PageProjectStyle.encard_icon}>
                    <img className={PageProjectStyle.img_icon} alt="mail-icon" src={email} />
                  </div>
                  <h3 className={PageProjectStyle.info_text}>victor.barlier@oulook.fr</h3>
                </div>
                <div className={PageProjectStyle.info_line}>
                  <div className={PageProjectStyle.encard_icon}>
                    <img className={PageProjectStyle.img_icon} alt='addresse-icon' src={markLocation} />
                  </div>
                  <h3 className={PageProjectStyle.info_text}>Allée des lauriers, 90300 Offemont</h3>
                </div>
                <div className={PageProjectStyle.info_line}>
                  <div className={PageProjectStyle.encard_icon}>
                    <img className={PageProjectStyle.img_icon} alt="phone-icon" src={phone} />
                  </div>
                  <h3 className={PageProjectStyle.info_text}>06 68 41 61 11</h3>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    )
  }
}
