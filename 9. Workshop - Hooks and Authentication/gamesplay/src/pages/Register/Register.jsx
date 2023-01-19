import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import * as user from '../../service/user';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');

    const { setUserData } = useContext(AuthContext);
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();

        if (email == '' || password == '') {
            return setError('Fields must not be empty');
        }

        if (password != repeatPassword) {
            return setError("Passwords don't match");
        }

        try {
            const data = await user.register({ email, password });

            setUserData({
                ...data,
                password: null,
            });

            navigate('/', { replace: true });
        } catch (err) {
            setError(err.message || err);
        }
    };

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <div className="container">
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    {error && <p className="error">{error}</p>}
                    <input
                        className="btn submit"
                        type="submit"
                        value="Register"
                    />
                    <p className="field">
                        <span>
                            If you already have profile click{' '}
                            <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};
