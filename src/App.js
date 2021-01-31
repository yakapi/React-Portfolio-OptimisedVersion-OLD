import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './component/Navigation/nav'
import Header from './component/Header/header'
import Background from './component/Baground/bg'
import Project from './component/Project/project'
import About from './component/About/about'
import Contact from './component/Contact/contact'
import Menu from './component/Menu/menu'
import Page from './component/Page/page'
import Loader from './component/Loader/loader'

import Testy from './component/Test/test'

import './App.css';

function ScrollDown({scroll}){
  console.log(scroll);
  var scrollfx = {}
  if (scroll !== 0) {
    scrollfx = {
      opacity: '0',
      bottom: '0'
    }
  }else {
    scrollfx = {}
  }
  return(
    <div style={scrollfx} className='scrollBox'>
      <div className='scrollFlex'>
        <p>SCROLLDOWN</p>
        <div className='sline'></div>
      </div>
    </div>
  )
}
function ShowBar({stateBar}){
  var line1 = {}
  var line2 = {}
  var line3 = {}
  var line0 = {}
  if (stateBar === 0) {
    line0 = {
      width: '67px'
    }
  }else {
    line0 = {}
  }
  if (stateBar === 1) {
    line1 = {
      width: '67px'
    }
  }else {
    line1 = {}
  }
  if (stateBar === 2) {
    line2 = {
      width: '67px'
    }
  }else {
    line2 = {}
  }
  if (stateBar === 3) {
    line3 = {
      width: '67px'
    }
  }else {
    line3 = {}
  }

  return(
    <div className="showBar">
      <div className="showBox">
        <div style={line0} className="showLine"></div>
        <div style={line1} className="showLine"></div>
        <div style={line2} className="showLine"></div>
        <div style={line3} className="showLine"></div>
      </div>
    </div>
  )
}

