import Input from './Input.jsx';

function Login(props) {
    return (
        <form className="form">
            <Input 
                type="text"
                placeholder="Username"
            />
            <Input 
                type="text"
                placeholder="Password"
            />
            {props.isRegistered ? null : <Input 
                type="text"
                placeholder="Confirm Password"
            />}

            {!props.isRegistered && (
                <input type="password" placeholder="Confirm Password" />
            )}
            {/* {props.registered ? <button type="submit">Login</button> : <button type="submit">Register</button>} */}
            <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
        </form>
    );
};

export default Login;
