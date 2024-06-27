import React from 'react'

const Dashnavbar = () => {
    return (
        <div>
            <div className='row  p-3' style={{ background: '#790000' }}>

                <div className='col-sm-10 text-white'>Dashboard</div>
                <div className='col-sm-2 flex text-white'>

                    <img src='notif.png' style={{ height: '25px' }} />
                    <span><img src='profil.png' className="mx-2" style={{ height: '25px' }} /></span>
                </div>

            </div>
        </div>
    )
}

export default Dashnavbar