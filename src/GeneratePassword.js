import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "./loginpage.css"
function GeneratePassword() {
      const [studentNewData,setStudentNewData]=useState({name:"",invoiceNumber:"",email:"",password:""})
      const [studentData,setStudentData]=  useState()

   
      function handelChange(e){
            const{name,value}=   e.target
            setStudentNewData((state)=>({...state,[name]:value}))
      }
      function handelSubmit(e){
             let otp =Math.round(Math.random()*4000)
             console.log(otp)
            e.preventDefault();

            
           axios.post("http://localhost:3003/studentData",studentNewData)
          
       
         
      }
  return (
    <section className='container login-page-bg'>
    <div>
    <Form className='login-form' onSubmit={handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Invoice Number</Form.Label>
        <Form.Control type="Number" placeholder="Enter Invoice Number"value={studentNewData.invoiceNumber} name='invoiceNumber'   onChange={handelChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Text" placeholder="Enter Your Name" value={studentNewData.name} name='name'  onChange={handelChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gmail</Form.Label>
        <Form.Control type="email" placeholder="Enter Your email" value={studentNewData.email} name='email' onChange={handelChange} />
      </Form.Group > 
      <Form.Group className="mb-3" controlId="formBasicOTP">
        <Form.Label>OTP</Form.Label>
        <Form.Control type="number" placeholder="Enter Your otp" value={studentNewData.OTP} name='password' onChange={handelChange} />
      </Form.Group > 
      <Form.Group>
      <Button  variant="primary" className='login-button' type="submit" >
        Login
      </Button>
    
      </Form.Group>
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
  )
}

export default GeneratePassword
