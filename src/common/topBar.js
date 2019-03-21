import React, { Component }from 'react';
import wrapper from '../img/wrapper.jpg';
import './top-bar.css';
import { FaHome, FaAlignJustify, FaArchive, FaLightbulb, FaCommentAlt, FaUserAlt, FaGithub, FaFileAlt, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import 'bootstrap/dist/css/bootstrap.css';

export class NaviBar extends React.Component {
        constructor(props){
          super(props);
          this.state = {keyword:''};

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        fetchTypes(){
          alert('fetch');
        }

        handleChange(event) {
          this.setState({keyword: event.target.value});
        }

        handleSubmit(event) {
              window.location.href = 'https://www.google.com/search?q=site:yaleyoo.com%20' + this.state.keyword;
          event.preventDefault();
        }

        render() {
          return (
            <nav id="top-nav" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                      aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <a className="nav-link" href="">
                              <IconContext.Provider value={{size: '1.1em'}}><FaHome /></IconContext.Provider>
                              Homepage 
                              <span className="sr-only"></span>
                          </a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" onClick={this.fetchTypes} id="navbarDropdown" role="button"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <FaAlignJustify />
                              Types <span className="sr-only"></span>
                          </a>
                          <div id="type-menu" className="dropdown-menu" aria-labelledby="navbarDropdown">

                          </div>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="">
                              <FaArchive />
                              Archive <span className="sr-only"></span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="">
                              <FaLightbulb />
                              Lab <span className="sr-only"></span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="">
                              <FaCommentAlt />
                              Discussion Board <span className="sr-only"></span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="">
                              <FaUserAlt />
                              About Me <span className="sr-only"></span></a>
                      </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 mr-2" onSubmit={this.handleSubmit}>
                      <input id="keyword" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
              </div>
          </nav>);
        }
      }

      export class HelloMessage extends React.Component {
        render() {
          return (
              <div id="header-wrapper" style={{backgroundImage: 'url(' + wrapper + ')'}}>
                <div style={{textAlign: 'center',
                                            textShadow: '1px 3px #736666',
                                            paddingTop: '240px',
                                            color: '#f27d6b',
                                            fontFamily: 'Courier',
                                            fontWeight: 'bolder',
                                            fontSize: '70px'}}>Bonjour! Yaleyoo
                </div>

                <div style={{textAlign: 'center',
                                            textShadow: '1px 1px #475290',
                                            paddingTop: '40px',
                                            color: '#5cc4ec',
                                            fontFamily: 'Courier',
                                            fontWeight: 'bolder',
                                            fontSize: '30px'}}>Stay Foolish, Stay Hungry
                </div>
              </div>
          );
        }
      }
