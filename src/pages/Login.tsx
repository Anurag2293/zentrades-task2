import { useState, useEffect, useContext } from 'react'
import ZentradesLogo from "../assets/zentrades-logo.png"
import { useNavigate } from 'react-router-dom'
import { AuthenticateContext } from '../App'
import { CORRECT_PASSWORD } from '../utils/constants'

const Login = () => {
    const navigate = useNavigate()
    const { setAuthenticated } = useContext(AuthenticateContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        console.log({ email, password, rememberMe })
    }, [email, password, rememberMe])


    const isEmailValid = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string): boolean => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]+$/;
        return passwordRegex.test(password);
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isEmailValid(email)) {
            setError('Invalid email address');
            return;
        }
        if (!isPasswordValid(password)) {
            setError('Invalid password');
            return;
        }
        if (password !== CORRECT_PASSWORD) {
            setError("Incorrect Password entered")
            return;
        }
        setAuthenticated(true)
        navigate("/");
    }

    return (
        <div className='bg-black w-screen min-h-screen'>
            <form
                className='h-screen flex flex-col justify-center items-center w-96 mx-auto'
                onSubmit={handleOnSubmit}
            >
                <img src={ZentradesLogo} width={320} alt="Zentrades Logo" />
                <div className='w-5/6 mt-12 mb-6'>
                    <input
                        type="text"
                        placeholder="E-mail address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full rounded-t-lg p-4 active:border-primary'
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full rounded-b-lg p-4'
                    />
                </div>

                <div className='text-white flex items-center gap-1 justify-center'>
                    <input
                        type="checkbox"
                        className='block border-none rounded-sm checked:bg-secondary hover:bg-secondary active:bg-secondary checked:hover:bg-secondary checked:active:bg-secondary checked:hover:border-none checked:active:border-none'
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <p>Remember Me</p>
                </div>
                <button 
                    type='submit' 
                    className='w-5/6 mt-2 mb-6 p-4 rounded bg-[#EE5566] hover:bg-red-600 text-white'
                >Sign In</button>
                <a
                    href='mailto:support@zentrades.pro?subject=Password%20Reset'
                    target='_blank'
                    className='text-white text-sm'
                >Forgot your Password?</a>
                {error.length > 0 &&
                    <p className='text-red-500'>Error: {error}</p>
                }
            </form>
        </div>
    )
}

export default Login