import React, { Component } from 'react'
import '../assets/css/preloader.css';

export default class Preloader extends Component {
    render() {
        return (
            <div className="preloader pl-size-xl">
                <div className="spinner-layer pl-light-blue">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        )
    }
}
