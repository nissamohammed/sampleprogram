import React, { useState } from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

function Form() {

  const [fdata, setFdata] = useState({
uname:"",
email:"",
pnumber:"",
address:""     
    });
    const handlechange=(e)=>{
      const { name, value } = e.target;
      setFdata({
        ...fdata,
        [name]: value,
      });  
    }
    const handlesubmit =(e)=>{
      e.preventDefault();
      console.log(fdata);
      alert('saved')     
    }
    const handleclear=()=>{
      setFdata({
        uname:"",
email:"",
pnumber:"",
address:""   
      })
    }

  return (
    <>
    <Card color="transparent" shadow={false} className='flex justify-center items-center'>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            name="uname"
            value={fdata.uname}
            onChange={handlechange}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            name="email"
            value={fdata.email}
            onChange={handlechange}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Phone number
          </Typography>
          <Input
            type="text"
            size="lg"
            placeholder="Phone Number"
            name="pnumber"
            value={fdata.pnumber}
            onChange={handlechange}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Address
          </Typography>
          <Textarea
            type="text"
            size="lg"
            placeholder="Address"
            name="address"
            value={fdata.address}
            onChange={handlechange}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <div className='flex justify-evenly'>
        <Button className="mt-6"  onClick={handlesubmit}>
          Sumbit
        </Button>
        <Button className="mt-6"  onClick={handleclear}>
          Clear
        </Button>
        </div>
       
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
    </>
  )
}

export default Form