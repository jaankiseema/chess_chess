// import React, { useRef, useState } from "react";
// // import { auth } from '../../../firebase';
// import { Button, Container, Form } from "react-bootstrap";
// import { Link, Navigate, redirect } from "react-router-dom";
// // import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import Toastr from "../../../components/Toastr";
// import Dashboardheader from "../../../Dashboard-Component/dashboardheader";
// import { Flex } from "antd";

// const LogInForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogIn = async (e) => {
//     e.preventDefault();

//     // const apiRes = await fetch('http://localhost:8081/auths/signin', {
//     const apiRes = await fetch("http://localhost:5000/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//     });

//     console.log(apiRes);

//     if (apiRes.status === 201) {
//       console.log("hellow world");
//       return <Navigate to="/" replace />;
//     } else {
//     }

//     // if (apiRes) {
//     //   const res = await apiRes.json()
//     //   window.location.href = '/Dashboardheader'
//     //   console.log("Api response login -->", res);
//     // }

//     // if (email == "seema@gmail.com" && passwo rd == "1234") {
//     //   window.location.href = '/Dashboardheader'
//     // }
//   };

//   return (
//     <>
//       <Container
//         fluid
//         className="d-flex align-items-center justify-content-center"
//         style={{ minHeight: "100vh", backgroundColor: "#80060c" }}
//       >
//         <Form
//           onSubmit={handleLogIn}
//           className="bg-light d-flex flex-column w-75 gap-3 border rounded p-3"
//           style={{ minWidth: "300px", maxWidth: "400px" }}
//         >
//           <h2 className="text-center">Log In</h2>
//           <Form.Group controlId="Email">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Email address"
//               // ref={emailRef}
//               required
//             />
//           </Form.Group>
//           <Form.Group controlId="Password">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="Password"
//               // ref={pwRef}
//               required
//             />
//           </Form.Group>
//           <Form.Check type="checkbox" id="remember-me" label="Remember me" />
//           <Button type="submit">Submit</Button>

//           <p className="text-center border-top pt-1">Need an account?</p>
//           <div
//             className="d-flex justify-content-between"
//             style={{ marginTop: "-3rem" }}
//           >
//             <div style={{ width: "200px" }}>
//               <Link to="/account/signup">SIGN UP</Link>
//             </div>
//             <div>
//               <Link to="/forget">Forget Password</Link>
//             </div>
//           </div>
//         </Form>
//       </Container>
//     </>
//   );
// };

// export default LogInForm;

import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const LogInForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();

    const apiRes = await fetch("http://localhost:7000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    console.log(apiRes);

    if (apiRes.status === 200) {
      const data = await apiRes.json();
      console.log("User logged in successfully");
      localStorage.setItem('token', data.token);
      console.log("token as ..",data.token)
      // navigate("/settingdash2"); // Navigate to the desired page after successful login
      navigate("/dashboardheader");
    } else {
      console.log("Error logging in");
      // Handle unsuccessful login
    }
  };

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", backgroundColor: "#80060c" }}
      >
        <Form
          onSubmit={handleLogIn}
          className="bg-light d-flex flex-column w-75 gap-3 border rounded p-3"
          style={{ minWidth: "300px", maxWidth: "400px" }}
        >
          <h2 className="text-center">Log In</h2>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email address"
              required
            />
          </Form.Group>
          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Check type="checkbox" id="remember-me" label="Remember me" />
          <Button type="submit">Submit</Button>

          <p className="text-center border-top pt-1">Need an account?</p>
          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "-3rem" }}
          >
            <div style={{ width: "200px" }}>
              <Link to="/account/signup">SIGN UP</Link>
            </div>
            <div>
              <Link to="/forget">Forget Password</Link>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default LogInForm;
