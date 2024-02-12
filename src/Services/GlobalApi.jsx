import axios from "axios";

const movieBaseUrl= "https://api.themoviedb.org/3"
const api_key = "fd023e6a0645335e2a0d10cdebcae027"

const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=fd023e6a0645335e2a0d10cdebcae027"

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieGenreId
}