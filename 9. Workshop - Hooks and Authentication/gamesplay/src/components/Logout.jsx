import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import * as user from '../service/user';

export const Logout = () => {
    const { auth, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        setUserData({});
        user.logout(null, auth.accessToken);

        navigate('/', { replace: true });
    },[]);

    return;
};
