import axios from 'axios'
import * as AxiosLogger from 'axios-logger'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'e8d2557c7b597dead2c34941989195e0',
        language: 'es-ES'
    }
})



//Se agrega el logguer (Libreria axios-logger)
//Requests
movieDB.interceptors.request.use((request) => {
    return AxiosLogger.requestLogger(request, {
        prefixText: 'PeliculasApp',
        dateFormat: 'HH:MM:ss',
        headers: true
    })
}, AxiosLogger.errorLogger)

//Responses
movieDB.interceptors.response.use((response) => {
    return AxiosLogger.responseLogger(response)
}, AxiosLogger.errorLogger)


export default movieDB