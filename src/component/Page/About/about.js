import React, { Component } from 'react'
import PageAboutStyle from './about.module.css'
import Menu from '../../Menu/menu'
import Navigation from '../../Navigation/nav'
import about from './about.jpg'
import geek from './geek.jpg'
import techno from './cpu.svg'
import music from './radio.svg'
import dev from './seo.svg'
import js from './js.svg'
import ai from './ai.svg'
import ps from './ps.svg'
import afd from './afd.svg'
import html from './html.svg'
import wp from './wp.svg'
import sass from './sass.svg'
import react from './react.svg'
import bootstrap from './bootstrap.svg'
import php from './php.svg'




class PageAbout extends Component {
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
      <div className={PageAboutStyle.page_content}>
        <Menu
        showMenu={this.state.showMenu}
        menu1={this.state.menu1} menu2={this.state.menu2}
        menu3={this.state.menu3} menu4={this.state.menu4}
        menuToggle={this.toggleMenu}/>
        <Navigation stateMenu={this.state.showMenu} toggleClick={this.toggleMenu}/>
        <ScreenAbout />
      </div>
    )
  }
}

export default PageAbout

class ScreenAbout extends Component{
  render(){
    return(
      <div className={PageAboutStyle.screen_view}>
        <HeroAbout />
        <Who />
        <Passion />
        <Skill />
        <AboutFooter />
      </div>
    )
  }
}

class HeroAbout extends Component{
  render(){
    let line2 = {
      transform: 'translateX(4vw)'
    }
    return(
      <div className={PageAboutStyle.hero_container}>
        <div className={PageAboutStyle.left_hero}>
        </div>
        <div className={PageAboutStyle.right_hero}>
          <img className={PageAboutStyle.image_project} alt="theme_projet" width="100%" height="100%" src={about}/>
        </div>
        <div className={PageAboutStyle.visite_zone}>
          <h2 className={PageAboutStyle.titre_projet}>Bienvenue chez moi</h2>
          <div className={PageAboutStyle.line_box}>
            <div className={PageAboutStyle.line1}></div>
            <div style={line2} className={PageAboutStyle.line1}></div>
          </div>
          <p className={PageAboutStyle.type}>Technologie, Music et Développement</p>
        </div>
      </div>
    )
  }
}

class Who extends Component{
  render(){
    let disco = "En septembre 2019 j'ai rejoins l'Access Code School afin de me former au technologie du web et de décrocher mon diplôme de Développeur Web junior."
    let disco2 = "Suite à cela j'ai pue effectuer un stage de 3mois chez illicoweb afin de me confronter au monde professionnel."
    let disco3 = "Désormais je continue de me former par moi-même et suis ouvert à toute collaboration, partenariat ou emploi."
    return(
      <div className={PageAboutStyle.who}>
        <div className={PageAboutStyle.title_zone}>
          <div className={PageAboutStyle.number_box}>
            <div className={PageAboutStyle.line_nb}></div>
            <p className={PageAboutStyle.number}>01</p>
          </div>
          <h3 className={PageAboutStyle.who_title}>Qui Suis je</h3>
        </div>
          <div className={PageAboutStyle.who_box}>
            <div className={PageAboutStyle.name_box}>
              <h4>Dev Junior</h4>
              <h2 className={PageAboutStyle.who_name}>Barlier Victor</h2>
            </div>
            <div className={PageAboutStyle.disco_box}>
              <p className={PageAboutStyle.helve}>{disco}</p>
                <p className={PageAboutStyle.helve}>{disco2}</p>
                  <p className={PageAboutStyle.helve}>{disco3}</p>
            </div>
            <div className={PageAboutStyle.encard_geek}>
              <img className={PageAboutStyle.geek} alt="photo_profil" src={geek} width='100%' height='100%' />
            </div>
          </div>
      </div>
    )
  }
}
class Passion extends Component{
  render(){
    let PassionTable = [
      {
        image: techno,
        titre: 'Technologie',
        content: "Depuis que je suis enfant je suis passionné par la technologie, que se soit les jeux vidéo, l'électronique ou encore la cryptomonnaie. Je suis toujours intéresser par les nouveautés dans ces domaines et la constante évolution de la technologie me permet de ne jamais être lassé par ces domaines."
      },
      {
        image: music,
        titre: 'Musique',
        content: 'Depuis que je suis enfant je suis passionné par la technologie, que se soit les jeux vidéo, l électronique ou encore la cryptomonnaie. Je suis toujours intéresser par les nouveautés dans ces domaines et la constante évolution de la technologie me permet de ne jamais être lassé par ces domaines.'
      },
      {
        image: dev,
        titre: 'Développement',
        content: 'Depuis que je suis enfant je suis passionné par la technologie, que se soit les jeux vidéo, l électronique ou encore la cryptomonnaie. Je suis toujours intéresser par les nouveautés dans ces domaines et la constante évolution de la technologie me permet de ne jamais être lassé par ces domaines.'
      }
    ]
    let PassionBoard = []
    for (var i = 0; i < PassionTable.length; i++) {
      PassionBoard.push(<PassionCard key={i} image={PassionTable[i].image} titre={PassionTable[i].titre} content={PassionTable[i].content}/>)
    }
    return(
      <div className={PageAboutStyle.passion_view}>
        <div className={PageAboutStyle.title_zone}>
          <div className={PageAboutStyle.number_box}>
            <div className={PageAboutStyle.line_nb}></div>
            <p className={PageAboutStyle.number}>02</p>
          </div>
          <h3 className={PageAboutStyle.who_title}>Passion</h3>
        </div>
        <div className={PageAboutStyle.passion_box}>
          {PassionBoard}
        </div>
      </div>
    )
  }
}
class PassionCard extends Component{
  render(){
    return(
      <div className={PageAboutStyle.passion_card}>
        <div className={PageAboutStyle.encard_passion}>
          <img src={this.props.image} alt={this.props.titre} width='100%' height='100%' />
        </div>
        <h5 className={PageAboutStyle.titlePa}>{this.props.titre}</h5>
        <p className={PageAboutStyle.contentPa}>{this.props.content}</p>
      </div>
    )
  }
}

