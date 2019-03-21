import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import { FaGithub, FaFileAlt, FaLinkedin, FaWeixin, FaQq } from "react-icons/fa";
import { IconContext } from "react-icons";

import quincy from "./img/quincy.jpg";


const NaviBar = require("./common/topBar.js").NaviBar;
const HelloMessage = require("./common/topBar.js").HelloMessage;
class Canvas extends React.Component {
	render() {
	  return (<canvas width="1280" height="700"></canvas>);
	}
}

class Avatar extends React.Component{
  render(){
    return(  
      <div id="body-wrapper">
          <div id="blog_bar" className="col-9"></div>
          <div id="avatar" className="card">
                <img className="card-img-top" src={quincy} alt="昆西昆OvO？" />
                <div className="card-body">
                    <h5 className="card-title">見ているよ。</h5>
                    <a id="github_icon"
                       data-toggle="tooltip" data-placement="bottom" title="GitHub" href="https://github.com/yaleyoo">
                        <IconContext.Provider value={{size: '2.4em', style:{color:'#333333',textDecoration:'none'}}}><FaGithub /></IconContext.Provider>
                    </a>
                    <a id="linkedin_icon"
                       data-toggle="tooltip" data-placement="bottom" title="Linkedin" href="https://www.linkedin.com/in/yuanyu-guo/">
                        <IconContext.Provider value={{size: '2.7em', style:{color:'#333333',textDecoration:'none'}}}><FaLinkedin /></IconContext.Provider>
                    </a>
                    <a id="portfilio_icon"
                       data-toggle="tooltip" data-placement="bottom" title="Protofilio" href="https://yaleyoo.github.io">
                        <IconContext.Provider value={{size: '2.3em', style:{color:'#333333',textDecoration:'none'}}}><FaFileAlt /></IconContext.Provider>
                    </a>
                    <a id="wechat_icon"
                       data-toggle="tooltip" data-placement="bottom" title="Protofilio" href="https://s2.ax1x.com/2019/03/21/A101sK.jpg">
                        <IconContext.Provider value={{size: '2.7em', style:{color:'#333333',textDecoration:'none'}}}><FaWeixin /></IconContext.Provider>
                    </a>
                    <a id="qq_icon"
                       data-toggle="tooltip" data-placement="bottom" title="Protofilio" href="https://s2.ax1x.com/2019/03/21/A10lM6.jpg">
                        <IconContext.Provider value={{size: '2.3em', style:{color:'#333333',textDecoration:'none'}}}><FaQq /></IconContext.Provider>
                    </a>
                </div>
          </div>
      </div>);
  }
}

function Body(props) {
		return(
      <div style={{height:'100%'}}>
        <NaviBar />
        <HelloMessage />
        <Canvas />
        <Avatar />
      </div>);
}

ReactDOM.render(<Body />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
