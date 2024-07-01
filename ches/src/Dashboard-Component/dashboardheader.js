// import React from 'react'
// import Dashboardmenu from './dashboardmenu'
// import { Card, Col, Row } from 'react-bootstrap'
// import Dashnavbar from './dashnavbar'

// const Dashboardheader = () => {

//     return (

//         <div className='container-fluid ' >
//             <div className='row'>
//                 <div className='col-sm-2 ' ><Dashboardmenu /></div>
//                 <div className='col-sm-10' >

//                     <Dashnavbar />
//                     <br /><br></br>

//                     <div className='row mt-5'>
//                         <div className='col-sm-4'>

//                             <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#12bcb8' }} >

//                                 <div
//                                     className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
//                                     style={{ backgroundImage: `url(/img/banner.png)` }}
//                                 >
//                                     <div className="dark:!border-navy-700 absolute -top-12 flex p-1 h-[83px] w-[83px] items-center justify-center rounded-full border-[4px] border-green ">
//                                         <img
//                                             className="h-full w-full rounded-full"
//                                             src="user1.png"
//                                             alt=""
//                                         />
//                                     </div>
//                                     <span className='flex mt-5'>
//                                         <span className='text-white'>Wallet Balance</span>
//                                         <span className='mx-4 text-white'>0</span>
//                                     </span>
//                                 </div>



//                             </Card>
//                         </div>
//                         <div className='col-sm-4'>
//                             <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#790000' }} >

//                                 <div
//                                     className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
//                                     style={{ backgroundImage: `url(/img/banner.png)` }}
//                                 >
//                                     <div className="dark:!border-navy-700 absolute -top-12 flex h-[80px] w-[80px] items-center justify-center rounded-full border-[4px] border-green ">
//                                         <img
//                                             className="h-full w-full rounded-full"
//                                             src="budget.png"
//                                             alt=""
//                                         />
//                                     </div>
//                                     <span className='flex mt-5'>
//                                         <span className='text-white'>Total Income</span>
//                                         <span className='mx-4 text-white'>0</span>
//                                     </span>
//                                 </div>



//                             </Card>
//                         </div>
//                         <div className='col-sm-4'>

//                             <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#6C0CAC' }} >

//                                 <div
//                                     className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
//                                     style={{ backgroundImage: `url(/img/banner.png)` }}
//                                 >
//                                     <div className="dark:!border-navy-700 absolute -top-12 flex h-[80px] w-[80px] items-center justify-center rounded-full border-[4px] border-green ">
//                                         <img
//                                             className="h-full w-full rounded-full"
//                                             src="h.png"
//                                             alt=""
//                                         />
//                                     </div>
//                                     <span className='flex mt-5'>
//                                         <span className='text-white'>Today Income</span>
//                                         <span className='mx-4 text-white'>0</span>
//                                     </span>
//                                 </div>



//                             </Card>
//                         </div>

//                     </div>
//                     <br></br><br></br>
//                     <div className='row mt-5'>
//                         <div className='col-sm-4'>

//                             <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#cc4200' }} >

//                                 <div
//                                     className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
//                                     style={{ backgroundImage: `url(/img/banner.png)` }}
//                                 >
//                                     <div className="dark:!border-navy-700 absolute -top-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-green ">
//                                         <img
//                                             className="h-full w-full rounded-full"
//                                             src="ih.png"
//                                             alt=""
//                                             style={{ height: '60px' }}
//                                         />
//                                     </div>
//                                     <span className='flex mt-5'>
//                                         <span className='text-white'>Withdrawal request</span>
//                                         <span className='mx-4 text-white'>0</span>
//                                     </span>
//                                 </div>



//                             </Card>
//                         </div>
//                         <div className='col-sm-4'>

//                             <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#ff00ff' }} >

//                                 <div
//                                     className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
//                                     style={{ backgroundImage: `url(/img/banner.png)` }}
//                                 >
//                                     <div className="dark:!border-navy-700 absolute -top-12 flex h-[85px] w-[85px] items-center justify-center rounded-full border-[4px] border-green ">
//                                         <img
//                                             className="h-full w-full rounded-full"
//                                             src="totl.png"
//                                             alt=""
//                                             style={{ height: '60px' }}
//                                         />
//                                     </div>
//                                     <span className='flex mt-5'>
//                                         <span className='text-white'>Total Withdrawal </span>
//                                         <span className='mx-4 text-white'>0</span>
//                                     </span>
//                                 </div>



//                             </Card>

//                         </div>
//                         <div className='col-sm-4'>

//                             <Card extra={"items-center flex-col w-full h-full p-[16px] bg-cover"} className='shadow ' style={{ background: '#99004c' }} >

//                                 <div
//                                     className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
//                                     style={{ backgroundImage: `url(/img/banner.png)` }}
//                                 >
//                                     <div className="dark:!border-navy-700 absolute -top-12 flex h-[80px] w-[80px] items-center justify-center rounded-full border-[4px] border-green ">
//                                         <img
//                                             className="h-full w-full rounded-full"
//                                             src="h.png"
//                                             alt=""
//                                             style={{ height: '60px' }}
//                                         />
//                                     </div>
//                                     <span className='flex mt-5'>
//                                         <span className='text-white'>Withdrawal request</span>
//                                         <span className='mx-4 text-white'>0</span>
//                                     </span>
//                                 </div>



//                             </Card>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </div>

//     )
// }

// export default Dashboardheader

import React, { useState, useEffect } from 'react';
import Dashboardmenu from './dashboardmenu';
import { Card } from 'react-bootstrap';
import Dashnavbar from './dashnavbar';

const Dashboardheader = () => {
    const [userData, setUserData] = useState({
        remaining_fund: 0,
        total_withdrawal_today: 0,
        total_request_fund: 0
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const token = localStorage.getItem('token');
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        try {
            const response = await fetch('http://localhost:7000/api/user-transation-details', requestOptions);
            const data = await response.json();

            if (response.ok) {
                setUserData({
                    remaining_fund: data.data.remaning_fond,
                    total_withdrawal_today: data.data.total_Withdrawal_today,
                    total_request_fund: data.data.total_request_fond
                });
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError('An error occurred while fetching user data.');
        }
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'><Dashboardmenu /></div>
                <div className='col-sm-10'>
                    <Dashnavbar />
                    <br /><br />

                    <div className='row mt-5'>
                    <h2 style={{ color: 'black' }}>{userData.user_name}</h2>
                    <h2>{userData.email}</h2>
                        <div className='col-sm-4'>
                            <Card className='shadow' style={{ background: '#12bcb8', color: 'white' }}>
                                <div className='p-3'>
                                    <div className='text-center'>
                                        <h4>Wallet Balance</h4>
                                        <h2>{userData.remaining_fund} Rs.</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='col-sm-4'>
                            <Card className='shadow' style={{ background: '#790000', color: 'white' }}>
                                <div className='p-3'>
                                    <div className='text-center'>
                                        <h4>total_request_fond</h4>
                                        <h2>{userData.total_request_fund} Rs.</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='col-sm-4'>
                            <Card className='shadow' style={{ background: '#6C0CAC', color: 'white' }}>
                                <div className='p-3'>
                                    <div className='text-center'>
                                        <h4>total_Withdrawal_today</h4>
                                        <h2>{userData.total_withdrawal_today} Rs.</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboardheader;
