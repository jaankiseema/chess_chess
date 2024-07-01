import React, { useEffect, useState } from 'react'
import Dashboardmenu from './dashboardmenu'
import Dashnavbar from './dashnavbar'

const Settingdash2 = () => {
    // const [useCookies, setcookie, removecookie] = useCookies("");
    // const jump = useNavigate();

    // useEffect(() => {
    //     if (cookie["mycookie"] == null) {
    //         jump("/Registerdash")
    //     }
    //     loadrecord();
    // }, [])
    // const loadrecord = async () => {
    //     const re = await fetch("http://127.0.0.1:7000/project2", {
    //         method: "GET",
    //         headers: { "contend-type": "application/json" },


    //     });

    //     const data = await re.json();
    //     setedata(data);

    // }

    // const [edata, setedata] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='container-fluid'>
            <div className='row'>

                <div className='col-sm-2'> <Dashboardmenu /></div>
                <div className='col-sm-10'>

                    <Dashnavbar />


                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 py-3 px-16 ' style={{ background: 'green', marginTop: '20px ', padding: '20px', color: 'white' }}>

                            <div className=" ">
                                <button
                                    onClick={toggleModal}
                                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Toggle modal
                                </button>

                                {isModalOpen && (
                                    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                                        <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                    Sign in to our platform
                                                </h3>
                                                <button
                                                    type="button"
                                                    onClick={toggleModal}
                                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                    </svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            <div className="p-4 md:p-5">
                                                <form className="space-y-4" action="#">
                                                    <div>
                                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <div className="flex items-start">
                                                            <div className="flex items-center h-5">
                                                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                                            </div>
                                                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                                                        </div>
                                                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                                                    </div>
                                                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>



                        </div>
                    </div>

                    {/* {
                        edata.map((x) => {
                            return (
                                <tr>
                                    <td>{x.name}</td>

                                    <td>{x.email}</td>
                                    <td>{x.password}</td>

                                    <td><button onClick={() => { fsdelete(x._id) }} className='btn btn-danger mx-3'>Delelte</button>
                                        <button className='btn btn-warning dash-h'>Edite</button>


                                    </td>

                                </tr>
                            )
                        })
                    } */}
                </div>
            </div>
        </div>
    )
}

export default Settingdash2