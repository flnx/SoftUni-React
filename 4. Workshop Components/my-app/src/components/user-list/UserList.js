import { useEffect, useState } from 'react';

import * as api from '../../api/service';

import { UserActions } from '../UserListConstants';
import { UserItem } from './user-item/UserItem';
import { UserCreate } from './user-create/UserCreate';
import { UserEdit } from './user-edit/UserEdit';
import { UserDelete } from './user-delete/UserDelete';
import { UserDetails } from './user-details/UserDetails';

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [userAction, setUserAction] = useState({ user: null, action: null });

    useEffect(() => {
        api.getUsers().then((data) => setUsers(Object.values(data)));
    }, []);

    const closeHandler = () => {
        setUserAction({ user: null, action: null });
    };

    const userActionsHandler = (userId, actionType) => {
        api.getUser(userId).then((user) => {
            setUserAction({ user, action: actionType });
        });
    };

    const createHandler = (e, userId) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            ...address
        } = Object.fromEntries(formData);

        const userData = {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            address,
        };

        if (userId) {
            api.editUser(userData, userId)
                .then((user) => {
                    const filtered = users.filter(x => x._id != user._id);

                    setUsers([...filtered, user]);
                    closeHandler();
            });
        } else {
            api.createUser(userData)
                .then((user) => {
                    setUsers((oldUsers) => [...oldUsers, user]);
                    closeHandler();
            });
        }
    };

    const deleteHandler = async (userId) => {
        await api.deleteUser(userId);

        setUsers((oldUsers) => [...oldUsers].filter((x) => x._id != userId));
        closeHandler();
    };

    return (
        <>
            {userAction.action == UserActions.Add && (
                <UserCreate onClose={closeHandler} onCreate={createHandler} />
            )}

            {userAction.action == UserActions.Edit && (
                <UserEdit
                    user={userAction.user}
                    onClose={closeHandler}
                    onCreate={createHandler}
                />
            )}

            {userAction.action == UserActions.Details && (
                <UserDetails user={userAction.user} onClose={closeHandler} />
            )}

            {userAction.action == UserActions.Delete && (
                <UserDelete
                    user={userAction.user}
                    onClose={closeHandler}
                    onDelete={deleteHandler}
                />
            )}
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>
                                First name
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Last name
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Email
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Phone
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="arrow-down"
                                    className="icon active-icon vg-inline--fa fa-arrow-down Table_icon__+HHgn"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                                    ></path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <UserItem
                                key={user._id}
                                user={user}
                                onActionClick={userActionsHandler}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <button
                className="btn-add btn"
                onClick={() => userActionsHandler(null, UserActions.Add)}
            >
                Add new user
            </button>
        </>
    );
};
