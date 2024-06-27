import React from 'react'
import Adminmenu from './adminmenu'
import Dashnavbar from './dashnavbar'
import AllUser from '../components/AllUser'
import Adminnavigate from './adminnavigate'

const Userdata = () => {
    return (


        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <Adminmenu />
                </div>
                <div className='col-sm-10'>
                    <Adminnavigate />
                    <AllUser />
                </div>

            </div>
        </div>




    )
}

export default Userdata
