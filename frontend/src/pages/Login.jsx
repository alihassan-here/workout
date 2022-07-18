import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button>Log in</button>
        </form>
    )
}

export default Login;