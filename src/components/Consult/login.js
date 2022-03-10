import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Navbar from '../Home/Header/Navbar'

const Login = () => {

    const paperStyle = { padding: 20, height: '60vh', width: 300, margin: "0 auto" ,backgroundColor:'lavenderblush' }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        email: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    const [auth,setAuth] = useState(false);
    if(auth){
        return <Navigate to='../signup' />
    }
    return (
        <nav>
            <Navbar />
            <Grid style={{ padding: "80px 5px 49px 5px" }}>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid >
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Email' name="email"
                                placeholder='Enter email' fullWidth required
                                helperText={<ErrorMessage name="email" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth >{props.isSubmitting ? "Loading" : "Sign in"}</Button>

                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Doesn't have an account ?
                     <Link href="#"  onClick={() => setAuth(true)} >
                        Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </nav>
        
    )
}

export default Login