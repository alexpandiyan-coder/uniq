import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./loginpage.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function StudentLoginPage() {

       const [studentData,setStudentData]=useState({name:"",password:"",invoiceNumber:""})
      const [data,setdata]=useState([])
        const navigate=useNavigate()
     


      useEffect(()=>{
       async function fetchData(){
           let res=await axios.get("http://localhost:3003/studentData")
          setdata(res.data)
        }

        fetchData()
      },[])
   
       function handelChange(e){
             const{name,value}=e.target
             setStudentData((state)=>({...state,[name]:value}))
    
       
       }
       function handelSubmit(e){
        e.preventDefault();
      let value =data.find((state)=>state.invoiceNumber===studentData.invoiceNumber &&state.password===studentData.password )

            if (value) {
               navigate("/data")
            } else {
                alert("Please Enter right password")
            }              
       
       }
  return (
    <section className='container login-page-bg'>
    <div>
    <Form className='login-form' onSubmit={handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Invoice Number</Form.Label>
        <Form.Control type="Number" placeholder="Enter Invoice Number"value={studentData.invoiceNumber} name='invoiceNumber'   onChange={handelChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Text" placeholder="Enter Your Name" value={studentData.name} name='name'  onChange={handelChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Your Password" value={studentData.password} name='password' onChange={handelChange} />
      </Form.Group > 
      <Form.Group>
      <Button  variant="primary" className='login-button' type="submit" >
        Login
      </Button>
    
      </Form.Group>
     <Link to='/passwordgenerate'>  
      Generate password
      </Link>
    </Form>
    </div>

    <div className='roundMain'>
        <div className='round-1'></div>
        <div className='round-2'></div>
        <div className='round-3'></div>
        <div className='round-4'></div>
    </div>
    <div className='roundMain-2'>
        <div className='round-1'></div>
        <div className='round-2'></div>
        <div className='round-3'></div>
        <div className='round-4'></div>
    </div>
    </section>
  );
}

export default StudentLoginPage;