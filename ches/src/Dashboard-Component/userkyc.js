import React, { useState } from 'react';
import Dashnavbar from './dashnavbar';
import styles from './dash.css';
import Dashboardmenu from './dashboardmenu';
import Addkyc from './addkyc';

const Userkyc = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        accountHolderName: '',
        accountNumber: '',
        confirmAccountNumber: '',
        ifscCode: '',
        bankName: '',
        branch: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.password) formErrors.password = 'Password is required';
        if (!formData.accountHolderName) formErrors.accountHolderName = 'Account Holder Name is required';
        if (!formData.accountNumber) formErrors.accountNumber = 'Account Number is required';
        if (formData.accountNumber !== formData.confirmAccountNumber) formErrors.confirmAccountNumber = 'Account Numbers do not match';
        if (!formData.ifscCode) formErrors.ifscCode = 'IFSC Code is required';
        if (!formData.bankName) formErrors.bankName = 'Bank Name is required';
        if (!formData.branch) formErrors.branch = 'Branch is required';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Submit form
            console.log('Form submitted successfully', formData);
        } else {
            console.log('Form has errors', errors);
        }
    };

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2'> <Dashboardmenu /></div>
                    <div className='col-sm-10'>
                        <Dashnavbar />
                        <div className="row" style={{ background: '#f0f0ff' }}>
                            <div className='col-sm-3'></div>
                            {/* <div className='col-sm-5 shadow-md p-3 mt-4 mb-5' style={{ background: 'white' }}>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <h3 className='text-black text-center'>Kyc Form</h3>
                                        <input
                                            type="email"
                                            className={`form-control mt-2 ${errors.email ? 'is-invalid' : ''}`}
                                            name="email"
                                            placeholder='Email Id'
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            name="password"
                                            placeholder='Password'
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.accountHolderName ? 'is-invalid' : ''}`}
                                            name="accountHolderName"
                                            placeholder='Account Holder Name'
                                            value={formData.accountHolderName}
                                            onChange={handleChange}
                                        />
                                        {errors.accountHolderName && <div className="invalid-feedback">{errors.accountHolderName}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.accountNumber ? 'is-invalid' : ''}`}
                                            name="accountNumber"
                                            placeholder='Account Number'
                                            value={formData.accountNumber}
                                            onChange={handleChange}
                                        />
                                        {errors.accountNumber && <div className="invalid-feedback">{errors.accountNumber}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.confirmAccountNumber ? 'is-invalid' : ''}`}
                                            name="confirmAccountNumber"
                                            placeholder='Confirm Account No.'
                                            value={formData.confirmAccountNumber}
                                            onChange={handleChange}
                                        />
                                        {errors.confirmAccountNumber && <div className="invalid-feedback">{errors.confirmAccountNumber}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.ifscCode ? 'is-invalid' : ''}`}
                                            name="ifscCode"
                                            placeholder='Ifsc Code'
                                            value={formData.ifscCode}
                                            onChange={handleChange}
                                        />
                                        {errors.ifscCode && <div className="invalid-feedback">{errors.ifscCode}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.bankName ? 'is-invalid' : ''}`}
                                            name="bankName"
                                            placeholder='Bank Name'
                                            value={formData.bankName}
                                            onChange={handleChange}
                                        />
                                        {errors.bankName && <div className="invalid-feedback">{errors.bankName}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className={`form-control ${errors.branch ? 'is-invalid' : ''}`}
                                            name="branch"
                                            placeholder='Branch'
                                            value={formData.branch}
                                            onChange={handleChange}
                                        />
                                        {errors.branch && <div className="invalid-feedback">{errors.branch}</div>}
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />

                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div> */}

                            <Addkyc />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userkyc;
