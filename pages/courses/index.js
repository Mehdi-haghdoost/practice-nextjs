import React from 'react'
import Course from '@/Components/Course/Course'


function index() {

  const courses = [
    { id: 1, title: 'React', shortName: 'react' },
    { id: 2, title: 'Node', shortName: 'node' },
    { id: 3, title: 'Nextjs', shortName: 'next-js' },
    { id: 4, title: 'Pwa', shortName: 'pwa' },
    { id: 5, title: 'Canvas', shortName: 'canvas' },
  ]

 

  return (
    <>
      <h1>All pages : </h1>
      <hr />

      <ul>
        {courses.map((course) => (
          <Course {...course} />
        ))}

      </ul>
      <style jsx>{`
             li {
              color : blue;
              list-style-type: none;
              padding : 0.5rem 0 ;
             }
        `}</style>
    </>
  )
}

export default index