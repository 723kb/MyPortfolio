import React from 'react'

const WorkLinks = ({github, demo}) => {
  return (
    <div className="flex justify-center space-x-8 my-8">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-red-500 hover:underline font-semibold"
        >
          GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-red-500 hover:underline font-semibold"
        >
          Demo
        </a>
      </div>
  )
}

export default WorkLinks