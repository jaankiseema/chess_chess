import React from 'react'
import DashboardMenu from '../Dashboard-Component/dashboardmenu'
import Dashnavbar from '../Dashboard-Component/dashnavbar'

const Dasprofile = () => {
    return (
        <div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2'> <DashboardMenu />
                    </div>
                    <div className='col-sm-10'>
                        <Dashnavbar />
                        <div className="flex justify-center">
                            <div className="max-w-lg w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
                                <div className="flex justify-center">
                                    <img
                                        className="w-20 h-20 rounded-full object-cover"
                                        src="profile.jpg"  // Replace with your image source
                                        alt="Profile"
                                    />
                                </div>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Bio
                                        </label>
                                        <textarea
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                            placeholder="Tell us about yourself"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dasprofile
