import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentInfo = ({url}) => {

    
    const [resident, setResident] = useState()
    useEffect(() => {
        axios.get(url)
        .then(res=>setResident(res.data))
        .catch(err=>console.log(err))
    }, [])
   
  return (
    <article className='resident_card'>
        <img src={resident?.image} alt="" />
        <ul className='resident_info'>
            <li>{`Name: ${resident?.name}`}</li>
            <li>{`Estatus: ${resident?.status}`}</li>
            <li>{`Origin: ${resident?.origin.name}`}</li>
            <li>{`Episodes where appear: ${resident?.episode.length}`}</li>
        </ul>

    </article>
  )
}

export default ResidentInfo