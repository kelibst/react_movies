import React from 'react'
import Movie from './Movie'
import './Movies.scss'

const Movies = () => {
    return (
        <div className="container-fluid">
            <div className="movies-container my-4 py-3">
                <h3 className="movies-header">Recent</h3>
                <div className="row">
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                </div>
            </div>
        </div>
    )
}

export default Movies
