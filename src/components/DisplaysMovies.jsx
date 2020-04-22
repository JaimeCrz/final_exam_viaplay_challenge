import React, {useState} from 'react'
import axios from 'axios'


const DisplaysMovies = () => {
  const [movies, setMovies] = useState('')
  let viaPlayMovies

  const getMovies = async => {
    let resposne = await axios.get('https://content.viaplay.se/pc-se/serier/samtliga'
    )

    setMovies(
      resposne._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    )
  }

  return (
    <>
    <div>{viaPlayMovies}</div>
    </>
  )
}

export default DisplaysMovies