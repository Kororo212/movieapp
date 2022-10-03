import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signWithGoogle } from '../Config/Firebase';
import { GitAuth } from '../Config/Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

import { auth } from '../Config/Firebase';

const Login = () => {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const signWithGit=()=>{
        signInWithPopup(auth,GitAuth)
        .then((res)=>{
        navigate("/")})
        .catch((err)=>{
            const dataErr = err.code.substring(5)
            setErrorMessage(dataErr.replace(/-/g,' '))
        })
        
      }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.code.substring(5));
            
        }
    };

    return (
        <Box sx={{backgroundColor:'black',minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>

       
        <Box sx={{minHeight:'max-content',
            backgroundColor:'white',
            width:'80%',
            zIndex:1,
            borderRadius:'12px',
            p:1,
           
            }}>
            <Box
                sx={{
                    p:1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box sx={{display:'flex',width:'80%',mt:1,justifyContent:'space-around',flexDirection:'row',flexWrap:'wrap'}}>
                    <Button variant='contained' sx={{backgroundColor:'blue',m:1,width:'200px'}} onClick={signWithGoogle}>Sign With Google</Button>
                    <Button variant='contained' sx={{backgroundColor:'black',m:1,width:'200px'}} onClick={signWithGit}>Sign With Github</Button>
                </Box>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Typography color='red'>{errorMessage}</Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/register">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
      </Box>
    );
}

export default Login;
