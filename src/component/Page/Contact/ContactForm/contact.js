import React, { Component } from 'react'
import ContactFormStyle from './contact.module.css'
import emailjs from 'emailjs-com';
import name from './name.svg'
import phone from './phone.svg'
import building from './building.svg'
import email from './email.svg'


class ContactForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: false,
      phone: false,
      mail: false,
      company: false,
      sucess: false
    }
  }
  clickInput = (e) => {
      e.target.value = ''
      if (e.target.name == 'name') {
        this.setState({name: false})
      }else if (e.target.name == 'phone') {
        this.setState({phone: false})
      }else if (e.target.name == 'company') {
        this.setState({company: false})
      }else if (e.target.name == 'email') {
        this.setState({mail: false})
      }
  }
  sendEmail = (e) => {
    e.preventDefault();
    const regex = {
      name: '^[a-zA-Z]+$',
      mail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      phone: /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/,
      company: '^(?!.*<[^>]+>).*'
    }
    let tracker, name_form, phone_form, company_form, mail_form = false

    if (e.target[1].value.match(regex.name)) {
      if (e.target[1].value != '') {
        name_form = true
      }
    }else{
      if (e.target[1].value == '') {
        this.setState({name: 0})
      }else{
        this.setState({name: 1})
      }
    }
    if (e.target[2].value.match(regex.phone)) {
      if (e.target[2].value != '') {
        phone_form = true
      }
    }else{
      if (e.target[2].value == '') {
        this.setState({phone: 0})
      }else{
        this.setState({phone: 1})
      }
    }
    if (e.target[3].value.match(regex.company)) {
      if (e.target[3].value != '') {
        company_form = true
      }
      if (e.target[3].value == '') {
        this.setState({company: 0})
      }
    }else{
      if (e.target[3].value == '') {
        this.setState({company: 0})
      }else{
        this.setState({company: 1})
      }
    }
    if (e.target[4].value.match(regex.mail)) {
      if (e.target[4].value != '') {
        mail_form = true
      }
    }else{
      if (e.target[4].value == '') {
        this.setState({mail: 0})
      }else{
        this.setState({mail: 1})
      }
    }
    if (name_form === true && phone_form === true && company_form === true && mail_form === true ) {
      tracker = true
      if (tracker === true) {
        this.setState({sucess: true})
        for (var i = 1; i < e.target.length; i++) {
          e.target[i].value = ""
        }

        emailjs.sendForm('service_t44uhgh', 'template_9mtsevc', e.target, 'user_UCJ5x8NfybIfSzO3bupff')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

      }
    }
  }
  render() {
    const text = {
      intro: "N'hésitez pas à me laisser un message ci-dessous",
      titre: "Entrer en contact",
      error_name: "",
      error_phone: "",
      error_company: "",
      error_mail: "",
      sucess: ""
    }
    const style = {
      error_name: {},
      error_phone: {},
      error_company: {},
      error_mail: {}
    }
    if (this.state.name === 0) {
      text.error_name = "Veuillez remplir le champ"
      style.error_name = {borderColor: '#D5243E'}
    }else if (this.state.name === 1) {
      text.error_name = "Ceci n'est pas un nom correct"
      style.error_name = {borderColor: '#D5243E'}
    }
    if (this.state.phone === 0) {
      text.error_phone = "Veuillez remplir le champ"
      style.error_phone = {borderColor: '#D5243E'}
    }else if (this.state.phone === 1) {
      text.error_phone = "Numéro Invalide"
      style.error_phone = {borderColor: '#D5243E'}
    }
    if (this.state.company === 0) {
      text.error_company = "Veuillez remplir le champ"
      style.error_company = {borderColor: '#D5243E'}
    }else if (this.state.company === 1) {
      text.error_company = "Lettres et chiffres uniquement"
      style.error_company = {borderColor: '#D5243E'}
    }
    if (this.state.mail === 0) {
      style.error_mail = {borderColor: '#D5243E'}
      text.error_mail = "Veuillez remplir le champ"
    }else if (this.state.mail === 1) {
      style.error_mail = {borderColor: '#D5243E'}
      text.error_mail = "Ceci n'est pas un nom correct"
    }
    if (this.state.sucess === true) {
      text.sucess = "Message envoyé avec succès"
    }
    let area = {
      marginLeft: "26px"
    }
    return (
      <div className={ContactFormStyle.contactForm_box}>
        <div className={ContactFormStyle.intro_contact}>
          <h2 className={ContactFormStyle.titre_intro} >{text.titre}</h2>
          <p className={ContactFormStyle.text_intro} >{text.intro}</p>
        </div>
        <form className={ContactFormStyle.form} onSubmit={this.sendEmail}>
        <input type="hidden" name="contact_number" />
          <div className={ContactFormStyle.contact_line}>
            <div style={style.error_name} className={ContactFormStyle.cusput}>
              <div className={ContactFormStyle.encard_glass}>
                <img src={name} alt="" />
              </div>
              <input onClick={this.clickInput} className={ContactFormStyle.custom_input} type="text" name="name" placeholder='Nom' />
            </div>
            <div className={ContactFormStyle.error_line}>
              <p className={ContactFormStyle.error_text} >{text.error_name}</p>
            </div>
          </div>
          <div className={ContactFormStyle.contact_line}>
            <div style={style.error_phone} className={ContactFormStyle.cusput}>
              <div className={ContactFormStyle.encard_glass}>
                <img src={phone} alt="" />
              </div>
              <input onClick={this.clickInput} className={ContactFormStyle.custom_input} type="text" name="phone" placeholder="Téléphone" />
            </div>
            <div className={ContactFormStyle.error_line}>
              <p className={ContactFormStyle.error_text} >{text.error_phone}</p>
            </div>
          </div>
          <div className={ContactFormStyle.contact_line}>
            <div style={style.error_company} className={ContactFormStyle.cusput}>
              <div className={ContactFormStyle.encard_glass}>
                <img src={building} alt="" />
              </div>
              <input onClick={this.clickInput} className={ContactFormStyle.custom_input} type="text" name="company" placeholder="Entreprise" />
            </div>
            <div className={ContactFormStyle.error_line}>
              <p className={ContactFormStyle.error_text} >{text.error_company}</p>
            </div>
          </div>
          <div className={ContactFormStyle.contact_line}>
            <div style={style.error_mail} className={ContactFormStyle.cusput}>
              <div className={ContactFormStyle.encard_glass}>
                <img src={email} alt="" />
              </div>
              <input onClick={this.clickInput} className={ContactFormStyle.custom_input} type="text" name="email" placeholder="E-mail" />
            </div>
            <div className={ContactFormStyle.error_line}>
              <p className={ContactFormStyle.error_text} >{text.error_mail}</p>
            </div>
          </div>
          <div className={ContactFormStyle.textarea_line}>
            <div className={ContactFormStyle.custext}>
              <textarea style={area} className={ContactFormStyle.custom_textarea} name="message" placeholder="message" />
            </div>
          </div>
          <div className={ContactFormStyle.contact_line}>
            <div className={ContactFormStyle.sub_box}>
              <input className={ContactFormStyle.subutton} type="submit" value="Envoyer" />
            </div>
            <div className={ContactFormStyle.error_line}>
              <p className={ContactFormStyle.success} >{text.sucess}</p>
            </div>
          </div>
        </form>

      </div>
    )
  }
}

export default ContactForm
