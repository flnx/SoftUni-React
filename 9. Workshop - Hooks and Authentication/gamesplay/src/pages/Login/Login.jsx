import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useFormInput } from '../../hooks/useFormInput';
import * as user from '../../service/user';

export const Login = () => {
    const [error, setError] = useState('');
    const { setUserData } = useContext(AuthContext);
    const navigate = useNavigate();
    const email = useFormInput('');
    const password = useFormInput('');


    const onSubmit = async (e) => {
        e.preventDefault();

        if (email.value == '' || password.value == '') {
            return setError('Fields must not be empty');
        }

        try {
            const userData = await user.login({
                email: email.value,
                password: password.value,
            });
            setUserData(userData);

            navigate('/', { replace: true });
        } catch (err) {
            setError(err.message || err);
        }
    };

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        {...email}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        {...password}
                    />

                    {error && <p className="error">{error}</p>}
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};
