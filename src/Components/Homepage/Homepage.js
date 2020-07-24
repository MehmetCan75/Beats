import React, { Component } from 'react'
import {Link} from 'react-router-dom'

//CSS
import './Homepage.css'

//COMPONENTS


export default class Homepage extends Component {
    render() {
        return (
            <div className="hp">

            <div className="presentation">
                <p>Bonjour tout le monde ! Aujourd'hui je veux partager une des mes passions avec vous : mes beats ! 
                
                Passioné de musique depuis le plus jeune âge, j'ai commencé à faire des beats à l'âge de 17ans, et depuis je ne me suis toujours pas arrêté.
                Cliquez sur le bouton ci-dessous pour me donner votre avis sur mon meilleur beat ! Merci</p>
                <Link to='/beats' className="BeatsButton">Ecoutez mes beats</Link>
            </div>

            <div className="Title&Text">
            <h1>"La chose superbe à propos de la musique, c'est que lorsqu'elle vous touche, vous ne ressentez plus la douleur"</h1>
            <p className='bob'>Bob Marley</p>
            </div>
            <div>
                
            </div>
            </div>
        )
    }
}
