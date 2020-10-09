import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchMovies, getData } from '../actions/fectchActions'
import Movie from './Movie'
import './Movies.scss'
import Axios from "axios";
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

class Movies extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }
    }
    
    
     getData = () => {
        let result = [];
         Axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
            .then(res => {
                console.log('got here')
                console.log(res.data.results)
                this.setState({
                    movies: res.data.results
                })
                result =  res.data.results
            }).catch(err => {
                console.log(err)
                result =  err
            })
            
            return this.state
    }
    

    componentDidMount(){
         this.getData()
    }
    render(){
        const { movies } = this.props
        console.log(this.props)
        const data = this.state.movies
        fetchMovies(data)
        console.log(data)
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
    console.log(state)
    return {
        movies: state.movie.movies
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMovies: (data) => dispatch({type: 'GET_MOVIES', data})
})
export default connect(mapStateToProps, mapDispatchToProps)(Movies)