class Skill extends Component{
  render(){
    let SkillTable = [
      {
        image: ai,
        title: 'Illustrator',
        time: '2 ans',
        percent: '60%'
      },
      {
        image: html,
        title: 'HTML/CSS',
        time: '3 ans',
        percent: '90%'
      },
      {
        image: ps,
        title: 'Photoshop',
        time: '1 an',
        percent: '30%'
      },
      {
        image: wp,
        title: 'Wordpress',
        time: '5 mois',
        percent: '70%'
      },
      {
        image: afd,
        title: 'Affinity Designer',
        time: '1 an',
        percent: '50%'
      },
      {
        image: js,
        title: 'Javascript',
        time: '1 an',
        percent: '80%'
      },
      {
        image: sass,
        title: 'Sass',
        time: '2 mois',
        percent: '40%'
      },
      {
        image: react,
        title: 'React',
        time: '3 mois',
        percent: '60%'
      },
      {
        image: bootstrap,
        title: 'Bootstrap',
        time: '6 mois',
        percent: '50%'
      },
      {
        image: php,
        title: 'PHP 7.0',
        time: '1 an',
        percent: '75%'
      }
    ]
    let AfficheSkill = []
    for (var i = 0; i < SkillTable.length; i++) {
      AfficheSkill.push(<SkillCard key={i} image={SkillTable[i].image} title={SkillTable[i].title} time={SkillTable[i].time} loader={SkillTable[i].percent} />)
    }
    return(
      <div className={PageAboutStyle.skill_view}>
        <div className={PageAboutStyle.title_zone}>
          <div className={PageAboutStyle.number_box}>
            <div className={PageAboutStyle.line_nb}></div>
            <p className={PageAboutStyle.number}>03</p>
          </div>
          <h3 className={PageAboutStyle.who_title}>Compétences</h3>
        </div>
        <div className={PageAboutStyle.skill_box}>
          <div className={PageAboutStyle.skill_flex}>
            {AfficheSkill}
          </div>
        </div>
      </div>
    )
  }
}
class SkillCard extends Component{
  render(){
    let loader = {
      width: this.props.loader
    }
    return(
      <div className={PageAboutStyle.skillcard_view}>
        <div className={PageAboutStyle.encard_skillimg}>
          <img src={this.props.image} alt={this.props.title} width='100%' height='100%' />
        </div>
        <div className={PageAboutStyle.skill_boxe}>
          <div className={PageAboutStyle.skill_title}>
            <div className={PageAboutStyle.skill_zone}>
              <h5 className={PageAboutStyle.sk_title}>{this.props.title}</h5>
              <p className={PageAboutStyle.sk_time}>{this.props.time}</p>
            </div>
            <p className={PageAboutStyle.percent}>{this.props.loader}</p>
          </div>
          <div className={PageAboutStyle.skill_bar}>
            <div style={loader} className={PageAboutStyle.skill_load}></div>
          </div>
        </div>
      </div>
    )
  }
}

class AboutFooter extends Component{
  render(){
    return(
      <div className={PageAboutStyle.footer_view}>
        <p>victor.barlier@outlook.fr</p>
        <div className={PageAboutStyle.footer_react}>
          <div className={PageAboutStyle.react_enc}>
            <img src={react} alt="logo_react" width='100%' height='100%'/>
          </div>
          <p className={PageAboutStyle.footer_p}>React Web App</p>
        </div>
      </div>
    )
  }
}
