import React from 'react'
import Link from 'next/link'


function Course({title,shortName}) {
    
  return (
    <li className='alert alert-danger'>
            <Link
             href={{
              pathname : '/courses/[shortName]',
              query : {
                shortName : shortName,
              },
             }}>
              
              
              {title}
             
             </Link>
          </li>
  )
}

export default Course