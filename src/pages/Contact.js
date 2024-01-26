import React from 'react';

function Contact() {
  return (
    <div className="bg-white text-brown p-8">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="relative overflow-hidden bg-pink px-6 py-10 sm:px-10 xl:p-12">
              <h3 className="text-xl font-medium text-gold">Contact for your special bookings</h3>
              <p className="mt-6 max-w-3xl text-base text-brown">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
              <dl className="mt-8 space-y-6">
                <dt><span className="sr-only">Phone number</span></dt>
                <dd className="flex text-base text-brown">
                <svg class="h-6 w-6 flex-shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
                  <span className="ml-3">+372 1234 5678</span>
                </dd>
                <dt><span className="sr-only">Email</span></dt>
                <dd className="flex text-base text-brown">
                <svg class="h-6 w-6 flex-shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
                  <span className="ml-3 underline">info@barefootbeauty.com</span>
                </dd>
              </dl>
            </div>

            <div className="px-6 pb-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-xl font-medium text-brown">Send us a message</h3>
              <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                {/* Input Fields */}
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-brown">First name</label>
                  <div className="mt-1">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-brown">Last name</label>
                  <div className="mt-1">
                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown">Email</label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-brown">Phone</label>
                    <span id="phone-optional" className="text-sm text-gold">Optional</span>
                  </div>
                  <div className="mt-1">
                    <input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-indigo-500 focus:ring-indigo-500" aria-describedby="phone-optional"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-brown">Subject</label>
                  <div className="mt-1">
                    <input type="text" name="subject" id="subject" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-indigo-500 focus:ring-indigo-500"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="block text-sm font-medium text-brown">Message</label>
                    <span id="message-max" className="text-sm text-gold">Max. 500 characters</span>
                  </div>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows="4" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-indigo-500 focus:ring-indigo-500" aria-describedby="message-max"></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-pink px-6 py-3 text-base font-medium text-brown shadow-sm hover:bg-gradient-to-r from-gold via-white to-gold focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 sm:w-auto">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
