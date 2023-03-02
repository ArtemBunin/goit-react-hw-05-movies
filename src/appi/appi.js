import axios from "axios";
axios.defaults.baseURL='https://api.themoviedb.org/3/'
const key='b934e9743eee394e4eeac4052d9d4c4f'
export async function getTrending (){

    const response = await axios.get(`trending/movie/day?api_key=${key}`);
  
    return response.data}
    
    export async function getMovie(query){
        const response =await axios.get(`search/movie?api_key=${key}&query=${query}`)
        return response.data
    }
    export async function getMovieDetails(id){
        const response =await axios.get(`movie/${id}?api_key=${key}`)
        return response.data
    }
    export async function getMovieCredits(id){
        const response =await axios.get(`movie/${id}/credits?api_key=${key}`)
        return response.data
        
    }
    export async function getMovieRewiew(id){
        const response =await axios.get(`movie/${id}/reviews?api_key=${key}`)
        return response.data
    }