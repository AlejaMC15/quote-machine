import React from 'react';
import Quote from './App';

class Ciclo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }


    //Montaje
    componentDidMount() {


    }

    //Desmontaje
    componentWillMount() {


    }

    render() {
        return (

            <div>
                <div>
                    “Para liberarse, la mujer debe sentirse libre, no para rivalizar con los hombres, sino libres en sus capacidades y personalidad”.
                </div>
                <div>
                    Indira Gandhi / 1917-1984
                </div>
            </div>

        )
    }

}

export default Ciclo;