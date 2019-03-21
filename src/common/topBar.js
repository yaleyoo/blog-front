import React, { Component } from 'react';
import wrapper from '../img/wrapper.jpg';
import './top-bar.css';

export class NaviBar extends React.Component {
        constructor(props){
          super(props);
          this.state = {value:'search'};
        }
        fetchTypes(){
          alert('fetch');
        }
        handleSubmit(event) {
          event.preventDefault();
        }

        render() {
          return (<nav id="top-nav" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                      aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <a className="nav-link" href="">
                              <i className="icon-home"></i>
                              首页 <span className="sr-only">(current)</span>
                          </a>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" onClick={this.fetchTypes} id="navbarDropdown" role="button"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="icon-magic"></i>
                              分类 <span className="sr-only">(current)</span>
                          </a>
                          <div id="type-menu" className="dropdown-menu" aria-labelledby="navbarDropdown">

                          </div>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/viewBlog.action"><i className="icon-inbox"></i>
                              归档 <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/viewApps.action"><i className="icon-beaker"></i>
                              实验室 <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/viewDiscussionBoard.action"><i className="icon-pencil"></i>
                              留言 <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/viewAbout.action">
                              <i className="icon-user"></i>
                              关于 <span className="sr-only">(current)</span></a>
                      </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 mr-2" onSubmit={this.handleSubmit}>
                      <input id="keyword" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" target='_blank'>Search</button>
                  </form>
              </div>
          </nav>);
        }
      }

      export class HelloMessage extends React.Component {
        render() {
          return (<div id="header-wrapper" style={{backgroundImage: {wrapper}}}>
              <div style={{textAlign: 'center',
                                          textShadow: '1px 3px #736666',
                                          paddingTop: '240px',
                                          color: '#f27d6b',
                                          fontFamily: 'Courier',
                                          fontWeight: 'bolder',
                                          fontSize: '70px'}}>Bonjour! Yaleyoo</div>

                                          <div style={{
                                          textAlign: 'center',
                                          textShadow: '1px 1px #475290',
                                          paddingTop: '40px',
                                          color: '#5cc4ec',
                                          fontFamily: 'Courier',
                                          fontWeight: 'bolder',
                                          fontSize: '30px'}}>Stay Foolish, Stay Hungry</div>
            </div>);
        }
      }
