import React,  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yak97n7', 'template_vh8bm7g', form.current, 'FtRbE6a9qUKE-bHVj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const showToastMessage = () => {
    toast.success("Your message is sent!", {
      className: "toast-message",
    });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ]
  
  return (
    <div className="relative bg-white text-brown min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-6">
        <div className="relative bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="relative overflow-hidden bg-gradient-to-b from-pink to-white px-4 py-10 sm:px-8 xl:p-12">
              <h3 className="mt-12 text-3xl font-bold custom-font text-gold sm:text-4xl">Contact us </h3>
              <p className="mt-6 max-w-3xl text-sm text-brown">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
              
              <dl className="mt-8 space-y-6">
                <dt><span className="sr-only">Phone number</span></dt>
                <dd className="flex text-sm text-brown">
                <svg className="h-6 w-6 flex-shrink-0 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                  <span className="ml-3">+372 1234 5678</span>
                </dd>
                <dt><span className="sr-only">Email</span></dt>
                <dd className="flex text-sm text-brown">
                <dt><span className="sr-only">Address</span></dt>
                <svg className="h-6 w-6 flex-shrink-0 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@barefootbeauty.com" className="ml-3 underline">info@barefootbeauty.com</a>
                </dd>
                <dt><span className="sr-only">Address</span></dt>
                <dd className="flex text-sm text-brown">
                <svg  className="w-6 h-6 flex-shrink-0 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                  <span className="ml-3">742 Evergreen Terrace Springfield, OR 12345</span>
                </dd>
              </dl>
            </div>

            <div className="px-6 pb-10 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-brown">Send us a message</h3>
              <form ref={form} onSubmit={sendEmail} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="text-sm font-medium text-brown flex justify-between">First name</label>
                  <div className="mt-1">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-gold focus:ring-gold"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="text-sm font-medium text-brown flex justify-between ">Last name</label>
                  <div className="mt-1">
                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-gold focus:ring-gold"/>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-brown flex justify-between ">Email</label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-gold focus:ring-gold"/>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="text-sm font-medium text-brown flex justify-between ">Phone</label>
                    <span id="phone-optional" className="text-sm text-gold">Optional</span>
                  </div>
                  <div className="mt-1">
                    <input type="text" name="phone" id="phone" autoComplete="tel" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-gold focus:ring-gold" aria-describedby="phone-optional"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="text-sm font-medium text-brown flex justify-between ">Subject</label>
                  <div className="mt-1">
                    <input type="text" name="subject" id="subject" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-gold focus:ring-gold"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="text-sm font-medium text-brown flex justify-between ">Message</label>
                    <span id="message-max" className="text-sm text-gold">Max. 500 characters</span>
                  </div>
                  <div className="mt-1">
                    <textarea id="message" name="message" rows="4" className="block w-full rounded-md border border-gold px-4 py-3 text-brown shadow-sm focus:border-gold focus:ring-gold" aria-describedby="message-max"></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button value="Send" type="submit" onClick={showToastMessage} className="button mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-gold via-white to-gold  px-6 py-3 text-sm font-medium text-brown shadow-sm sm:w-auto">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     <footer className="mb-6 mx-6 shadow-sm">
      <div className="absolute inset-x-0 bottom-20 bg-pink rounded-md mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-brown hover:text-gold">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}

        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-brown">
            &copy; 2024 Barefoot Beauty Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    <ToastContainer
      position="top-center"
      theme="light"
      className="toast-message"
      />
    </div>
  );
}

export default Contact;
