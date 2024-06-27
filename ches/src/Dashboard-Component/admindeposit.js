import React from 'react'
import Adminmenu from './adminmenu'
import Dashnavbar from './dashnavbar'
import Adminnavigate from './adminnavigate'
import { Button } from 'react-bootstrap'
import Search from 'antd/es/transfer/search'

const Admindeposit = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <Adminmenu />
                </div>
                <div className='col-sm-10'>
                    <Adminnavigate />
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                        <div className='container-fluid'>
                            <div className='row'>

                                <div className='row'>
                                    <div className='col-sm-11'><h5>List Of Members</h5></div>

                                </div>
                                <h5 className='text-center mt-1'> <Search placeholder="input search text" style={{ width: 200 }} /></h5>
                            </div>
                        </div>

                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" title='g'>

                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                                <tr>

                                    <th scope="col" class="px-6 py-3">
                                        Banking
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Amount
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Account No
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        IFSC
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ID_DON
                                    </th>

                                    <th scope="col" class="px-6 py-3">
                                        Time
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Staus
                                    </th>

                                </tr>

                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">



                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                        Black
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop PC
                                    </td>




                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Admindeposit
