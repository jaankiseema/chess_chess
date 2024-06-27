import React from 'react'
import Dashnavbar from './dashnavbar'
import styles from './dash.css';
import Dashboardmenu from './dashboardmenu'

const Userkyc = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-sm-2'> <Dashboardmenu /></div>
                    <div className='col-sm-10'>

                        <Dashnavbar />

                        <div class="row " style={{ background: '#f0f0ff' }} >
                            <div className='col-sm-3'></div>
                            <div className='col-sm-5 shadow-md p-3 mt-4 mb-5' style={{ background: 'white' }} >


                                <form>
                                    <div class="mb-3 ">
                                        <h3 className='text-black text-center'>Kyc Form </h3>
                                        {/* <label for="exampleInputEmail1" class="form-label">Email Id</label> */}
                                        <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Id' />
                                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                                    </div>
                                    <div class="mb-3">
                                        {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password' />
                                    </div>
                                    <div class="mb-3">
                                        {/* <label for="exampleInputPassword1" class="form-label">Account Holder Name</label> */}
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Account Holder Name' />
                                    </div>
                                    <div class="mb-3">
                                        {/* <label for="exampleInputPassword1" class="form-label">Account Number</label> */}
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Account Number' />
                                    </div>
                                    <div class="mb-3">
                                        {/* <label for="exampleInputPassword1" class="form-label">Confirm Account No.</label> */}
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Confirm Account No.' />
                                    </div>
                                    <div class="mb-3">
                                        {/* <label for="exampleInputPassword1" class="form-label">Ifsc Code</label> */}
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Ifsc Code' />
                                    </div>
                                    <div class="mb-3">
                                        {/* <label for="exampleInputPassword1" class="form-label">Bank Name</label> */}
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Bank Name' />
                                    </div>
                                    <div class="mb-3">
                                        {/* <label for="exampleInputPassword1" class="form-label">Bank Name</label> */}
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Branch' />
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Userkyc
