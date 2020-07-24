import React, { Component } from 'react'

//CSS
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <a href="https://www.linkedin.com/in/mehmetcanozmen/" className='linkedin'>p</a>
                <a href="https://github.com/MehmetCan75/" className='github'>p</a>
                <a href={"mailto:mehmetozmenfb@gmail.com" } className='gmail'>p</a>
            </div>
        )
    }
}
