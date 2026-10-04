// import React, { useState } from "react";

// function App() {
//   // Buisness logic for controlled comp

//   // step1 : Defining the required states

//   const [email, setEmail] = useState(""); // it should be empty in first case bcz we dont know the user behaviour
//   const [password, setPassword] = useState("");

//   // step 4 - submitting the form

//   const handleForm = (e) => {
//     e.preventDefault(); // it will prevent the default behaviour of browser

// /*     // basic condition check

//     if (!email.includes("@")) {
//     alert("Invalid email!");
//     return;
//   }

//   if(!password.includes("_")){

// alert("password doesen't follow the rules")

//   } */

//   alert("Form Submitted!");

//     console.log(
//       "The user has submitted the email and password shown below : ",
//       email,
//       password,
//     );
//   };

//   /* prisma.send(email,password ) // in case of db's and orm  */

//   // step 2 : Defining the comp

//   // UI For HTML form

//   return (
//     <div>
//       <h1>React Forms - Controlled components</h1>
//       <hr />

//       <form onSubmit={handleForm}>
//         <label htmlFor="Email">Enter your email : </label>
//         <input
//           type="text"
//           placeholder="Enter your email here "
//           // step 3 : providing the value and the actual path from where it comes

//           value={email}
//           onChange={(e) => setEmail(e.target.value)} // have to use updater here for change in input
//         />
//         <br />
//         <label htmlFor="password">Enter your password : </label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <br />
//         <button>SignIn</button>
//       </form>
//     </div>
//   );
// }

// export default App;

/* -------------------------------------------------------- */

// uncontrolled components / uncontrolled forms

import React, { useRef } from "react";

function App() {
  // Buisness logic

  // step 1 : defining the states / storing the ref

  const emailRef = useRef(); // you can store the ref of email and password
  const passwordRef = useRef();

  // step 4 : handling the form submission

  const handleForm = (e) => {
    e.preventDefault();
    console.log(
      "The email and password entered is : ",

      emailRef.current.value,
      passwordRef.current.value,
    );
  };

  // step 2 : Defined the components
  // UI For uncontrolled comp

  return (
    <div>
      <h1>Uncontrolled form</h1>
      <hr />

      <form onSubmit={handleForm}>
        <label htmlFor="Email">Enter your email : </label>

        <input type="text" placeholder="Enter the email" ref={emailRef} />
        {/* step 3 : adding a ref instead of states  */}
        <br />

        <label htmlFor="password">Enter your password</label>

        <input type="text" placeholder="Enter the password" ref={passwordRef} />

        <br />
        <br />

        <button>SignIn</button>
      </form>
    </div>
  );
}

export default App;
