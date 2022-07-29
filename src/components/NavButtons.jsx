import React from 'react'

const NavButtons = () => {

    const cities = [
        {
            id:1,
            title: 'New York'
        },
        {
            id:2,
            title: 'London'
        },
        {
            id:3,
            title: 'Sydney'
        },
        {
            id:4,
            title: 'Toronto'
        },
        {
            id:5,
            title: 'Paris'
        },
    ]
    
  return (
    <div className='flex items-center justify-between my-6'>
        {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
    </div>
  )
}

export default NavButtons