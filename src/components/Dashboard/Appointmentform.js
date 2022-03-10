import React from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import Navbar from '../Home/Header/Navbar'

const Appointmentform = () => {
    const margin = { margin: "0 5px" }
    return (
        <div className='Form'>
          <Navbar />
          <form>
          <Grid style={{ padding: "80px 5px 49px 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant="h4" color="primary" align="Center" >
              CloudMD
          </Typography>
            <Typography variant="subtitle1" color="textSecondary" >
            Before you book your first appointment, the doctor will need you to complete the form below.
          </Typography>
            <form>
              <Typography variant="body2" align="left" gutterBottom>Personal Info : </Typography>
              <Grid container spacing={1}>
                {
                  inputFormElements.slice(0, 4).map(input => <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} />
                  </Grid>)
                }
              </Grid>
              <Typography variant="body2" align="left" gutterBottom>Address : </Typography>
              <Grid container spacing={1}>
                {
                  inputFormElements.slice(4, 10).map(input => <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} />
                  </Grid>)
                }
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                  <Button style={margin} type="reset" variant="outlined" color="primary">Reset</Button>
                  <Button type="submit" variant="contained" color="primary">Submit</Button>
                </Grid>
                
              </Grid>
            </form>

          </CardContent>
        </Card>
      </Grid>
          </form>
      
    </div>
    )
}

export default Appointmentform

const inputFormElements=[
    {
        name:"firstName",placeholder:"Enter first name", label:"First Name", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"lastName",placeholder:"Enter last name", label:"Last Name", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"email",type:"email",placeholder:"Enter email", label:"Email", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"phone", type:"number",placeholder:"Enter phone number", label:"Phone", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"street",placeholder:"Enter street", label:"Street", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"city",placeholder:"Enter city name", label:"City", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    }, {
        name:"state",placeholder:"Enter state", label:"State", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    }, {
        name:"country",placeholder:"Enter country name", label:"Country", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    }, {
        name:"pincode",placeholder:"Enter pincode number", label:"Pincode", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:12
    }, {
        name:"Message",placeholder:"Enter Details", label:"Message", 
        variant:"outlined",rows:3, fullWidth:true,required:false, xs:12,sm:12
    },
]