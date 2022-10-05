import React from 'react'

const Location = ({location}) => {
  return (
    <article>
     <ul className='data_location'>
        <li>{`Name: ${location?.name}`}</li>
        <li>{`Type: ${location?.type}`}</li>
        <li>{`Dimension: ${location?.dimension}`}</li>
        <li>{`Population: ${location?.residents.length}`}</li>
     </ul>  
    </article>
  )
}

export default Location