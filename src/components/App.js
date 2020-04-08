import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';
import imgTwitter from '../images/twitter.png';
import imgIn from '../images/linkedin.png';
import Ciclo from './ciclo';

class Quote extends React.Component {
    constructor(props) {
        super(props);

        this.colors = ['red', 'blue', 'black', 'yellow', 'violet', 'pink', 'green', 'gray', 'purple', 'brown'];


        this.state = {
            color: '',
        };

        this.generateRandomcolor = this.generateRandomcolor.bind(this);
    }


    generateRandomcolor() {
        const random = Math.round(Math.random() * this.colors.length - 1)
        this.setState({ color: this.colors[random] })
    }

    render() {
        const { color } = this.state;
        return (
            <div style={{ background: color }}>
                <div className="container-fluid d-flex justify-content-center align-item-center p-3">
                    <div className="row" id="minh-100" >
                        <div className="col-sm-8 align-items-center p-2">
                            <div className="card bg-white text-info text-center p-4">
                                {/* <blockquote className="blockquote mb-0 p-3">
                                    <p className="textQuote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                    <footer className="blockquote-footer text-info">
                                        <small className="textTwoQuote">
                                        Someone famous in <cite className="textThreQuote" title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote> */}
                                <Ciclo color={color}  randomColor={this.generateRandomcolor} />
                                <div className="row">
                                    <div className="col d-flex bd-highlight mb-0 p-3 justify-content-center">
                                        <button type="button" className="btn btn-ligth"><a href="https://twitter.com/explore" target="_blank"></a><img className="icono mg-2 bg-white" src={imgTwitter} /></button>
                                        <button type="button" className="btn btn-ligth"><a href="https://www.linkedin.com/home" target="_blank"></a><img className="icono mg-2 bg-white" src={imgIn} /></button>
                                        <button type="button" className="btn btn-dark ml-auto bd-highlight" style={{ background: color }}
                                            onClick={this.generateRandomcolor}
                                        >Nueva Cita</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Quote;
