import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { MovieFull } from '../interfaces/movieInterface'
import { Cast, CreditResponse } from "../interfaces/creditsInterface";

//declarando la estructura de como manejaremos la respuesta del endpoint de detalles
interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {

    //Se inicializa la respuesta con los valores inciales por defecto
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })

    const getMovieDetails = async () => {

        //Promises
        const movieDetailPromise = movieDB.get<MovieFull>("/" + movieId)
        const castPromise = movieDB.get<CreditResponse>("/" + movieId + "/credits")

        const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailPromise, castPromise])

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...state
    }
}