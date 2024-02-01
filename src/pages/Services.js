import React from 'react';
import { Link } from 'react-router-dom';
import servicesList from '../services.json';

function Services() {
  return (
    <div className="bg-gradient-to-b from-pink to-white p-8 mb-24 min-h-screen">
      <h2 className="m-12 text-3xl font-bold tracking-wide custom-font text-gold sm:text-4xl">Our Services</h2>
        <div className="mt-10 p-6 border border-gold shadow-lg rounded-md bg-gold">
          <h3 className="mb-4 text-2xl font-bold text-pink custom-font">Special Couples' Experience</h3>
          <p className="text-md mt-4 text-brown">
            Enjoy a shared moment of relaxation and pampering with our special service for couples. 
            Perfect for mother-daughter duos, girlfriends, or married couples - experience rejuvenating pedicures accompanied by delightful snacks and drinks in a cozy and intimate setting.
          </p>
          <ul className="mt-4 text-md text-pink custom-font list-disc list-inside">
            <li>Special snacks and drinks menu</li>
            <li>Comfortable and private atmosphere</li>
            <li>Tailored treatments for each pair</li>
          </ul>
          <p className="mt-4 text-brown">
            Contact us to schedule your special experience or to learn more about this exclusive service.
          </p>
        </div>
        <div className="my-16">
          <Link to="/contact">
            <button type="button" className="button inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-gold via-white to-gold px-6 py-3 text-sm font-medium text-brown shadow-md focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 sm:w-auto">
              Book now
            </button>
          </Link>
        </div>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map(service => (
          <div key={service.id} className="services-item p-4 border border-gold shadow-lg rounded-md bg-white">
            <h3 className="text-lg text-gold font-semibold">{service.name}</h3>
            <p className="text-brown text-sm">{service.description}</p>
            <p className="text-brown text-sm mt-4 rounded-md bg-gradient-to-r from-gold via-white to-gold px-3 py-1.5 inline-block">{service.price}</p>
            <p className="text-brown text-sm mt-4"><strong>Duration:</strong> {service.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
