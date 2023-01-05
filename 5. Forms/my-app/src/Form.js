import { useState } from 'react';

export const Form = () => {
    const [userInput, setUserInput] = useState({
        firstName: '',
        lastName: '',
        password: '',
        rePass: '',
        email: '',
        phoneNumber: '',
        gender: '',
        tac: false,
        accountType: '',
    });

    const onChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setUserInput(state => ({
            ...state,
            [fieldName]: e.target.type == "checkbox" ? !userInput[fieldName] : fieldValue
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(userInput);
    }

    return (
        <form action="post" onSubmit={onSubmit}>
            <div className="form-control">
                <div>
                    <input type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="form-field"
                        value={userInput.firstName}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="form-field"
                        value={userInput.lastName}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="form-field"
                        value={userInput.email}
                        onChange={onChange}

                    />
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="form-field"
                        value={userInput.password}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        name="rePass"
                        type="password"
                        placeholder="Repeat Password"
                        className="form-field"
                        value={userInput.rePass}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <input
                        name="phoneNumber"
                        type="tel"
                        placeholder="Phone Number"
                        className="form-field"
                        value={userInput.phoneNumber}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <select name="gender" className="select" value={userInput.gender} onChange={onChange}>
                        <option value="select">-- Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <fieldset>
                        <legend>Account Type:</legend>
                        <div className="fieldset-item">
                            <label htmlFor="personal">Personal</label>
                            <input
                                type="radio"
                                name="accountType"
                                id="personal"
                                value="personal"
                                onChange={onChange}
                                checked={userInput.accountType == 'personal'}
                            />
                        </div>
                        <div className="fieldset-item">
                            <label htmlFor="corporate">Corporate</label>
                            <input
                                type="radio"
                                name="accountType"
                                id="corporate"
                                value="corporate"
                                onChange={onChange}
                                checked={userInput.accountType == 'corporate'}
                            />
                        </div>
                    </fieldset>
                </div>
                <div className="terms">
                    <label htmlFor="tac">Terms and Conditions</label>
                    <input type="checkbox" id="tac" name="tac" checked={userInput.tac} onChange={onChange} />
                </div>
                <div className="btn-wrapper">
                    <input type="submit" value="Register" className="btn" />
                </div>
            </div>

        </form>
    );
}