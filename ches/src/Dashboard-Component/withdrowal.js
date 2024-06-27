import React from 'react'
import Dashboardmenu from './dashboardmenu'
import Dashnavbar from './dashnavbar'

const Withdrowal = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-sm-2'> <Dashboardmenu /></div>
                    <div className='col-sm-10'>

                        <Dashnavbar />
                        {/* <div className='container-fluid ' style={{ background: '#530000' }}> */}

                        <div className='row ' style={{ background: '#f0f0ff', minHeight: '637px' }}>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-8 ' >
                                <div class="w-full max-w-lg mt-40">
                                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        <h4 className='text-center'> Withdrawal</h4>

                                        <div class="mb-6">
                                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                                Amount
                                            </label>

                                            <input type="" class="form-control" id="inputEmail4" placeholder="****************" />

                                        </div>
                                        <div class="flex items-center justify-between">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                Pay
                                            </button>

                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>




                        {/* </div> */}
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Withdrowal
