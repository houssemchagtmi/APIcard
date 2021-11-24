import React from 'react'
import Cards from './Cards'

const CardListe = ({posts}) => {
  return (
    <div>
     
      {posts.map(elpost => <Cards elpost={elpost} />)}
      
      

    </div>
  )
}

export default CardListe
