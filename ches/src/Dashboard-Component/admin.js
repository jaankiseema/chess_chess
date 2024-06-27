import React from 'react'
import Dashboardmenu from './dashboardmenu'
import Dashnavbar from './dashnavbar'
import Adminmenu from './adminmenu'
import { Card } from 'antd'


const Admin = () => {
    return (
        <div>

            <div className='container-fluid'>


                <div className='row'>

                    <div className='col-sm-2'><Adminmenu /></div>
                    <div className='col-sm-10'>
                        <Dashnavbar />

                        <div className='row'>
                            <div className='col-sm-4'>
                                <Card className='shadow mt-5 ' style={{ background: 'green' }} >

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



                                </Card></div>
                            <div className='col-sm-4'>  <Card className='shadow  mt-5' style={{ background: '#cc4200' }} >

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



                            </Card></div>
                            <div className='col-sm-4'>  <Card className='shadow  mt-5' style={{ background: '#ff8040' }} >

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



                            </Card></div>
                        </div>


                        <div className='row'>
                            <div className='col-sm-4'>
                                <Card className='shadow mt-5 ' style={{ background: '	#FF00FF' }} >

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



                                </Card></div>
                            <div className='col-sm-4'>  <Card className='shadow  mt-5' style={{ background: '	#DAA520' }} >

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



                            </Card></div>
                            <div className='col-sm-4'>  <Card className='shadow  mt-5' style={{ background: 'red' }} >

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



                            </Card></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
