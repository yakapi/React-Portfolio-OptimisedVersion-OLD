import React, { Component } from 'react'
import PageProjectStyle from './project.module.css'
import Bar from '../../Bar/bar'
import ContactForm from './ContactForm/contact'
import MapLeaf from './Map/map'
import Loader from '../../Loader/loader'

import email from './email.svg'
import markLocation from './maps-and-flags.svg'
import phone from './phone.svg'

class ContactPage extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }


  render() {


    return (
      <div className={PageProjectStyle.page_content}>
        <Loader />
        <Bar />
        <ScreenContact />
      </div>
    )
  }
}

export default ContactPage

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
                    <img className={PageProjectStyle.img_icon} src={email} />
                  </div>
                  <h3 className={PageProjectStyle.info_text}>victor.barlier@oulook.fr</h3>
                </div>
                <div className={PageProjectStyle.info_line}>
                  <div className={PageProjectStyle.encard_icon}>
                    <img className={PageProjectStyle.img_icon} src={markLocation} />
                  </div>
                  <h3 className={PageProjectStyle.info_text}>Allée des lauriers, 90300 Offemont</h3>
                </div>
                <div className={PageProjectStyle.info_line}>
                  <div className={PageProjectStyle.encard_icon}>
                    <img className={PageProjectStyle.img_icon} src={phone} />
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
