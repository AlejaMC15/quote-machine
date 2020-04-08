import React,{Component} from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Quote from './components/App'
import Ciclo from './components/ciclo'

const container = document.getElementById('root')

ReactDOM.render(
  <div>
    <Quote />
  </div>, container
);
