import React, { Component } from 'react';
import ReactPlayer from "react-player";

import './Music.css'

export default class Music extends Component {
    render() {
        return (
            <div className="playerWrapper">
                <ReactPlayer
                url="https://soundcloud.com/mcanparis/no-se"
                className='player'
                width='80%'
                height='70%'
                />
                <ReactPlayer
                url="https://soundcloud.com/mcanparis/trapz"
                className='player'
                width='80%'
                height='70%'
                />
                <ReactPlayer
                url="https://soundcloud.com/mcanparis/jblv"
                className='player'
                width='80%'
                height='70%'
                />
                <ReactPlayer
                url="https://soundcloud.com/mcanparis/space"
                className='player'
                width='80%'
                height='70%'
                />
                <ReactPlayer
                url="https://soundcloud.com/mcanparis/hope"
                className='player'
                width='80%'
                height='70%'
                />
                <ReactPlayer
                url="https://soundcloud.com/mcanparis/charlies-angels"
                className='player'
                width='80%'
                height='70%'
                />
                <ReactPlayer
                url="https://soundcloud.com/mcanparis/tactics"
                className='player'
                width='80%'
                height='70%'
                />
                <ReactPlayer
                url="https://soundcloud.com/mcanparis/gang"
                className='player'
                width='80%'
                height='70%'
                />
                <ReactPlayer
                url="https://soundcloud.com/mcanparis/sun"
                className='player'
                width='80%'
                height='70%'
                />
                <ReactPlayer
                url="https://soundcloud.com/mcanparis/funk-brasileiro"
                className='player'
                width='80%'
                height='70%'
                />
                <ReactPlayer
                url="https://soundcloud.com/mcanparis/gonna-be-alright"
                className='player'
                width='80%'
                height='70%'
                />
            </div>
        )
    }
}
