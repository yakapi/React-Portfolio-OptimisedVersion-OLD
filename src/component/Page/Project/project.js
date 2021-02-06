import React, { Component } from 'react'
import ProjectPageStyle from './project.module.css'
import Bar from '../../Bar/bar'
import animopolis from './animopolis.jpg'
import bombermeuh_mock from './bombermeuh-all.png'
import animopolis_mock from './Animopolis_mac.png'
import wordpress from './wordpress.svg'
import javascript from './javascript.svg'
import arrow from './right.svg'
import bombermeuh from './bomber_affiche.jpg'
import BtnMore from '../../Button/button_more'
import Loader from '../../Loader/loader'

class ProjectPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      arrowState: false,
      arrowCount: 0
    }
  }
  arrowRight = (e) => {
      // console.log('right');
      if (this.state.arrowState === false) {
        if (this.state.arrowCount !== 1) {
          this.setState({arrowCount: this.state.arrowCount + 1})
          this.setState({arrowState: true})
          setTimeout(()=>{
            this.setState({arrowState: false})
          },2000)
        }
      }
  }
  arrowLeft = (e) => {
    // console.log('left');
    if (this.state.arrowState === false) {
      if (this.state.arrowCount !== 0) {
        this.setState({arrowCount: this.state.arrowCount - 1})
        this.setState({arrowState: true})
        setTimeout(()=>{
          this.setState({arrowState: false})
        },2000)
      }
    }
  }
  render () {
    return (
      <div className={ProjectPageStyle.body_view}>
        <Loader />
        <Bar />
        <ScreenView count={this.state.arrowCount}/>
        <Arrow side='left' eClick={this.arrowLeft}/>
        <Arrow side='right' eClick={this.arrowRight}/>
      </div>
    )
  }
}

export default ProjectPage

class ScreenView extends Component {
  componentDidMount(){

  }
  render(){
    let opacityP1 = 1
    let opacityP2 = 0
    if (this.props.count === 1) {
      opacityP1 = 0
      opacityP2 = 1
    }
    if (this.props.count === 0) {
      opacityP1 = 1
      opacityP2 = 0
    }
    const TableProjet = [
      {
        titre_projet: 'Animopolis',
        type_projet: 'Animalerie',
        role: 'Intégrateur',
        date: 'Juin-2020',
        describe: 'Site Vitrine construit en WordPress pour une animalerie',
        number: '01',
        image_affiche: animopolis,
        image_mockup: animopolis_mock,
        image_techno: wordpress,
        color: '#CCA841',
        opacity: opacityP1,
        concept: 'A partir d’un projet commandité par Animopolis, il m’a été demandé de réaliser un site-vitrine de son espace d’animalerie. L’objectif était de concevoir un site-vitrine moderne et respectant la charte graphique de son image de marque.'
      },
      {
        titre_projet: 'BomberMeuh',
        type_projet: 'Jeu Arcade',
        role: 'Développeur',
        date: 'Novembre-2019',
        describe: 'RunTime Game , pure javascript sans librairie',
        number: '02',
        image_affiche: bombermeuh,
        image_mockup: bombermeuh_mock,
        image_techno: javascript,
        color: '#6F0128',
        opacity: opacityP2,
        concept: 'A partir d’un projet de groupe, il m’a été demandé de réaliser un site-vitrine pour présenter un futur jeu mobile. L’objectif était de réaliser un site « One Page » permettant de présenter le jeu et les nouvelles mises à jour ainsi que d’avoir un aperçu démo du jeu.'
      }
    ]

    const AfficheProject = []
    for (var i = 0; i < TableProjet.length; i++) {
      AfficheProject.push(<ProjectCard affiche={TableProjet[i].image_affiche} key={i} type={TableProjet[i].type_projet}
                role={TableProjet[i].role} date={TableProjet[i].date}
                describe={TableProjet[i].describe} number={TableProjet[i].number}
                mockup={TableProjet[i].image_mockup} techno={TableProjet[i].image_techno}
                concept={TableProjet[i].concept} titre={TableProjet[i].titre_projet} color={TableProjet[i].color}
                opacity={TableProjet[i].opacity}
              />)
    }
    return(
      <div className={ProjectPageStyle.screen_view}>
        {AfficheProject}

      </div>
    )
  }
}
class ProjectCard extends Component {
  render(){

    let opacity = {
      opacity: ''+this.props.opacity+''
    }

    return(
      <div style={opacity} className={ProjectPageStyle.project_view}>
        <HeroProject affiche={this.props.affiche} titre={this.props.titre} type={this.props.type} />
        <Mockup role={this.props.role} number={this.props.number} concept={this.props.concept} mockup={this.props.mockup}
          color={this.props.color} describe={this.props.describe} techno={this.props.techno} date={this.props.date}  />
      </div>
    )
  }
}
class HeroProject extends Component {
  render(){
    let line2 = {
      transform: 'translateX(4vw)'
    }
    return(
      <div className={ProjectPageStyle.hero_container}>
        <div className={ProjectPageStyle.left_hero}>
        </div>
        <div className={ProjectPageStyle.right_hero}>
          <img className={ProjectPageStyle.image_project} alt={this.props.titre} width="100%" height="100%" src={this.props.affiche}/>
        </div>
        <div className={ProjectPageStyle.visite_zone}>
          <h2 className={ProjectPageStyle.titre_projet}>{this.props.titre}</h2>
          <div className={ProjectPageStyle.line_box}>
            <div className={ProjectPageStyle.line1}></div>
            <div style={line2} className={ProjectPageStyle.line1}></div>
          </div>
          <p className={ProjectPageStyle.type}>{this.props.type}</p>
          <BtnMore name='Visitez'/>
        </div>
      </div>
    )
  }
}


