import React,{useState} from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {

  const history = useNavigate();
    const initialValues = {
        name: '',
        email: '',
        password: '',
    }
    const [registerInput,setRegister] = useState({
        name: '',
        email: '',
        password: '',
    });
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
        password: Yup.string().min(8, "Minimum characters should be 8").required('Required')
    })
    const onSubmita = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        console.log(values)
        props.resetForm()
    }
    const handleInput = (e) => {
        e.persist();
        setRegister({...registerInput,[e.target.name]:e.target.value});
    } 
    const registerSubmit = (e) => {
        e.preventDefault();
        const data ={
            name:registerInput.name,
            email:registerInput.email,
            password:registerInput.password,
        }
        console.log(data);
        axios.post('http://127.0.0.1:8000/api/register',data).then(res => {
            history.push('/login');
            if(res.data.status === 'success'){
                localStorage.setItem('auth_token',res.data.token);
                localStorage.setItem('auth_name',res.data.account);
                
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <div className="flex justify-center md:my-12 lg:my-12">
      <div className="flex w-full xl:w-7/12 lg:w-7/12 bg-teal-200 h-[576px] shadow-lg">
        <div className="hidden lg:block lg:w-2/6 ">
        </div>
        <div className="w-full lg:w-4/6 bg-white  lg:rounded-tl-[50px] lg:rounded-bl-[50px] border-2	">
          <div className="text-right text-zinc-500	mr-4 mt-3">
            English (UK)
          </div>
          <div className="mx-6 lg:mx-16">
          <h3 className="ml-2 mt-4 text-1xl md:text-3xl font-semibold md:text-left text-center">Registration Form</h3>
          <div className="lg:flex">
              <button role="button" className="border border-gray-300 w-3/4 lg:w-full mt-6 rounded-[15px]">
                <div className="flex mx-2 my-2 justify-center">
                < img className=" h-5 cursor-pointer " src="https://i.imgur.com/arC60SB.png" alt="" />
                <p className="text-md px-2 text-gray-600">Continue with Google</p>
                </div>
                </button>

                <button role="button" className="border border-gray-300 w-3/4 lg:w-full lg:ml-2 mt-6 rounded-[15px]">
                <div className="flex mx-2 my-2 justify-center">
                < img className=" h-5 cursor-pointer " src="https://i.imgur.com/p0LvxkX.png" alt="" />
                <p className="text-md px-2 text-gray-600">Continue with Facebook</p>
                </div>
                </button>
          </div>
          <div className="flex mt-2 justify-items-center">
              <hr className="mb-6 w-5/12 border-t mt-3"/> 
              <span className="w-2/12 text-gray-500">OR</span>
              <hr className="mt-3 w-5/12 mb-6 border-t" />
          </div> 
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmita} >
            {(props) => (
                <form method="POST" onSubmit={registerSubmit}>
                <div className="relative mb-6 md:flex md:justify-between">
                    <input name="name" id="fullname" type="text" placeholder="Full Name" onChange={handleInput} value={registerInput.name}
                    className="border-b-2 peer rounded text-sm py-3 px-2 w-full placeholder-transparent  outline-none" />
                    <label className="absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name</label>
    
                </div>
                <div className="relative mb-6 md:flex md:justify-between">
                    <input name="email" id="email" type="email" placeholder="Email Address" onChange={handleInput} value={registerInput.email}
                    className="border-b-2 peer rounded text-sm py-3 px-2 w-full placeholder-transparent  outline-none" />
                    <label  className="absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
    
                </div>
                <div className="relative mb-5 md:flex md:justify-between">
                    <input name="password" id="password" type="password" placeholder="Password" onChange={handleInput} value={registerInput.password}
                    className="border-b-2 peer rounded text-sm py-3 px-2 w-full placeholder-transparent outline-none" />
                    <label className="absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div className="text-center">
                <button type="submit" className="bg-teal-400 py-2 px-2 w-2/4 lg:w-full mt-2 rounded-[20px] hover:bg-teal-300 shadow-sm">
                        <p className="font-bold	 text-lg text-white">Create Account</p>
                </button>
                </div>
                <div className="flex text-right pr-3 ml-12 mt-4 text-gray-500">
                    <p>Already have an Account?</p><a href="#" className="ml-2 text-teal-400">Login</a>
                </div>
                </form> 
            )}
                </Formik>
             
          </div>
          
        </div>
      </div>
    </div>
      
  );
}
