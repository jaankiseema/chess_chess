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

    return (
        <div className='container-fluid'>
            <div className='row'>

                <div className='col-sm-2'> <Dashboardmenu /></div>
                <div className='col-sm-10'>

                    <Dashnavbar />


                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col-sm-10 py-3 px-16 ' style={{ background: 'green', marginTop: '20px ', padding: '20px', color: 'white' }}>All Transition</div>
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