class Mockup extends Component{
  render(){
    let color_nb = {
      color: ''+this.props.color+''
    }
    return(
      <div>
        <div className={ProjectPageStyle.role_bar}>
          <div className={ProjectPageStyle.role_box}>
            <p className={ProjectPageStyle.role_titre} >ROLE</p>
            <h3 className={ProjectPageStyle.role_type} >{this.props.role}</h3>
          </div>
          <div className={ProjectPageStyle.role_box}>
            <p className={ProjectPageStyle.role_titre} >DATE</p>
            <h3 className={ProjectPageStyle.role_type} >{this.props.date}</h3>
          </div>
          <div className={ProjectPageStyle.role_box}>
            <p className={ProjectPageStyle.role_titre} >DESCRIPTIF</p>
            <h3 className={ProjectPageStyle.role_type} >{this.props.describe}</h3>
          </div>
        </div>
        <div  className={ProjectPageStyle.encard_mockup} >
          <img className={ProjectPageStyle.mockup} alt='mockup{this.props.number}' width='100%' height='100%' src={this.props.mockup} />
        </div>
        <div className={ProjectPageStyle.concept_box}>
          <div className={ProjectPageStyle.number_box}>
            <div className={ProjectPageStyle.line_nb}></div>
            <p style={color_nb} className={ProjectPageStyle.number}>{this.props.number}</p>
          </div>
          <h4 className={ProjectPageStyle.concept}>Concept</h4>
          <p className={ProjectPageStyle.story}>{this.props.concept}</p>
        </div>
        <div className={ProjectPageStyle.techno_box}>
          <div className={ProjectPageStyle.encard_techno}>
            <img width='100%' height='100%' alt='techno{this.props.number}' src={this.props.techno} />
          </div>
        </div>
      </div>
    )
  }
}
 class Arrow extends Component{
   render(){
     let side = {}
     let rotate = {}

     if (this.props.side === 'right') {
       side = {
         right: '0'
       }
     }
     if (this.props.side === 'left') {
       rotate={
         transform: 'rotate(180deg)'
       }
     }

     return(
       <div style={side} className={ProjectPageStyle.arrow_zone}>
         <div onClick={this.props.eClick} className={ProjectPageStyle.encard_arrow}>
           <img style={rotate} src={arrow} alt="flèche" height='100%' width='100%' />
         </div>
       </div>
     )
   }
 }
