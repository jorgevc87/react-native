import axios from 'axios'

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'e8d2557c7b597dead2c34941989195e0',
        language: 'es-ES'
    }
})

export default movieDB













