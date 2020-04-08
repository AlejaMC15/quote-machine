import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';
import imgTwitter from '../images/twitter.png';
import imgIn from '../images/linkedin.png';
import Ciclo from './ciclo'

class Quote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: true,
        };
    }

    render() {
        const { quotes } = this.state;
        return (

            <div className="container-fluid d-flex justify-content-center align-item-center p-3">
                <div className="row" id="minh-100" >
                    <div className="col-sm-8 align-items-center">
                        <div className="card bg-white text-info text-center p-5">
                            <blockquote className="blockquote mb-0 p-3">
                                <p className="textQuote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                <footer className="blockquote-footer text-info">
                                    <small className="textTwoQuote">
                                    Someone famous in <cite className="textThreQuote" title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                            <div className="row">
                                <div className="col d-flex bd-highlight mb-0 justify-content-center">
                                    <button type="button" className="btn btn-ligth"><img className="icono mg-2 bg-white" src={imgTwitter} /></button>
                                    <button type="button" className="btn btn-ligth"><img className="icono mg-2 bg-white" src={imgIn} /></button>

                                        {quotes &&
                                        <Ciclo />
                                        }

                                    <button type="button" className="btn btn-info ml-auto bd-highlight"
                                        onClick={() => this.setState({quotes: !quotes})}
                                    >Nueva Cita</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Quote;

