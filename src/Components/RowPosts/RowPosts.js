
import Youtube from 'react-youtube'
import React,{useEffect,useState} from 'react'
import './RowPosts.css'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import axios from '../axios'

const RowPosts = (props) => {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then((Response)=>{
            console.log(Response.data)
            setMovies(Response.data.results)
        })
     
    }, [])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    
    const handleMovie = (id)=>{
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }else{
          console.log('array empty')
        }
      })

    }

  return (
    
        <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>

          {movies.map((obj)=>

          <img onClick={()=> handleMovie(obj.id)} className={props.isSmall ?'smallposter':'poster'}   src={`${imageUrl+obj.backdrop_path}`} alt="image" />

          )}

        </div>
       {  urlId &&  <Youtube opts={opts} videoId={urlId.key} /> }
    </div>
  )
}

export default RowPosts