import React,{useState} from 'react'
import { Grid,Paper,Button } from '@material-ui/core'
import {Navigate} from 'react-router-dom'
import Navbar from '../Home/Header/Navbar'
const Bookappointment = () => {
    const paperStyle={padding :50,height:'60vh',width:300, margin:"60 auto"}
    const btnstyle={margin:'4px 0',maxHeight:100}
    const [auth,setAuth] = useState(false);
    if(auth){
        return <Navigate to='/application' />
    }
    return (
        <div className="hello">
            <Navbar />
            <Grid align="center"  style={{ padding: "80px 5px 49px 5px" }}>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <h1>CloudMD</h1>
                    <h2>Select Your Choice</h2>
                </Grid>
                <Button type='book' color='primary' variant="contained" style={btnstyle} fullWidth onClick={() => setAuth(true)}>Book an Appointment</Button>
                <Button type='message' color='primary' variant="contained" style={btnstyle} fullWidth>My Messages</Button>
                <Button type='history' color='primary' variant="contained" style={btnstyle} fullWidth>My Appointments</Button>
            </Paper>
        </Grid>
        </div>
    )
}

export default Bookappointment

