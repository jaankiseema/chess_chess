import React from 'react'
import Dashboardmenu from './dashboardmenu'
import { Card, Col, Row } from 'react-bootstrap'
import Dashnavbar from './dashnavbar'

const Dashboardheader = () => {

    return (

        <div className='container-fluid ' >
            <div className='row'>
                <div className='col-sm-2 ' ><Dashboardmenu /></div>
                <div className='col-sm-10' >

                    <Dashnavbar />
                    <br /><br></br>

                    <div className='row mt-5'>
                        <div className='col-sm-4'>

                            <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#12bcb8' }} >

                                <div
                                    className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
                                    style={{ backgroundImage: `url(/img/banner.png)` }}
                                >
                                    <div className="dark:!border-navy-700 absolute -top-12 flex p-1 h-[83px] w-[83px] items-center justify-center rounded-full border-[4px] border-green ">
                                        <img
                                            className="h-full w-full rounded-full"
                                            src="user1.png"
                                            alt=""
                                        />
                                    </div>
                                    <span className='flex mt-5'>
                                        <span className='text-white'>Wallet Balance</span>
                                        <span className='mx-4 text-white'>0</span>
                                    </span>
                                </div>



                            </Card>
                        </div>
                        <div className='col-sm-4'>
                            <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#790000' }} >

                                <div
                                    className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
                                    style={{ backgroundImage: `url(/img/banner.png)` }}
                                >
                                    <div className="dark:!border-navy-700 absolute -top-12 flex h-[80px] w-[80px] items-center justify-center rounded-full border-[4px] border-green ">
                                        <img
                                            className="h-full w-full rounded-full"
                                            src="budget.png"
                                            alt=""
                                        />
                                    </div>
                                    <span className='flex mt-5'>
                                        <span className='text-white'>Total Income</span>
                                        <span className='mx-4 text-white'>0</span>
                                    </span>
                                </div>



                            </Card>
                        </div>
                        <div className='col-sm-4'>

                            <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#6C0CAC' }} >

                                <div
                                    className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
                                    style={{ backgroundImage: `url(/img/banner.png)` }}
                                >
                                    <div className="dark:!border-navy-700 absolute -top-12 flex h-[80px] w-[80px] items-center justify-center rounded-full border-[4px] border-green ">
                                        <img
                                            className="h-full w-full rounded-full"
                                            src="h.png"
                                            alt=""
                                        />
                                    </div>
                                    <span className='flex mt-5'>
                                        <span className='text-white'>Today Income</span>
                                        <span className='mx-4 text-white'>0</span>
                                    </span>
                                </div>



                            </Card>
                        </div>

                    </div>
                    <br></br><br></br>
                    <div className='row mt-5'>
                        <div className='col-sm-4'>

                            <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#cc4200' }} >

                                <div
                                    className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
                                    style={{ backgroundImage: `url(/img/banner.png)` }}
                                >
                                    <div className="dark:!border-navy-700 absolute -top-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-green ">
                                        <img
                                            className="h-full w-full rounded-full"
                                            src="ih.png"
                                            alt=""
                                            style={{ height: '60px' }}
                                        />
                                    </div>
                                    <span className='flex mt-5'>
                                        <span className='text-white'>Withdrawal request</span>
                                        <span className='mx-4 text-white'>0</span>
                                    </span>
                                </div>



                            </Card>
                        </div>
                        <div className='col-sm-4'>

                            <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#ff00ff' }} >

                                <div
                                    className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
                                    style={{ backgroundImage: `url(/img/banner.png)` }}
                                >
                                    <div className="dark:!border-navy-700 absolute -top-12 flex h-[85px] w-[85px] items-center justify-center rounded-full border-[4px] border-green ">
                                        <img
                                            className="h-full w-full rounded-full"
                                            src="totl.png"
                                            alt=""
                                            style={{ height: '60px' }}
                                        />
                                    </div>
                                    <span className='flex mt-5'>
                                        <span className='text-white'>Total Withdrawal </span>
                                        <span className='mx-4 text-white'>0</span>
                                    </span>
                                </div>



                            </Card>

                        </div>
                        <div className='col-sm-4'>

                            <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#99004c' }} >

                                <div
                                    className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
                                    style={{ backgroundImage: `url(/img/banner.png)` }}
                                >
                                    <div className="dark:!border-navy-700 absolute -top-12 flex h-[80px] w-[80px] items-center justify-center rounded-full border-[4px] border-green ">
                                        <img
                                            className="h-full w-full rounded-full"
                                            src="h.png"
                                            alt=""
                                            style={{ height: '60px' }}
                                        />
                                    </div>
                                    <span className='flex mt-5'>
                                        <span className='text-white'>Withdrawal request</span>
                                        <span className='mx-4 text-white'>0</span>
                                    </span>
                                </div>



                            </Card>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Dashboardheader