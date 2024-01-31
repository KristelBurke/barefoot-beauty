import React from 'react';
import { Link} from 'react-router-dom';

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
                  <img className="rounded-md object-cover object-center shadow-lg sm:w-[20rem] md:w-[30rem] lg:w-[37rem] max-w-none" src="/emma.jpg" alt="Emma" width="1184" height="1376" />
                </div>
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
              <div className="mt-12">
                <Link to="/services">
                  <button type="button" className="button inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-gold via-white to-gold px-6 py-3 text-sm font-medium text-brown shadow-md focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 sm:w-auto">
                      Services
                  </button>
                </Link>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
