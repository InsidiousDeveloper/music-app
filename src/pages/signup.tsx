import React, {useState} from 'react'
import {SignUp} from "../media/svg";
import '../sass/sign.scss'
import {Google, Twitter, Facebook, VisibilityOff, Visibility, Password, Email} from '@mui/icons-material'
import {useInput} from "../hooks/input.hook";
import {Link} from 'react-router-dom'
import {
    Backdrop,
    Button, Fade,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel, Modal,
    OutlinedInput,
    Typography,
    Box
} from "@mui/material";
import BoxCustom from "../components/box/Box";

interface IErrors {
    email: boolean
    password: boolean
    first_name: boolean
    last_name: boolean
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Signup = () => {

    const email = useInput('')
    const password = useInput('')

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [error, setError] = useState<IErrors>({
        email: false,
        password: false,
        last_name: false,
        first_name: false
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
                    <h1>Hi, Nice to see you!</h1>
                    {<SignUp width={20} />}
                </div>
                <div className="form-wrapper">
                    <p className="sign-redirect">Already have an account? <Link to="/signin">Sign in here</Link></p>
                    <form className="form">
                        <h2>Get started absolutely free</h2>
                        <p>Free forever. No credit card needed</p>
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
                            <div className="form-control-item short">
                                <div>
                                    <FormControl variant="outlined" error={error.password} required={true}>
                                        <InputLabel htmlFor="password">First name</InputLabel>
                                        <OutlinedInput
                                            className="input"
                                            id="first_name"
                                            type={'text'}
                                            placeholder="First name"
                                            onBlur={checkFilled}
                                            label="First name"
                                        />
                                    </FormControl>
                                    {
                                        error.first_name && <p className="error-text">First name is required</p>
                                    }
                                </div>
                                <div>
                                    <FormControl variant="outlined" error={error.password} required={true}>
                                        <InputLabel htmlFor="password">Last name</InputLabel>
                                        <OutlinedInput
                                            className="input"
                                            id="last_name"
                                            type={'text'}
                                            placeholder="Last name"
                                            onBlur={checkFilled}
                                            label="Last name"
                                        />
                                    </FormControl>
                                    {
                                        error.last_name && <p className="error-text">Last name is required</p>
                                    }
                                </div>
                            </div>
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
                        <Button variant="contained" fullWidth={true} className="enterBtn">Sign Up</Button>
                        <div className="form-extra">
                            <p onClick={() => setOpen(true)}>By signing up you agree with our privacy policy</p>
                            <Modal
                                aria-labelledby="transition-modal"
                                aria-describedby="transition-modal"
                                open={open}
                                onClose={() => setOpen(false)}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={modalStyle}>
                                        <Typography id="transition-modal-title" variant="h6" component="h2">
                                            Text in a modal
                                        </Typography>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Modal>
                        </div>
                    </form>
                </div>
            </BoxCustom>
        </div>
    )
}

export default React.memo(Signup)