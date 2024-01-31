import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="overflow-hidden bg-gradient-to-br from-pink to white min-h-screen py-48">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="custom-font italic text-5xl font-bold tracking-wider text-gold sm:text-7xl">Feel Elegant</h2>
            <p className="mt-10 text-xl text-gold custom-font">Good moments deserve beautiful feet.</p>
            <p className="text-xl text-gold custom-font">There’s always a good day for a pedicure.</p>
            <p className="mt-10 text-base leading-7 text-brown">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.</p>
            <div className="mt-20 flex">
            <Link to="/contact">
            <button type="submit" className="button mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-gold via-white to-gold px-6 py-3 text-sm font-medium text-brown shadow-md  focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 sm:w-auto">
                Book appointment
                </button>
          </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img src="/hero_image.png" alt="" className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;