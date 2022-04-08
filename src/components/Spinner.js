import React, { Component } from 'react';
import loader from './loader.gif';

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="my-5" src={loader} alt="Preloader" />
            </div>
        )
    }
}

export default Spinner
