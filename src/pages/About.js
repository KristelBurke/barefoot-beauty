import React from 'react'

function About() {
  return (
    <div className="bg-gradient-to-b from-pink to-white text-brown p-8 shadow-md">
    <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 overflow-hidden">
    <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block"></div>
    <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
      <div>
        <h3 className="mt-2 text-3xl font-bold leading-8 custom-font text-gold sm:text-4xl">Meet Emma</h3>
      </div>
    </div>
    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="relative lg:col-start-2 lg:row-start-1">

        <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
          <figure>
            <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
              <img className="rounded-lg object-cover object-center shadow-lg" src="/emma.jpg" alt="Emma" width="1184" height="1376" />
            </div>
            <figcaption className="mt-3 flex text-sm text-gray-500">
              <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1 8a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 018.07 3h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0016.07 6H17a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2V8zm13.5 3a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM10 14a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              <span className="ml-2">Photograph by Martin Simpson</span>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="p-4 mt-12 lg:mt-0">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
          <p className="text-lg text-brown">With over a decade of experience in pedicure services, Emma provides a touch of elegance and a commitment to foot health.</p>
        </div>
        <div className="mx-auto mt-5 text-brown lg:col-start-1 lg:row-start-1 lg:max-w-none">
          <p className="mt-4">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
          <p className="mt-4">Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.</p>
          <p className="mt-4">Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.</p>
          <p className="mt-4">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default About