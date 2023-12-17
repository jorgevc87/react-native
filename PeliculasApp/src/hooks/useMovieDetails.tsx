import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { MovieFull } from '../interfaces/movieInterface'
import { CreditResponse } from "../interfaces/creditsInterface";

interface MovieDetails {
    isLoading: boolean;
    movieFull: MovieFull;
    cas: any[]
}

export const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>()

    const getMovieDetails = async () => {

        //Promises
        const movieDetailPromise = movieDB.get<MovieFull>("/${movieId}")
        const castPromise = movieDB.get<CreditResponse>('/${movieId}/credits')

        const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDetailPromise, castPromise])

    }

}