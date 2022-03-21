import React, { useState } from "react";
import { Formik,Form } from "formik";
import main from "./img/c1.png";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
import { Link , Navigate } from "react-router-dom";

const SignupPage = ({signup, isAuthenticated}) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
    });

    const {name,email, password} = formData;
    
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value});


    const onSubmit = (e) => {
          // e.preventDefault();
            // const v = signup( name,email, password);
            signup( name,email, password);
              setAccountCreated(true);
            
    }

    if (isAuthenticated){
        return <Navigate to="/patientdashboard" />
    }
    if (accountCreated){
        return <Navigate to="/login" />
    }

  return (
    <div className="flex justify-center my-12 md:my-6 lg:my-6">
      <div className="flex w-full xl:w-8/12 lg:w-8/12 bg-teal-200 h-[576px] shadow-lg">
      <img
          src={main}
          alt=""
          width="35%"
          height="35%"
          className="absolute z-5 lg:right-[50px] lg:left-[400px] lg:top-[250px] lg:bottom-[40px]"
        />
        <div className="hidden lg:block lg:w-2/6 "></div>
        <div className="w-full lg:w-4/6 bg-white  lg:rounded-tl-[50px] lg:rounded-bl-[50px] border-2	">
          <div className="text-right text-zinc-500	mr-4 mt-3">English (UK)</div>
          <div className="mx-6 lg:mx-32">
            <h3 className="ml-2 mt-4 text-1xl md:text-3xl font-semibold md:text-left text-center">
              Registration Form
            </h3>
            <div className="lg:flex">
              <button
                className="border border-gray-300 w-3/4 lg:w-full mt-6 rounded-[15px] hover:bg-gray-100"
              >
                <div className="flex mx-2 my-2 justify-center">
                  <img
                    className=" h-5 cursor-pointer "
                    src="https://i.imgur.com/arC60SB.png"
                    alt=""
                  />
                  <p className="text-sm px-2 text-gray-600">
                    Continue with Google
                  </p>
                </div>
              </button>
              <button
                className="border border-gray-300 w-3/4 lg:w-full lg:ml-2 mt-6 rounded-[15px] hover:bg-gray-100"
              >
                <div className="flex mx-2 my-2 justify-center">
                  <img
                    className=" h-5 cursor-pointer "
                    src="https://i.imgur.com/p0LvxkX.png"
                    alt=""
                  />
                  <p className="text-sm px-2 text-gray-600">
                    Continue with Facebook
                  </p>
                </div>
              </button>
            </div>
            <div className="flex mt-2 justify-items-center">
              <hr className="mb-6 w-5/12 border-t mt-3" />
              <span className="w-2/12 text-gray-500">OR</span>
              <hr className="mt-3 w-5/12 mb-6 border-t" />
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form method="POST">
                  <div className="relative mb-6 md:flex md:justify-between">
                    <input
                      name="name"
                      id="fullname"
                      type="text"
                      placeholder="Full Name"
                      onChange={(e) => onChange(e)}
                      value={name}
                      className="border-b-2 peer rounded text-sm py-3 px-2 w-full placeholder-transparent  outline-none"
                    />
                    <label className="absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Full Name
                    </label>
                  </div>
                  <div className="relative mb-6 md:flex md:justify-between">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      onChange={(e) => onChange(e)}
                      value={email}
                      className="border-b-2 peer rounded  text-sm py-3 px-2 w-full placeholder-transparent  outline-none"
                    />
                    <label className="absolute left-2 -top-3.5 text-gray-800 text-sm transition-all peer-placeholder-shown:sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Email Address
                    </label>
                  </div>
                  <div className="relative mb-5 md:flex md:justify-between">
                    <input
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => onChange(e)}
                      value={password}
                      className="border-b-2 peer rounded  text-sm py-3 px-2 w-full placeholder-transparent outline-none"
                    />
                    <label className="absolute left-2 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Password
                    </label>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-teal-400 py-2 px-2 w-2/4 lg:w-full mt-2 rounded-[20px] cursor:pointer hover:bg-teal-300 shadow-sm"
                    >
                      <p className="font-bold text-lg text-white">
                        Create Account
                      </p>
                    </button>
                  </div>
                  <div className="flex text-right pr-3 ml-12 mt-4 text-gray-500">
                    <p>Already have an Account?</p>
                    <Link to="/login" className="ml-2 text-teal-400">
                      Login
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, {signup})(SignupPage);