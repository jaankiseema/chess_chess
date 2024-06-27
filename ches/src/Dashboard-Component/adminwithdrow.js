import React from 'react'
import Adminmenu from './adminmenu'
import Dashnavbar from './dashnavbar'
import { Button, Col, Row } from 'react-bootstrap'
import Adminnavigate from './adminnavigate'
import { Flex } from 'antd'

const Adminwithdrow = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <Adminmenu />
                </div>
                <div className='col-sm-10'>
                    <Adminnavigate />
                    {/* <AllUser /> */}


                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                        <div className='container-fluid mt-4'>
                            <div className='row'>

                                <div className='row'>
                                    <div className='col-sm-11'><h5>Withdrowal Approve</h5></div>
                                    <div className='col-sm-1'><img src='cros.png ' style={{ height: '12px' }} /></div>
                                </div>
                            </div>
                        </div>

                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" title='g'>

                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                                <tr>

                                    <th scope="col" class="px-6 py-3">
                                        UPI N
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Banking
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Account Number
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        IFSC code
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Amount
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Time
                                    </th>
                                    <th scope="col" class="px-6 py-3 " >
                                        Staus
                                    </th>
                                    <th scope="col"  >
                                        <Flex wrap gap="small">
                                            <Button type="primary" style={{ background: 'red' }}>
                                                Reject
                                            </Button>

                                        </Flex>
                                    </th>
                                    <td >
                                        <Flex wrap gap="small">
                                            <Button type="primary" style={{ background: 'green' }}>
                                                Approve
                                            </Button>

                                        </Flex>
                                    </td>
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
                                    </td><td class="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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

export default Adminwithdrow
