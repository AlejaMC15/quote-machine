import React from 'react';
import Quote from './App';

class Ciclo extends React.Component {
    constructor(props) {
        super(props);

        this.frases = [
            {
                frase: '“Para liberarse, la mujer debe sentirse libre, no para rivalizar con los hombres, sino libres en sus capacidades y personalidad”.',
                autor: 'Indira Gandhi',
                ano: '1917-1984'
            },
            {
                frase: '“La vida es corta: sonríele a quien llora, ignora a quien te critica, y sé feliz con quien te importa”.',
                autor: 'Marilyn Monroe',
                ano: '1926-1962'
            },
            {
                frase: '“Usted no puede esperar construir un mundo mejor sin mejorar a las personas. Cada uno de nosotros debe trabajar para su propia mejora”.',
                autor: 'Marie Curie',
                ano: '1867-1934'
            },
            {
                frase: '“No nacemos como mujer, sino que nos convertimos en una”.',
                autor: 'Simone de Beavoir',
                ano: '1908-1986'
            },
            {
                frase: '“La ceguera nos separa de las cosas que nos rodea, pero la sordera nos separa de las personas”.',
                autor: 'Hellen Keller',
                ano: '1880-1968'
            },
            {
                frase: '“El mayor peligro que nos depara el futuro es la apatía”.',
                autor: 'Jane Goodall',
                ano: '1934'
            },
            {
                frase: '“Son nuestras decisiones las que muestran quiénes somos realmente, más que nuestras habilidades”.',
                autor: 'J.K. Rowling',
                ano: '1965'
            },
            {
                frase: '“Debemos decirles a nuestras jóvenes que sus voces son importantes”.',
                autor: 'Malala Yousafzai',
                ano: '1997'
            },
            {
                frase: 'Nada es imposible, la propia palabra lo dice: “puedo hacerlo”.',
                autor: 'Audrey Hepburn',
                ano: '1929-1993'
            },
            {
                frase: '“La paz comienza con una sonrisa”.',
                autor: 'Madre Teresa de Calcuta',
                ano: '1910-1997'
            }

        ];

        this.state = {
            quota: '',
        };

        this.selectRandomQuota = this.selectRandomQuota.bind(this);
    }

    //Montaje
    componentDidMount() {
        const { randomColor } = this.props;
        randomColor();
    }

    // Actualizacion
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.color !== this.props.color) {
            this.selectRandomQuota();
        }
    }

    selectRandomQuota() {
        const random = Math.round(Math.random() * this.frases.length - 1)
        this.setState({ quota: this.frases[random] });
    }


    render() {
        const { quota } = this.state;
        const { color } = this.props;
        return (

            <div style={{ color }}>
                <div>
                    “{quota.frase}”.
                </div>
                <div>
                    {quota.autor} / {quota.ano}
                </div>
            </div>

        )
    }

}

export default Ciclo;