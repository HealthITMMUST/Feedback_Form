import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const Form = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    "name": "",
    "position": "",
    "waiting_time": 0,
    "lab_courtesy": 0,
    "querry_response": 0,
    "lab_reliability": 0,
    "services_liked": "",
    "services_unliked": "",
    "suggestions": "",
    
  });
  const inputHandler = (e) => {
    //  e.preventDefault();
    const { value, name} = e.target;
    setFormData((state) => ({
      ...state,
      [name]:value
    }));
  }
   const handleSubmit = (e) => {
    //  e.preventDefault();

     const jsonData = JSON.stringify(formData);
     console.log(jsonData)
     axios.post('https://healthitfeed-production.up.railway.app/api/create/', jsonData, {
        headers: {
    'Content-Type': 'application/json' // Set the content type to JSON
  }
     }).then((response) => {
       console.log(response)
      }).catch((error) => {
        console.log(error)
      })
      // alert('succes')
  }
  
  return (
    <>
      <section className="bg-white dark:bg-gray-900">

      <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative grid items-center grid-cols-2 lg:grid-cols-3">
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center lg:mx-auto"
          >
       
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
            HEALTH TECH E-NNOVATORS
            </span>
          </a>
          <ul className="items-center hidden ml-auto space-x-8 lg:flex">
            <li>
              <Link
                to="/analytics"
                aria-label="Sign in"
                title="Sign in"
                className="font-medium dark:bg-white p-4 rounded text-black tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                View Analytics
              </Link>
            </li>
           
          </ul>
          <div className="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                         HEALTH TECH E-NNOVATORS
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                      <Link
                to="/analytics"
                aria-label="Sign in"
                title="Sign in"
                className="font-medium dark:bg-white p-4 rounded text-black tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                View Analytics
              </Link>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>



        
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Customer Satisfactory Survey Form
          </h2>
          <Link to="https://healthitfeed-production.up.railway.app/api/create/" className="mb-8 lg:mb-19 font-light text-center text-green-500 dark:text-green-400 sm:text-xl">
             To add a feedback click here
          </Link>

        
          {/* form goes here */}


          <form onSubmit={handleSubmit} action="#" className="space-y-8">
            <div>
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Facility Name  
              </label>
              <input
                onChange={inputHandler}
                name="name"
                value={formData.name}
                type="text"
                id="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="enter facility name"
                required
              />
            </div>
            <div>

                
<h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Tick where appropriate</h3>
<ul className="mb-8 w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="vue-checkbox" onChange={inputHandler} type="checkbox" name="position" value="staff" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Staff</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="react-checkbox" onChange={inputHandler} type="checkbox" name="position" value="Implemeting partner" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmor="react-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Implemeting partner</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center pl-3">
            <input id="angular-checkbox" onChange={inputHandler} type="checkbox" name="position" value="Others" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmor="angular-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Others</label>
        </div>
    </li>
    
</ul>


            <label
                htmlFor="subject"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Pick the most appropriate response from the options
              </label>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                Waiting Time
              </label>

<div className="flex mb-5">
    <div className="flex items-center mr-4">
                  <input 
                   onChange={inputHandler} type="radio" name="waiting_time" value={1}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Very Bad</label>
    </div>
    <div className="flex items-center mr-4">
        <input id="inline-2-radio" onChange={inputHandler} type="radio" name="waiting_time" value={2} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bad</label>
    </div>
    <div className="flex items-center mr-4">
        <input  id="inline-checked-radio" onChange={inputHandler} type="radio" name="waiting_time" value={3} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Good</label>
    </div>
    <div className="flex items-center">
        <input  id="inline-radio" onChange={inputHandler} type="radio" name="waiting_time" value={4} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Very Good</label>
    </div>
</div>

<label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                Courtesy of labarotary staff
              </label>

<div className="flex mb-5">
    <div className="flex items-center mr-4">
        <input id="inline-radio" onChange={inputHandler} type="radio" name="lab_courtesy" value={1} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Very Bad</label>
    </div>
    <div className="flex items-center mr-4">
        <input id="inline-2-radio" onChange={inputHandler} type="radio" name="lab_courtesy" value={2} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bad</label>
    </div>
    <div className="flex items-center mr-4">
        <input id="inline-checked-radio" onChange={inputHandler} type="radio" name="lab_courtesy" value={3} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Good</label>
    </div>
    <div className="flex items-center">
        <input  id="inline-radio" onChange={inputHandler} type="radio" name="lab_courtesy" value={4} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Very Good</label>
    </div>
</div>

<label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                Response to queries
              </label>

<div className="flex mb-5">
    <div className="flex items-center mr-4">
        <input id="inline-radio" onChange={inputHandler} type="radio" name="querry_response" value={1} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Very Bad</label>
    </div>
    <div className="flex items-center mr-4">
        <input id="inline-2-radio" onChange={inputHandler} type="radio" name="querry_response" value={2} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bad</label>
    </div>
    <div className="flex items-center mr-4">
        <input  id="inline-checked-radio" onChange={inputHandler} type="radio" name="querry_response" value={3} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Good</label>
    </div>
    <div className="flex items-center">
        <input  id="inline-radio" onChange={inputHandler} type="radio" name="querry_response" value={4} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Very Good</label>
    </div>
</div>

<label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
             Reliability of laboratory results
              </label>

<div className="flex mb-5">
    <div className="flex items-center mr-4">
        <input id="inline-radio" onChange={inputHandler} type="radio" name="lab_reliability" value={1} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Very Bad</label>
    </div>
    <div className="flex items-center mr-4">
        <input id="inline-2-radio" onChange={inputHandler} type="radio" name="lab_reliability"value={2} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bad</label>
    </div>
    <div className="flex items-center mr-4">
        <input id="inline-checked-radio" onChange={inputHandler} type="radio" name="lab_reliability" value={3} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Good</label>
    </div>
    <div className="flex items-center">
        <input  id="inline-radio" onChange={inputHandler} type="radio" name="lab_reliability" value={4} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Very Good</label>
    </div>
</div>

 
          
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                What do you like most about our services?
              </label>
              <input
                 onChange={inputHandler}
                name="services_liked"
                value={formData.services_liked}
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know what you like"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                 What do you like least about our services?
              </label>
              <input
                 onChange={inputHandler}
                name="services_unliked"
                value={formData.services_unliked}
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know what you don't like"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Suggestions For Improvement
              </label>
              <textarea
                 onChange={inputHandler}
                name="suggestions"
                value={formData.suggestions}
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-black text-sm font-medium text-center   rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
     
      </section>
      
    </>
  );
};

export default Form;
