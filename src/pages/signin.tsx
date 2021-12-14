import React, {useState} from 'react'
import BoxCustom from "../components/box/Box";
import {SignIn} from "../media/svg";
import '../sass/sign.scss'
import {Google, Twitter, Facebook, VisibilityOff, Visibility, Password, Email} from '@mui/icons-material'
import {useInput} from "../hooks/input.hook";
import {Link} from 'react-router-dom'
import {
    Button, Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";

interface IErrors {
    email: boolean
    password: boolean
}

const Signin = () => {

    const email = useInput('')
    const password = useInput('')

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [error, setError] = useState<IErrors>({
        email: false,
        password: false
    })

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    const checkFilled = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setError({...error, [event.target.id]: true})
        } else {
            setError({...error, [event.target.id]: false})
        }
    }

    return (
        <div className="box-wrapper">
            <BoxCustom flex height={100}>
                <div className="signin-img">
                    <h1>Hi, Welcome back</h1>
                    {<SignIn width={20} />}
                </div>
                <div className="form-wrapper">
                    <p className="sign-redirect">Don't have an account? <Link to="/signup">Get started</Link></p>
                    <form className="form">
                        <h2>Sign in to Music</h2>
                        <p>Enter your details below</p>
                        <div className="form-link">
                            <Button color="inherit" size="large" variant="outlined" className="form-link-button"><Google color="error"/></Button>
                            <Button color="inherit" size="large" variant="outlined" className="form-link-button"><Twitter color="primary"/></Button>
                            <Button color="inherit" size="large" variant="outlined" className="form-link-button"><Facebook color="primary"/></Button>
                        </div>
                        <div className="form-or">
                            <div className="form-or-line"></div>
                            <h4 className="form-or-text">or</h4>
                        </div>
                        <div className="form-control">
                            <div className="form-control-item">
                                <FormControl variant="outlined" fullWidth={true} error={error.email} required={true}>
                                    <InputLabel htmlFor="email">E-mail</InputLabel>
                                    <OutlinedInput
                                        className="input"
                                        id="email"
                                        {...email}
                                        type={'email'}
                                        placeholder="E-mail"
                                        error={error.email}
                                        onBlur={checkFilled}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        }
                                        label="E-mail"
                                    />
                                </FormControl>
                                {
                                    error.email && <p className="error-text">E-mail is required</p>
                                }
                            </div>
                            <div className="form-control-item">
                                <FormControl variant="outlined" fullWidth={true} error={error.password} required={true}>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        className="input"
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        onBlur={checkFilled}
                                        {...password}
                                        error={error.password}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <Password />
                                            </InputAdornment>
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                {
                                    error.password && <p className="error-text">Password is required</p>
                                }
                            </div>
                        </div>
                        <div className="form-extra">
                            <FormControlLabel
                                control={<Checkbox name="remember"/>}
                                label="Remember me"
                            />
                            <Link to="#">Forgot password?</Link>
                        </div>
                        <Button variant="contained" fullWidth={true} className="enterBtn">Sign In</Button>
                    </form>
                </div>
            </BoxCustom>
        </div>
    )
}

export default React.memo(Signin)