function Screen({stateScreen, pLeft1, pLeft2, pLeft3, pLeft4, pRight1, pRight2, pRight3, pRight4, pRight5, aLeft1, aLeft2, aLeft3, aLeft4, aRight1, aRight2, aRight3, aRight4, aRight5, cLeft1, cLeft2, cLeft3, cLeft4, cRight1, cRight2, cRight3, cRight4, cRight5}){
  var test = {}
  if (stateScreen === 1) {
    test = {
      transform: 'translateY(-100vh)'
    }

  }else if (stateScreen === 2) {
    test = {
      transform: 'translateY(-200vh)'
    }

  }else if (stateScreen === 3) {
    test = {
      transform: 'translateY(-300vh)'
    }

  }else {
    test = {}

  }
  return(
    <div style={test} className="Screen">
      <Header stateScroll={stateScreen} />
      <Project pLeft1={pLeft1} pLeft2={pLeft2} pLeft3={pLeft3} pLeft4={pLeft4} pRight1={pRight1} pRight2={pRight2} pRight3={pRight3} pRight4={pRight4} pRight5={pRight5}/>
      <About aLeft1={aLeft1} aLeft2={aLeft2} aLeft3={aLeft3} aLeft4={aLeft4} aRight1={aRight1} aRight2={aRight2} aRight3={aRight3} aRight4={aRight4} aRight5={aRight5} />
      <Contact cLeft1={cLeft1} cLeft2={cLeft2} cLeft3={cLeft3} cLeft4={cLeft4} cRight1={cRight1} cRight2={cRight2} cRight3={cRight3} cRight4={cRight4} cRight5={cRight5}/>
    </div>
  )
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showMenu: false,
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      wheelEvent: false,
      wheelState: 0,
      pl1: false,
      pl2: false,
      pl3: false,
      pl4: false,
      pr1: false,
      pr2: false,
      pr3: false,
      pr4: false,
      pr5: false,
      al1: false,
      al2: false,
      al3: false,
      al4: false,
      ar1: false,
      ar2: false,
      ar3: false,
      ar4: false,
      ar5: false,
      cl1: false,
      cl2: false,
      cl3: false,
      cl4: false,
      cr1: false,
      cr2: false,
      cr3: false,
      cr4: false,
      cr5: false
    }
  }

  toggleMenu = (e)=>{
    console.log(this.state.showMenu);
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
  componentDidMount(){
    var TouchStart
    window.addEventListener('touchstart', (et)=>{
      TouchStart = et.touches[0].clientY;
    })
    window.addEventListener('touchend', (evt)=>{
      var TouchEnd = evt.changedTouches[0].clientY
      if (this.state.wheelEvent === false) {
        this.setState({wheelEvent: true})
        if (TouchStart > TouchEnd + 5) {
          console.log('slide down');
          //scroll down
          if (this.state.wheelState !== 3) {
            var wheelStateCount = this.state.wheelState + 1
            this.setState({wheelState: wheelStateCount})
            setTimeout(()=>{
              this.setState({wheelEvent: false})
            },1500)
            // Effet Deplacement des pages scroll up
            //PAGE PROJET
            if (this.state.wheelState === 1) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({pl1: true})
                setTimeout(()=>{
                  this.setState({pl2: true})
                  setTimeout(()=>{
                    this.setState({pl3: true})
                    setTimeout(()=>{
                      this.setState({pl4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({pr1: true})
                setTimeout(()=>{
                  this.setState({pr2: true})
                  this.setState({pr3: true})
                },350)
                setTimeout(()=>{
                  this.setState({pr4: true})
                  this.setState({pr5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({pl1: false})
                setTimeout(()=>{
                  this.setState({pl2: false})
                  setTimeout(()=>{
                    this.setState({pl3: false})
                    setTimeout(()=>{
                      this.setState({pl4: false})
                    },200)
                  },300)
                },500)
              },200)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({pr1: false})
                setTimeout(()=>{
                  this.setState({pr2: false})
                  this.setState({pr3: false})
                },350)
                setTimeout(()=>{
                  this.setState({pr4: false})
                  this.setState({pr5: false})
                },500)
              },300)
            }
            //PAGE About
            if (this.state.wheelState === 2) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({al1: true})
                setTimeout(()=>{
                  this.setState({al2: true})
                  setTimeout(()=>{
                    this.setState({al3: true})
                    setTimeout(()=>{
                      this.setState({al4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({ar1: true})
                setTimeout(()=>{
                  this.setState({ar2: true})
                  this.setState({ar3: true})
                },350)
                setTimeout(()=>{
                  this.setState({ar4: true})
                  this.setState({ar5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({al1: false})
                setTimeout(()=>{
                  this.setState({al2: false})
                  setTimeout(()=>{
                    this.setState({al3: false})
                    setTimeout(()=>{
                      this.setState({al4: false})
                    },200)
                  },300)
                },500)
              },200)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({ar1: false})
                setTimeout(()=>{
                  this.setState({ar2: false})
                  this.setState({ar3: false})
                },350)
                setTimeout(()=>{
                  this.setState({ar4: false})
                  this.setState({ar5: false})
                },500)
              },300)
            }
            //Page contact
            if (this.state.wheelState === 3) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({cl1: true})
                setTimeout(()=>{
                  this.setState({cl2: true})
                  setTimeout(()=>{
                    this.setState({cl3: true})
                    setTimeout(()=>{
                      this.setState({cl4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({cr1: true})
                setTimeout(()=>{
                  this.setState({cr2: true})
                  this.setState({cr3: true})
                },350)
                setTimeout(()=>{
                  this.setState({cr4: true})
                  this.setState({cr5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({cl1: false})
                setTimeout(()=>{
                  this.setState({cl2: false})
                  setTimeout(()=>{
                    this.setState({cl3: false})
                    setTimeout(()=>{
                      this.setState({cl4: false})
                    },200)
                  },300)
                },500)
              },200)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({cr1: false})
                setTimeout(()=>{
                  this.setState({cr2: false})
                  this.setState({cr3: false})
                },350)
                setTimeout(()=>{
                  this.setState({cr4: false})
                  this.setState({cr5: false})
                },500)
              },300)
            }
          }
          if (this.state.wheelState === 3) {
            this.setState({wheelEvent: false})
          }
        }else if (TouchStart < TouchEnd - 5) {
          console.log('slide up');
          // scroll up
          //Deplacement du screen
          if (this.state.wheelState !== 0) {
             wheelStateCount = this.state.wheelState - 1
            this.setState({wheelState: wheelStateCount})
            setTimeout(()=>{
              this.setState({wheelEvent: false})
            },1500)
            // Effet Deplacement des pages scroll up
            //PAGE PROJET
            if (this.state.wheelState === 1) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({pl1: true})
                setTimeout(()=>{
                  this.setState({pl2: true})
                  setTimeout(()=>{
                    this.setState({pl3: true})
                    setTimeout(()=>{
                      this.setState({pl4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({pr1: true})
                setTimeout(()=>{
                  this.setState({pr2: true})
                  this.setState({pr3: true})
                },350)
                setTimeout(()=>{
                  this.setState({pr4: true})
                  this.setState({pr5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({pl1: false})
                setTimeout(()=>{
                  this.setState({pl2: false})
                  setTimeout(()=>{
                    this.setState({pl3: false})
                    setTimeout(()=>{
                      this.setState({pl4: false})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({pr1: false})
                setTimeout(()=>{
                  this.setState({pr2: false})
                  this.setState({pr3: false})
                },350)
                setTimeout(()=>{
                  this.setState({pr4: false})
                  this.setState({pr5: false})
                },500)
              },300)
            }
            //PAGE About
            if (this.state.wheelState === 2) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({al1: true})
                setTimeout(()=>{
                  this.setState({al2: true})
                  setTimeout(()=>{
                    this.setState({al3: true})
                    setTimeout(()=>{
                      this.setState({al4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({ar1: true})
                setTimeout(()=>{
                  this.setState({ar2: true})
                  this.setState({ar3: true})
                },350)
                setTimeout(()=>{
                  this.setState({ar4: true})
                  this.setState({ar5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({al1: false})
                setTimeout(()=>{
                  this.setState({al2: false})
                  setTimeout(()=>{
                    this.setState({al3: false})
                    setTimeout(()=>{
                      this.setState({al4: false})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({ar1: false})
                setTimeout(()=>{
                  this.setState({ar2: false})
                  this.setState({ar3: false})
                },350)
                setTimeout(()=>{
                  this.setState({ar4: false})
                  this.setState({ar5: false})
                },500)
              },300)
            }
            //Page Contact
            if (this.state.wheelState === 3) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({cl1: true})
                setTimeout(()=>{
                  this.setState({cl2: true})
                  setTimeout(()=>{
                    this.setState({cl3: true})
                    setTimeout(()=>{
                      this.setState({cl4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({cr1: true})
                setTimeout(()=>{
                  this.setState({cr2: true})
                  this.setState({cr3: true})
                },350)
                setTimeout(()=>{
                  this.setState({cr4: true})
                  this.setState({cr5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({cl1: false})
                setTimeout(()=>{
                  this.setState({cl2: false})
                  setTimeout(()=>{
                    this.setState({cl3: false})
                    setTimeout(()=>{
                      this.setState({cl4: false})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({cr1: false})
                setTimeout(()=>{
                  this.setState({cr2: false})
                  this.setState({cr3: false})
                },350)
                setTimeout(()=>{
                  this.setState({cr4: false})
                  this.setState({cr5: false})
                },500)
              },300)
            }

          }
          if (this.state.wheelState === 0) {
            this.setState({wheelEvent: false})
          }
        }
      }
    })
    window.addEventListener('wheel', (e)=>{
      if (this.state.wheelEvent === false) {
        this.setState({wheelEvent: true})
        if (e.deltaY < 0) {
          // scroll up
          //Deplacement du screen
          if (this.state.wheelState !== 0) {
            var wheelStateCount = this.state.wheelState - 1
            this.setState({wheelState: wheelStateCount})
            setTimeout(()=>{
              this.setState({wheelEvent: false})
            },1500)
            // Effet Deplacement des pages scroll up
            //PAGE PROJET
            if (this.state.wheelState === 1) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({pl1: true})
                setTimeout(()=>{
                  this.setState({pl2: true})
                  setTimeout(()=>{
                    this.setState({pl3: true})
                    setTimeout(()=>{
                      this.setState({pl4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({pr1: true})
                setTimeout(()=>{
                  this.setState({pr2: true})
                  this.setState({pr3: true})
                },350)
                setTimeout(()=>{
                  this.setState({pr4: true})
                  this.setState({pr5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({pl1: false})
                setTimeout(()=>{
                  this.setState({pl2: false})
                  setTimeout(()=>{
                    this.setState({pl3: false})
                    setTimeout(()=>{
                      this.setState({pl4: false})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({pr1: false})
                setTimeout(()=>{
                  this.setState({pr2: false})
                  this.setState({pr3: false})
                },350)
                setTimeout(()=>{
                  this.setState({pr4: false})
                  this.setState({pr5: false})
                },500)
              },300)
            }
            //PAGE About
            if (this.state.wheelState === 2) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({al1: true})
                setTimeout(()=>{
                  this.setState({al2: true})
                  setTimeout(()=>{
                    this.setState({al3: true})
                    setTimeout(()=>{
                      this.setState({al4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({ar1: true})
                setTimeout(()=>{
                  this.setState({ar2: true})
                  this.setState({ar3: true})
                },350)
                setTimeout(()=>{
                  this.setState({ar4: true})
                  this.setState({ar5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({al1: false})
                setTimeout(()=>{
                  this.setState({al2: false})
                  setTimeout(()=>{
                    this.setState({al3: false})
                    setTimeout(()=>{
                      this.setState({al4: false})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({ar1: false})
                setTimeout(()=>{
                  this.setState({ar2: false})
                  this.setState({ar3: false})
                },350)
                setTimeout(()=>{
                  this.setState({ar4: false})
                  this.setState({ar5: false})
                },500)
              },300)
            }
            //Page Contact
            if (this.state.wheelState === 3) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({cl1: true})
                setTimeout(()=>{
                  this.setState({cl2: true})
                  setTimeout(()=>{
                    this.setState({cl3: true})
                    setTimeout(()=>{
                      this.setState({cl4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({cr1: true})
                setTimeout(()=>{
                  this.setState({cr2: true})
                  this.setState({cr3: true})
                },350)
                setTimeout(()=>{
                  this.setState({cr4: true})
                  this.setState({cr5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({cl1: false})
                setTimeout(()=>{
                  this.setState({cl2: false})
                  setTimeout(()=>{
                    this.setState({cl3: false})
                    setTimeout(()=>{
                      this.setState({cl4: false})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({cr1: false})
                setTimeout(()=>{
                  this.setState({cr2: false})
                  this.setState({cr3: false})
                },350)
                setTimeout(()=>{
                  this.setState({cr4: false})
                  this.setState({cr5: false})
                },500)
              },300)
            }

          }
          if (this.state.wheelState === 0) {
            this.setState({wheelEvent: false})
          }
        }else {
          //scroll down
          if (this.state.wheelState !== 3) {
            wheelStateCount = this.state.wheelState + 1
            this.setState({wheelState: wheelStateCount})
            setTimeout(()=>{
              this.setState({wheelEvent: false})
            },1500)
            // Effet Deplacement des pages scroll up
            //PAGE PROJET
            if (this.state.wheelState === 1) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({pl1: true})
                setTimeout(()=>{
                  this.setState({pl2: true})
                  setTimeout(()=>{
                    this.setState({pl3: true})
                    setTimeout(()=>{
                      this.setState({pl4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({pr1: true})
                setTimeout(()=>{
                  this.setState({pr2: true})
                  this.setState({pr3: true})
                },350)
                setTimeout(()=>{
                  this.setState({pr4: true})
                  this.setState({pr5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({pl1: false})
                setTimeout(()=>{
                  this.setState({pl2: false})
                  setTimeout(()=>{
                    this.setState({pl3: false})
                    setTimeout(()=>{
                      this.setState({pl4: false})
                    },200)
                  },300)
                },500)
              },200)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({pr1: false})
                setTimeout(()=>{
                  this.setState({pr2: false})
                  this.setState({pr3: false})
                },350)
                setTimeout(()=>{
                  this.setState({pr4: false})
                  this.setState({pr5: false})
                },500)
              },300)
            }
            //PAGE About
            if (this.state.wheelState === 2) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({al1: true})
                setTimeout(()=>{
                  this.setState({al2: true})
                  setTimeout(()=>{
                    this.setState({al3: true})
                    setTimeout(()=>{
                      this.setState({al4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({ar1: true})
                setTimeout(()=>{
                  this.setState({ar2: true})
                  this.setState({ar3: true})
                },350)
                setTimeout(()=>{
                  this.setState({ar4: true})
                  this.setState({ar5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({al1: false})
                setTimeout(()=>{
                  this.setState({al2: false})
                  setTimeout(()=>{
                    this.setState({al3: false})
                    setTimeout(()=>{
                      this.setState({al4: false})
                    },200)
                  },300)
                },500)
              },200)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({ar1: false})
                setTimeout(()=>{
                  this.setState({ar2: false})
                  this.setState({ar3: false})
                },350)
                setTimeout(()=>{
                  this.setState({ar4: false})
                  this.setState({ar5: false})
                },500)
              },300)
            }
            //Page contact
            if (this.state.wheelState === 3) {
              //FX Project Left Active
              setTimeout(()=>{
                this.setState({cl1: true})
                setTimeout(()=>{
                  this.setState({cl2: true})
                  setTimeout(()=>{
                    this.setState({cl3: true})
                    setTimeout(()=>{
                      this.setState({cl4: true})
                    },200)
                  },300)
                },500)
              },400)
              //FX Project Right Active
              setTimeout(()=>{
                this.setState({cr1: true})
                setTimeout(()=>{
                  this.setState({cr2: true})
                  this.setState({cr3: true})
                },350)
                setTimeout(()=>{
                  this.setState({cr4: true})
                  this.setState({cr5: true})
                },600)
              },500)
            }else {
              // FX Project Left Unactive
              setTimeout(()=>{
                this.setState({cl1: false})
                setTimeout(()=>{
                  this.setState({cl2: false})
                  setTimeout(()=>{
                    this.setState({cl3: false})
                    setTimeout(()=>{
                      this.setState({cl4: false})
                    },200)
                  },300)
                },500)
              },200)
              //FX Project Right UnActive
              setTimeout(()=>{
                this.setState({cr1: false})
                setTimeout(()=>{
                  this.setState({cr2: false})
                  this.setState({cr3: false})
                },350)
                setTimeout(()=>{
                  this.setState({cr4: false})
                  this.setState({cr5: false})
                },500)
              },300)
            }
          }
          if (this.state.wheelState === 3) {
            this.setState({wheelEvent: false})
          }
        }
      }
    })
  }
  render(){
    return (
      <Router>
      <div className="AppZone">
        <Switch>
          <Route path="/Project">
            <Page PageName="contact"/>
          </Route>
          <Route path="/About">
            <Page PageName="about"/>
          </Route>
          <Route path="/Contact">
            <Page PageName="project"/>
          </Route>
          <Route path="/Test"><Testy /></Route>
          <Route path="/">
            <Home scroll={this.state.wheelState} stateBar={this.state.wheelState}
            showMenu={this.state.showMenu} menu1={this.state.menu1}
            menu2={this.state.menu2} menu3={this.state.menu3}
            menu4={this.state.menu4} stateMenu={this.state.showMenu}
            toggleClick={this.toggleMenu} stateScreen={this.state.wheelState}
            pLeft1={this.state.pl1} pLeft2={this.state.pl2}
            pLeft3= {this.state.pl3} pLeft4= {this.state.pl4}
            pRight1={this.state.pr1} pRight2={this.state.pr2}
            pRight3={this.state.pr3} pRight4={this.state.pr4}
            pRight5={this.state.pr5} aLeft1={this.state.al1}
            aLeft3= {this.state.al3} aLeft4= {this.state.al4}
            aRight1={this.state.ar1} aRight2={this.state.ar2}
            aRight3={this.state.ar3} aRight4={this.state.ar4}
            aRight5={this.state.ar5} aLeft2={this.state.al2}
            cLeft1={this.state.cl1} cLeft2={this.state.cl2}
            cLeft3= {this.state.cl3} cLeft4= {this.state.cl4}
            cRight1={this.state.cr1} cRight2={this.state.cr2}
            cRight3={this.state.cr3} cRight4={this.state.cr4}
            cRight5={this.state.cr5}
            />
          <Loader />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

function Home({scroll, stateBar, showMenu, menu1, menu2, menu3, menu4, stateMenu, toggleClick, stateScreen, pLeft1, pLeft2, pLeft3, pLeft4, pRight1, pRight2, pRight3, pRight4, pRight5, aLeft1, aLeft2, aLeft3, aLeft4, aRight1, aRight2, aRight3, aRight4, aRight5, cLeft1, cLeft2, cLeft3, cLeft4, cRight1, cRight2, cRight3, cRight4, cRight5}){
  return(
    <div className="App">
    <Background />
    <ScrollDown scroll={scroll}/>
    <ShowBar stateBar={stateBar} />
    <Menu
    showMenu={showMenu}
    menu1={menu1} menu2={menu2}
    menu3={menu3} menu4={menu4}
    menuToggle={toggleClick}/>
    <Navigation stateMenu={stateMenu} toggleClick={toggleClick}/>
    <Screen stateScreen={stateScreen}
    pLeft1={pLeft1} pLeft2={pLeft2}
    pLeft3= {pLeft3} pLeft4= {pLeft4}
    pRight1={pRight1} pRight2={pRight2}
    pRight3={pRight3} pRight4={pRight4}
    pRight5={pRight5} aLeft1={aLeft1}
    aLeft3= {aLeft3} aLeft4= {aLeft4}
    aRight1={aRight1} aRight2={aRight2}
    aRight3={aRight3} aRight4={aRight4}
    aRight5={aRight5} aLeft2={aLeft2}
    cLeft1={cLeft1} cLeft2={cLeft2}
    cLeft3= {cLeft3} cLeft4= {cLeft4}
    cRight1={cRight1} cRight2={cRight2}
    cRight3={cRight3} cRight4={cRight4}
    cRight5={cRight5}/>
    </div>
  )
}
