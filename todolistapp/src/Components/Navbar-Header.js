import React from 'react'
import $ from 'jquery';
import './Navbar-Header.css'


export default class NavbarandHeader extends React.Component{
    render(){
        return(
            <div className="container-fluid navbar-custom">
                <div className="row">
                    <div className="col-md-4">
                    <div className="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" >
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>                    
                    <a href="#" className="navbar-brand"> 
                       OnSolve
                    </a>
                </div>
                    </div>
                    <div className="col-md-8">
                        
            </div>
                </div>
            </div>
        );
    }
    
}