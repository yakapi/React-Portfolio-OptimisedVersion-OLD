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
    // console.log("HOME UPDATE");
  }
  render () {
    return (
      <div className={HomeStyle.home_container}>
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
      pl1: false,
      pl2: false,
      pl3: false,
      pl4: false,
      pr1: false,
      pr4: false,
      pr5: false,
      al1: false,
      al2: false,
      al3: false,
      al4: false,
      ar1: false,
      ar4: false,
      ar5: false,
      cl1: false,
      cl2: false,
      cl3: false,
      cl4: false,
      cr1: false,
      cr4: false,
      cr5: false
    }
  }
  wheelEngine = (e)=>{
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
  }

  TouchStart = null
  touchEngineStart = (et)=>{
    this.TouchStart = et.touches[0].clientY;
  }
  touchEngineEnd = (evt)=>{
    var TouchEnd = evt.changedTouches[0].clientY
    if (this.state.wheelEvent === false) {
      this.setState({wheelEvent: true})
      if (this.TouchStart > TouchEnd + 5) {
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
                this.setState({cr4: false})
                this.setState({cr5: false})
              },500)
            },300)
          }
        }
        if (this.state.wheelState === 3) {
          this.setState({wheelEvent: false})
        }
      }else if (this.TouchStart < TouchEnd - 5) {
        // console.log('slide up');
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
  }
  componentDidMount(){
    window.addEventListener('touchstart', this.touchEngineStart)
    window.addEventListener('touchend', this.touchEngineEnd)
    window.addEventListener('wheel', this.wheelEngine)
  }
  componentDidUpdate(){
    // console.log('Screen UPDATE');
  }
  componentWillUnmount(){
    window.removeEventListener('touchstart', this.touchEngineStart)
    window.removeEventListener('touchend', this.touchEngineEnd)
    window.removeEventListener('wheel', this.wheelEngine)
  }
  render() {
    // console.log(`RENDER state ${this.state.wheelState}`);
    var test = {}
    if (this.state.wheelState === 1) {
      test = {
        transform: 'translateY(-100vh)'
      }

    }else if (this.state.wheelState === 2) {
      test = {
        transform: 'translateY(-200vh)'
      }

    }else if (this.state.wheelState === 3) {
      test = {
        transform: 'translateY(-300vh)'
      }

    }else {
      test = {}

    }
    return (
      <div style={test} className={HomeStyle.home_screen}>
        <ShowBar stateBar={this.state.wheelState} />
        <Hero/>
        <ScrollDown scroll={this.state.wheelState} />
        <ProjectCard pLeft1={this.state.pl1} pLeft2={this.state.pl2} pLeft3={this.state.pl3} pLeft4={this.state.pl4} pRight1={this.state.pr1} pRight4={this.state.pr4} pRight5={this.state.pr5} />
        <AboutCard aLeft1={this.state.al1} aLeft2={this.state.al2} aLeft3={this.state.al3} aLeft4={this.state.al4} aRight1={this.state.ar1}  aRight4={this.state.ar4} aRight5={this.state.ar5} />
        <ContactCard cLeft1={this.state.cl1} cLeft2={this.state.cl2} cLeft3={this.state.cl3} cLeft4={this.state.cl4} cRight1={this.state.cr1} cRight4={this.state.cr4} cRight5={this.state.cr5}/>
      </div>
    )
  }
}
