import React from 'react';
import { Link} from 'react-router-dom';

function About() {
  return (
    <div className="bg-gradient-to-b from-pink to-white text-brown p-8 shadow-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="lg:pr-4">
        <div className="relative overflow-hidden rounded-lg px-6 pb-9 pt-96 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
          <img className="absolute inset-0 h-full w-full object-cover " src="emma.jpg" alt=""/>
        </div>
      </div>
      
      <div>
        <div className="text-base leading-7 lg:max-w-lg">
          <h1 className="mt-2 text-3xl font-bold custom-font text-gold sm:text-4xl">Meet Emma</h1>
          <div className="max-w-xl text-brown">
            <p className="mt-8 text-lg text-brown">With over a decade of experience in pedicure services, Emma provides a touch of elegance and a commitment to foot health.</p>
            <p className="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
            <p className="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
          </div>
        </div>

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
  );
}

export default About;
