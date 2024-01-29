import React from 'react'

function Portfolio() {
  const people = [
    {
      title: 'Pedicure',
      imageUrl:
        'https://unsplash.com/photos/9HzcOiNeSgA/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA2NTMwNTQyfA&force=true',
    },
    {
      title: 'Pedicure',
      imageUrl:
        'https://unsplash.com/photos/INE0dVLh3v4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NjF8fHBlZGljdXJlfGVufDB8fHx8MTcwNjUzMTAwOHwy&force=true',
    },

    {
      title: 'Pedicure',
      imageUrl:
        'https://images.pexels.com/photos/310278/pexels-photo-310278.jpeg?cs=srgb&dl=pexels-lumn-310278.jpg&fm=jpg&_gl=1*14oprln*_ga*MTM3ODMyNTE3OC4xNzA2NTMxNTI2*_ga_8JE65Q40S6*MTcwNjUzMTUyNS4yLjEuMTcwNjUzMTUyNi4wLjAuMA..',
    },
    {
      title: 'Pedicure',
      imageUrl:
        'https://unsplash.com/photos/oy8LFbcB8hQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NjB8fHBlZGljdXJlfGVufDB8fHx8MTcwNjUzMDk5Nnwy&force=true',
    },
    {
      title: 'Pedicure',
      imageUrl:
        'https://unsplash.com/photos/FsSg3fURJMI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mzh8fHBlZGljdXJlcyUyMHRvZXN8ZW58MHx8fHwxNzA2NTMxMzgwfDI&force=true',
    },
    {
      title: 'Pedicure',
      imageUrl:
        'https://unsplash.com/photos/qeuJczNo54w/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA2NTMwNDkzfA&force=true',
    },
    {
      title: 'Pedicure',
      imageUrl:
        'https://images.pexels.com/photos/6663577/pexels-photo-6663577.jpeg?cs=srgb&dl=pexels-arina-krasnikova-6663577.jpg&fm=jpg&_gl=1*4swl7q*_ga*MTM3ODMyNTE3OC4xNzA2NTMxNTI2*_ga_8JE65Q40S6*MTcwNjUzMTUyNS4yLjEuMTcwNjUzMTUyNi4wLjAuMA..',
    },
    {
      title: 'Pedicure',
      imageUrl:
        'https://images.pexels.com/photos/17056222/pexels-photo-17056222.jpeg?cs=srgb&dl=pexels-andrea-mosti-17056222.jpg&fm=jpg&_gl=1*wl95mk*_ga*MTM3ODMyNTE3OC4xNzA2NTMxNTI2*_ga_8JE65Q40S6*MTcwNjUzMTUyNS4yLjEuMTcwNjUzMTUyNi4wLjAuMA..',
    },
    {
      title: 'Pedicure',
      imageUrl:
        'https://images.pexels.com/photos/7755549/pexels-photo-7755549.jpeg?cs=srgb&dl=pexels-rdne-stock-project-7755549.jpg&fm=jpg&_gl=1*1e5ucrx*_ga*MTM3ODMyNTE3OC4xNzA2NTMxNTI2*_ga_8JE65Q40S6*MTcwNjUzMTUyNS4yLjEuMTcwNjUzMTc1My4wLjAuMA..',
    },
    
  ]

  return (
    <div className="bg-gradient-to-b from-pink to-white p-8">
      <h2 className="text-4xl font-bold text-gold custom-font">Portfolio</h2>
      <div className="bg-tramsparent py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-lg object-cover" src={person.imageUrl} alt="" />
              <p className="text-sm text-start ml-2 leading-7 text-brown">{person.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Portfolio