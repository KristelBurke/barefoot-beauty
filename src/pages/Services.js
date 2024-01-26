import React from 'react';
import servicesList from '../services.json';

function Services() {
  return (
    <div className="bg-gradient-to-b from-pink to-white  p-8">
      <h2 className="text-4xl font-bold text-gold custom-font mb-12">Our Services</h2>
      <div className="mt-10 p-6 border border-gold shadow-lg rounded-lg bg-white">
        <h3 className="mb-4 text-xl font-bold text-gold">Special Couples' Experience</h3>
        <p className="text-md mt-4 text-brown">
          Enjoy a shared moment of relaxation and pampering with our special service for couples. 
          Perfect for mother-daughter duos, girlfriends, or married couples - experience rejuvenating pedicures accompanied by delightful snacks and drinks in a cozy and intimate setting.
        </p>
        <ul className="mt-4 text-md text-gold list-disc list-inside">
          <li>Special snacks and drinks menu</li>
          <li>Comfortable and private atmosphere</li>
          <li>Tailored treatments for each pair</li>
        </ul>
        <p className="mt-4 text-brown">
          Contact us to schedule your special experience or to learn more about this exclusive service.
        </p>
        <div className="mt-6">
            <button type="button" className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-gold via-white to-gold px-6 py-3 text-sm font-medium text-brown shadow-sm hover:bg-pink focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 sm:w-auto">
            Book now
        </button>
        </div>
      </div>
      <div className="mt-4 grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {servicesList.map(service => (
          <div key={service.id} className="p-4 border border-gold shadow-lg rounded-lg bg-white">
            <h3 className="text-lg text-gold font-semibold">{service.name}</h3>
            <p className="text-brown text-sm">{service.description}</p>
            <p className="text-brown text-sm mt-4 rounded-md bg-gradient-to-r from-gold via-white to-gold px-3 py-1.5 inline-block"><strong>Price:</strong> {service.price}</p>
            <p className="text-brown text-sm mt-4"><strong>Duration:</strong> {service.duration}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Services;