import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { FaGithub, FaWeibo, FaEnvelope } from "react-icons/fa";
import './footer.css';

export default class Footer extends React.Component{
	render() {
		return (
			<div>
				<div id="gap"></div>
				<footer class="footer">
				    <div class="container">
				        <div class="row">
				            <div class="col-md-6 col-xs-6" style={{textAlign: 'left'}}>
				                <div style={{fontFamily: 'Courier',
				                				fontWeight: 'bolder',
				                				fontSize: '35px'}}>Contact</div>
				                <p><FaEnvelope />&nbsp;&nbsp;E-mail: <a href="mailto: steveguo1024@gmail.com">Steve Guo</a></p>
				                <p><FaWeibo />&nbsp;&nbsp;Weibo: <a href="https://www.weibo.com/6470760193/profile?topnav=1&wvr=6&is_all=1">野生的yaleyoo</a>
				                </p>
				                <p><FaGithub />&nbsp;&nbsp;GitHub: <a href="https://github.com/yaleyoo">yaleyoo</a></p>
				             </div>
				            <div class="col-md-6 col-xs-6 pt-4" style={{textAlign: 'left'}}>
				                <p>Repository available from <a href="https://github.com/yaleyoo/blog">GitHub</a>.</p>
				                <p>Statistic service provided by <a href="https://www.google.com/analytics">Google Analytics</a>. </p>
				                <p>&#169; 2019 Yaleyoo All Rights Reserved. | <a href="/sitemap.xml">Sitemap</a></p>
				                <p>Made with &#9829; by <a href="https://yaleyoo.github.io">Yaleyoo</a>.</p>
				            </div>
				        </div>
				    </div>
				</footer>
			</div>
		);
	}
}