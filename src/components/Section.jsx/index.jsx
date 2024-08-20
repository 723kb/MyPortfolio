import React from 'react'

const Section = ({title, children}) => {
  return (
    <section className="w-screen md:w-2/3 p-4 mt-4 border-b">
        <h2 className="pb-2 text-lg font-semibold">{title}</h2>
        {children}
      </section>
  )
}

export default Section