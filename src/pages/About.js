import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-pink to-white text-brown p-8 shadow-md min-h-screen">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 mx-auto lg:max-w-none lg:grid-cols-2 sm:gap-y-24 lg:mx-0">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-lg shadow-2xl px-6 pb-9 pt-[500px] sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img className="absolute inset-0 object-cover w-full h-full" src="emma.jpg" alt="Emma" />
            </div>
          </div>
          
          <div>
            <div className="text-base leading-7 lg:max-w-lg">
              <h1 className="mb-24 text-3xl font-bold custom-font text-gold sm:text-4xl">Meet Emma</h1>
              <div className="max-w-xl text-brown">
                <p className="mt-12 text-lg">With over a decade of experience in pedicure services, Emma provides a touch of elegance and a commitment to foot health.</p>
                <p className="mt-12">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
                <p className="mt-12">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
              </div>
            </div>

            <div className="mt-12">
              <Link to="/services">
                <button type="button" className="button inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-brown bg-gradient-to-r from-gold via-white to-gold rounded-md border border-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 sm:w-auto">
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

