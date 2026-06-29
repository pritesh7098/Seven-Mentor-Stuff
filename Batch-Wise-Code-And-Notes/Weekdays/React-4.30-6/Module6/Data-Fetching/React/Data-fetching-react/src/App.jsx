import React, { useEffect, useState } from 'react'

function App() {


// step 1 - Defining the states 

const[loading, setLoading] = useState(true)
const [data, setData] = useState("")
const[error,setError] = useState(null) 

// Step 2 - Business logic 

useEffect(()=>{

  fetch("https://api.github.com/users/pritesh7098")
.then(response => response.json())
.then((finalData)=>{

setData(finalData)
setLoading(false)

} ).catch((error)=> {

console.log("Error while fetching");
setError(error.message)
setLoading(false)


})


},[]) // Empty dependency array - run atleast once 



// Step 3 - UI Part 

if(loading) return <p> Loading Please wait ... </p>
if(error) return  <p> something went wrong </p>



  return (
    <div>

<h1>Data fetching using React - Promises </h1>

<h3>Login : {data.login }</h3>
<h3>ID : {data.id }</h3>
<h3>URL : {data.url }</h3>



    </div>
  )
}

export default App