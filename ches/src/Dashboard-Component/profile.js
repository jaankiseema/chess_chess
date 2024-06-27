import React from 'react'
import Adminmenu from './adminmenu'
import Dashnavbar from './dashnavbar'
import AllUser from '../components/AllUser'
import Adminnavigate from './adminnavigate'
import { Button } from 'react-bootstrap'

const Profile = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <Adminmenu />
                </div>
                <div className='col-sm-10'>
                    <Adminnavigate />
                    {/* <AllUser /> */}
                    <div class="container mt-5">

                        <div class="card bg-dark text-white ">
                            <div class="card-body h-96">
                                <div class="row">
                                    <div class="col-sm-4 ">
                                        <img src="profil.png" alt="Profile Picture" class="rounded-circle w-50 mb-3" />

                                        My Profile
                                        <div>

                                            <input type="text" id="small-input" class="block w-full p-2 mt-3  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500  dark:bg-gray-700 dark:border-gray-600  dark:text-white  " placeholder='Enter Ypur Email' />
                                        </div>
                                        <p className='bg-warning p-2 rounded-sm mt-2'>verficaton code</p>



                                    </div>
                                    <div class="col-md-8">
                                        <h3 class="card-title">Gamer Tag: <span class="text-warning">PlayerOne</span></h3>
                                        <p class="card-text">Level: <span class="text-info">42</span></p>
                                        <p class="card-text">Achievements:</p>
                                        <ul class="list-unstyled">
                                            <li>🏆 <span class="text-success">Victory Royale</span></li>
                                            <li>🏆 <span class="text-success">Sharp Shooter</span></li>
                                            <li>🏆 <span class="text-success">Master Builder</span></li>
                                        </ul>
                                        <button class="bootstrap-btn">Follow</button>
                                        <button class="tailwind-btn mx-2">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>






                    </div>
                </div>

            </div>
        </div>


    )
}

export default Profile
