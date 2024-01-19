import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { MovieFull, MovieDBMoviesResponse } from '../interfaces/movieInterface'

interface MoviesState {
    nowPlaying: MovieFull[],
    popular: MovieFull[],
    topRated: MovieFull[],
    upConming: MovieFull[]
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upConming: []
    })

    const getMovies = async () => {

        //Estas son promesas de React
        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing')
        const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular')
        const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated')
        const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming')

        //Se captura cada una de las respuestas de las promesas
        const resps = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ])

        setMoviesState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upConming: resps[3].data.results
        })

        setIsLoading(false)
    }

    useEffect(() => {
        //now_playing
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}
