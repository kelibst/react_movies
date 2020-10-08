import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchMovies, getData } from '../actions/fectchActions'
import Movie from './Movie'
import './Movies.scss'

class Movies extends Component {
    constructor(props){
        super(props)
    }
    
    componentDidUpdate(){
       const { fetchMovies } = this.props
        console.log(this.props)
        fetchMovies()
    }
    render(){
        const { movies } = this.props
        console.log(this.props)
        return (
        <section className="container-fluid">
            <div className="movies-container my-4 py-3">
                <h3 className="movies-header">Recent</h3>
                <div className="row m-0">
                {movies && movies.map(movie => {
                    return  (<Movie movie={movie} key={movie.id}/>)
                })} 
                </div>
            </div>
        </section>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.movies
    }
}

const mapDispatchToProps = dispatch => ({
  
    fetchMovies: () => dispatch(fetchMovies())
})
export default compose(connect(mapStateToProps, mapDispatchToProps))(Movies)
