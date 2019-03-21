import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import quincy from "./img/quincy.jpg";

const NaviBar = require("./common/topBar.js").NaviBar;
const HelloMessage = require("./common/topBar.js").HelloMessage;
class Canvas extends React.Component {
	render() {
	  return <canvas width="1280" height="700"></canvas>;
	}
}

class Avatar extends React.Component{
  render(){
    return(  <div id="body-wrapper">
          <div id="blog_bar" className="col-9"></div>
          <div id="avatar" className="card">
                <img className="card-img-top" src={quincy} alt="昆西昆OvO？" />
                <div className="card-body">
                    <h5 className="card-title">見ているよ。</h5>
                    <a id="github_icon"
                       data-toggle="tooltip" data-placement="bottom" title="GitHub" href="https://github.com/yaleyoo">
                        <i className="icon-github icon-3x"></i>
                    </a>
                    <a id="cv_icon"
                       data-toggle="tooltip" data-placement="bottom" title="CV" href="https://yaleyoo.github.io">
                        <i className="icon-user icon-3x"></i>
                    </a>
                </div>
          </div>
      </div>);
  }
}

function Body(props) {
		return(
    <div>
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
