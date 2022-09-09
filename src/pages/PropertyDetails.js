import React from 'react';
import {Link, useParams} from "react-router-dom";
import {housesData} from "../data";
import {BiArea, BiBath, BiBed} from "react-icons/bi";

const PropertyDetails = () => {
    const {id} = useParams()
    const property = housesData.find((house) => {
        return house.id === parseInt(id)
    })

    return (
        <div className='container mx-auto min-h-[800px mb-14'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                <div>
                    <h2 className='text-2xl font-semibold'>{property.name}</h2>
                    <h3 className='text-lg mb-4'>{property.address}</h3>
                </div>
                <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
                    <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
                        {property.type}
                    </div>
                    <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
                        {property.country}
                    </div>
                </div>
                <div className='text-3xl font-semibold text-violet-600'>
                    $ {property.price}
                </div>
            </div>
            <div className='flex flex-col items-start gap-8 lg:flex-row'>
                <div className='max-w-[768px]'>
                    <div className='mb-8'>
                        <img src={property.imageLg} alt=""/>
                    </div>
                    <div className='flex gap-x-6 text-violet-700 mb-6'>
                        <div className='flex gap-x-2 items-center'>
                            <BiBed className='text-2xl'/>
                            <div className="text-lg font-medium">{property.bedrooms}</div>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <BiBath className='text-2xl'/>
                            <div className="text-lg font-medium">{property.bathrooms}</div>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <BiArea className='text-2xl'/>
                            <div className="text-lg font-medium">{property.surface}</div>
                        </div>
                    </div>
                    <p>{property.description}</p>
                </div>
                <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
                    <div className='flex items-center gap-x-4 mb-8'>
                        <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                            <img src={property.agent.image} alt=""/>
                        </div>
                        <div>
                            <div className='font-bold text-lg'>{property.agent.name}</div>
                            <Link to='' className='text-violet-700 text-sm'>
                                View Listings
                            </Link>
                        </div>
                    </div>
                    <form className='flex  flex-col gap-y-4'>
                        <input
                            type="text"
                            placeholder='Name*'
                            className='border border-gray-300 focus:border-violet-700 rounde w-full px-4 h-14 text-sm outline-none'
                        />
                        <input
                            type="email"
                            placeholder='Email'
                            className='border border-gray-300 focus:border-violet-700 rounde w-full px-4 h-14 text-sm outline-none'
                        />
                        <input
                            type="tel"
                            placeholder='Phone'
                            className='border border-gray-300 focus:border-violet-700 rounde w-full px-4 h-14 text-sm outline-none'
                        />
                        <textarea
                            type='text'
                            placeholder='Message*'
                            defaultValue='Hello, I am interested in [Modern apertment]'
                            className='border border-gray-300 focus:border-violet-700 rounde w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
                        />
                        <div className='flex gap-x-2'>
                            <button type='submit'
                                    className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
                            >
                                Send message
                            </button>
                            <button className='border border-violet-700 text-violet-700 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition-all'>
                                Call
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
};

export default PropertyDetails;
