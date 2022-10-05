import React from 'react'

const FilterList = ({list, setSearch}) => {

    const handleClick = (id) => (
      setSearch(id)
    )
    console.log(location)
  return (
    <ul className='search_options'>
        {
            list?.map((location)=>(
                <li onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
            ))
        }
    </ul>
  )
}

export default FilterList