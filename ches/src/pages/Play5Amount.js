// import React from "react";
// import { Link } from 'react-router-dom';
// import { FaRobot, FaChessPawn } from 'react-icons/fa';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import styles from './Practice.module.css';

// const Play5Amount = () => {
//     const settings = {
//         dots: false,
//         infinite: false,
//         speed: 1000,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1000,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <div className={styles.container} >
//             <Slider {...settings} style={{ marginTop: '100px' }}>
//                 <div className={styles.card}  >
//                     <Link to="/practice/solo" style={{ textDecoration: 'none', backgroundColor: 'green' }} >
//                         {/* <FaChessPawn className={styles.icon} style={{ color: 'blue' }} /> */}
//                         <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />

//                     </Link>
//                     <h3>Amount ₹ 30</h3>
//                     <p>Deposit</p>
//                     <p>Lucknow</p>
//                     <p>Play with a Online </p>

//                 </div>
//                 <div className={styles.cards4} style={{ background: 'green' }}>
//                     <Link to="/practice/solo" style={{ textDecoration: 'none' }}>
//                         {/* <FaChessPawn className={styles.icon} style={{ color: 'blue' }} /> */}
//                         <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />

//                     </Link>
//                     <h3>Amount ₹ 50</h3>
//                     <p>Deposit</p>

//                     <p>Delhi</p>
//                     <p>Play with a Online </p>

//                 </div>



//                 <div className={styles.cards1}>
//                     <Link to="/practice/solo" style={{ textDecoration: 'none' }}>
//                         {/* <FaChessPawn className={styles.icon} style={{ color: 'blue' }} /> */}
//                         <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />

//                     </Link>
//                     <h3>Amount ₹ 100</h3>
//                     <p>Deposit</p>
//                     <p>Chanaini</p>

//                     <p>Play With a Online</p>
//                 </div>

//                 <div className={styles.cards4}>
//                     <Link to="/practice/solo" style={{ textDecoration: 'none' }}>
//                         {/* <FaChessPawn className={styles.icon} style={{ color: 'blue' }} /> */}
//                         <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />

//                     </Link>
//                     <h3>Amount ₹ 200</h3>
//                     <p>Deposit</p>
//                     <p>Mumbai</p>

//                     <p>Play With a Online</p>
//                 </div>

//                 <div className={styles.cards3}>
//                     <Link to="/practice/solo" style={{ textDecoration: 'none' }}>
//                         {/* <FaChessPawn className={styles.icon} style={{ color: 'blue' }} /> */}
//                         <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />

//                     </Link>
//                     <h3>Amount ₹ 500</h3>
//                     <p>Deposit</p>
//                     <p>Agra</p>

//                     <p>Play With a Online</p>
//                 </div>

//                 <div className={styles.cards4}>
//                     <Link to="/practice/solo" style={{ textDecoration: 'none' }}>
//                         {/* <FaChessPawn className={styles.icon} style={{ color: 'blue' }} /> */}
//                         <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />

//                     </Link>
//                     <h3>Amount ₹ 1000</h3>
//                     <p>Deposit</p>
//                     <p>Azamgarh

//                     </p>

//                     <p>Play With a Online</p>
//                 </div>
//                 <div className={styles.cards5}>
//                     <Link to="/practice/solo" style={{ textDecoration: 'none' }}>
//                         <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />
//                     </Link>
//                     <h3>Amount ₹ 1500</h3>
//                     <p>Deposit</p>
//                     <p>Allahabad</p>

//                     <p>Play With a Online</p>
//                 </div>
//                 {/* <div className={styles.cards6} style={{ textDecoration: 'none' }}>
//                     <Link to="/practice/solo" style={{ textDecoration: 'none' }}>
//                         <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />

//                     </Link>
//                     <h3>Amount ₹ 2000</h3>
//                     <p>Deposit</p>
//                     <p>Prayagraj</p>

//                     <p>Play With a Online</p>
//                 </div> */}
//             </Slider>
//         </div>
//     )
// };

