import React, { useEffect, useState } from 'react';

const Addkyc = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [kycData, setKycData] = useState([]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const [formData, setFormData] = useState({
        email_id: '',
        password: '',
        account_holder_name: '',
        account_number: '',
        confirm_account_number: '',
        ifsc_code: '',
        bank_name: '',
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
    console.log(kycData);
    const validate = () => {
        let formErrors = {};
        if (!formData.email_id) formErrors.email_id = 'Email is required';
        if (!formData.password) formErrors.password = 'Password is required';
        if (!formData.account_holder_name) formErrors.account_holder_name = 'Account Holder Name is required';
        if (!formData.account_number) formErrors.account_number = 'Account Number is required';
        if (formData.account_number !== formData.confirm_account_number) formErrors.confirm_account_number = 'Account Numbers do not match';
        if (!formData.ifsc_code) formErrors.ifsc_code = 'IFSC Code is required';
        if (!formData.bank_name) formErrors.bank_name = 'Bank Name is required';
        if (!formData.branch) formErrors.branch = 'Branch is required';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            // Submit form
            //fetch api
            const data = await fetch("http://localhost:7000/api/kyc", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": localStorage.getItem("token") || "",
                },
                body: JSON.stringify(formData),
            });
            console.log('Form submitted successfully', data);
        } else {
            console.log('Form has errors', errors);
        }
    };

    const fetchData = async () => {
        const apiRes = await fetch("http://localhost:7000/api/all-kyc", {
            method: "GET",
            headers: {
                "authorization": localStorage.getItem("token") || "",
            }
        });

        console.log(apiRes);

        if (apiRes.status === 200) {
            const data = await apiRes.json();
            setKycData(data?.data);
            console.log("User logged in successfully");
        } else {
            console.log("Error logging in");
        }
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <div className="row mt-3">
                <div className='col-sm-12'>
                    <div className='bg-info p-3 text-white'>
                        <button
                            onClick={toggleModal}
                            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                        >
                            Add Kyc
                        </button>

                        {isModalOpen && (
                            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                                <div className="relative  w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between  md:p-5 border-b rounded-t dark:border-gray-600">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            <div className='text-dark'> UserKyc Form</div>
                                        </h3>
                                        <button
                                            type="button"
                                            onClick={toggleModal}
                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 1" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className='col-sm-12 shadow-md p-3 mt-1 mb-5' style={{ background: 'white' }}>
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">

                                                <input
                                                    type="email_id"
                                                    className={`form-control mt-2 ${errors.email_id ? 'is-invalid' : ''}`}
                                                    name="email_id"
                                                    placeholder='Email Id'
                                                    value={formData.email_id}
                                                    onChange={handleChange}
                                                />
                                                {errors.email_id && <div className="invalid-feedback">{errors.email_id}</div>}
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
                                                    className={`form-control ${errors.account_holder_name ? 'is-invalid' : ''}`}
                                                    name="account_holder_name"
                                                    placeholder='Account Holder Name'
                                                    value={formData.account_holder_name}
                                                    onChange={handleChange}
                                                />
                                                {errors.account_holder_name && <div className="invalid-feedback">{errors.account_holder_name}</div>}
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.account_number ? 'is-invalid' : ''}`}
                                                    name="account_number"
                                                    placeholder='Account Number'
                                                    value={formData.account_number}
                                                    onChange={handleChange}
                                                />
                                                {errors.account_number && <div className="invalid-feedback">{errors.account_number}</div>}
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.confirm_account_number ? 'is-invalid' : ''}`}
                                                    name="confirm_account_number"
                                                    placeholder='Confirm Account No.'
                                                    value={formData.confirm_account_number}
                                                    onChange={handleChange}
                                                />
                                                {errors.confirm_account_number && <div className="invalid-feedback">{errors.confirm_account_number}</div>}
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.ifsc_code ? 'is-invalid' : ''}`}
                                                    name="ifsc_code"
                                                    placeholder='Ifsc Code'
                                                    value={formData.ifsc_code}
                                                    onChange={handleChange}
                                                />
                                                {errors.ifsc_code && <div className="invalid-feedback">{errors.ifsc_code}</div>}
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.bank_name ? 'is-invalid' : ''}`}
                                                    name="bank_name"
                                                    placeholder='Bank Name'
                                                    value={formData.bank_name}
                                                    onChange={handleChange}
                                                />
                                                {errors.bank_name && <div className="invalid-feedback">{errors.bank_name}</div>}
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
                                            {/* <div className="mb-3 form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />

                                            </div> */}
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded my-6">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Password</th>
                                <th className="py-3 px-6 text-left">Account Holder Name</th>
                                <th className="py-3 px-6 text-left">Account Number</th>
                                <th className="py-3 px-6 text-left">Confirm Account Number</th>
                                <th className="py-3 px-6 text-left">IFSC Code</th>
                                <th className="py-3 px-6 text-left">Bank Name</th>
                                <th className="py-3 px-6 text-left">Branch</th>
                                <th className="py-3 px-6 text-left">User ID</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {kycData?.map((item) => (
                                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{item.id}</td>
                                    <td className="py-3 px-6 text-left">{item?.email_id}</td>
                                    <td className="py-3 px-6 text-left">{item?.password}</td>
                                    <td className="py-3 px-6 text-left">{item?.account_holder_name}</td>
                                    <td className="py-3 px-6 text-left">{item?.account_number}</td>
                                    <td className="py-3 px-6 text-left">{item?.confirm_account_number}</td>
                                    <td className="py-3 px-6 text-left">{item?.ifsc_code}</td>
                                    <td className="py-3 px-6 text-left">{item?.bank_name}</td>
                                    <td className="py-3 px-6 text-left">{item?.branch}</td>
                                    <td className="py-3 px-6 text-left">{item?.user_id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Addkyc;