// export default Play5Amount;

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import styles from './Practice.module.css';

const Play5Amount = () => {
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    const handleDepositSubmit = async (amount) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                amount: parseFloat(amount)
            })
        };

        try {
            const response = await fetch('http://localhost:7000/api/add-fond', requestOptions);
            const data = await response.json();
            if (response.ok) {
                if (data.statusCode === '201') {
                    console.log('Success:', data.message);
                    // Redirect to /practice/solo upon successful deposit
                    window.location.href = '/practice/solo';
                } else {
                    setError(data.message);
                }
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error adding fond:', error);
            setError('An error occurred while adding the fond.');
        }
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className={styles.container}>
            <Slider {...settings} style={{ marginTop: '100px' }}>
                <div className={styles.card} onClick={() => handleDepositSubmit(30)}>
                    <Link to="/practice/solo" style={{ textDecoration: 'none', backgroundColor: 'green' }}>
                        <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />
                    </Link>
                    <h3>Amount ₹ 30</h3>
                    <p>Deposit</p>
                    <p>Lucknow</p>
                    <p>Play with a Online </p>
                </div>
                <div className={styles.card} onClick={() => handleDepositSubmit(50)}>
                    <Link to="/practice/solo" style={{ textDecoration: 'none', backgroundColor: 'green' }}>
                        <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />
                    </Link>
                    <h3>Amount ₹ 50</h3>
                    <p>Deposit</p>
                    <p>Delhi</p>
                    <p>Play with a Online </p>
                </div>
                <div className={styles.card} onClick={() => handleDepositSubmit(100)}>
                    <Link to="/practice/solo" style={{ textDecoration: 'none', backgroundColor: 'green' }}>
                        <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />
                    </Link>
                    <h3>Amount ₹ 100</h3>
                    <p>Deposit</p>
                    <p>Chanaini</p>
                    <p>Play With a Online</p>
                </div>
                <div className={styles.card} onClick={() => handleDepositSubmit(200)}>
                    <Link to="/practice/solo" style={{ textDecoration: 'none', backgroundColor: 'green' }}>
                        <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />
                    </Link>
                    <h3>Amount ₹ 200</h3>
                    <p>Deposit</p>
                    <p>Chanaini</p>
                    <p>Play With a Online</p>
                </div>
                <div className={styles.card} onClick={() => handleDepositSubmit(500)}>
                    <Link to="/practice/solo" style={{ textDecoration: 'none', backgroundColor: 'green' }}>
                        <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />
                    </Link>
                    <h3>Amount ₹ 500</h3>
                    <p>Deposit</p>
                    <p>Chanaini</p>
                    <p>Play With a Online</p>
                </div>
                <div className={styles.card} onClick={() => handleDepositSubmit(1000)}>
                    <Link to="/practice/solo" style={{ textDecoration: 'none', backgroundColor: 'green' }}>
                        <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />
                    </Link>
                    <h3>Amount ₹ 1000</h3>
                    <p>Deposit</p>
                    <p>Chanaini</p>
                    <p>Play With a Online</p>
                </div>
                <div className={styles.card} onClick={() => handleDepositSubmit(1500)}>
                    <Link to="/practice/solo" style={{ textDecoration: 'none', backgroundColor: 'green' }}>
                        <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />
                    </Link>
                    <h3>Amount ₹ 1500</h3>
                    <p>Deposit</p>
                    <p>Chanaini</p>
                    <p>Play With a Online</p>
                </div>
                <div className={styles.card} onClick={() => handleDepositSubmit(2000)}>
                    <Link to="/practice/solo" style={{ textDecoration: 'none', backgroundColor: 'green' }}>
                        <img src="logo2.png" style={{ height: "300px", justifyItems: 'center' }} />
                    </Link>
                    <h3>Amount ₹ 2000</h3>
                    <p>Deposit</p>
                    <p>Chanaini</p>
                    <p>Play With a Online</p>
                </div>
                {/* Add other cards similarly for different amounts */}
            </Slider>
        </div>
    );
};

export default Play5Amount;


