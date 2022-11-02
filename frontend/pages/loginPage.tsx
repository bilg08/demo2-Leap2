import loginStyles from '../styles/login.module.css'
const LoginPage = () => {
    return (<div className={loginStyles.section}>
        <div className={loginStyles.color}>
            <div className={loginStyles.color1}></div>
            <div className={loginStyles.color2}></div>
            <div className={loginStyles.color3}></div>
        </div>
    <div className={loginStyles.box}>
        <div className={loginStyles.square}>
                <div className={loginStyles.container1}>
                    <div className={loginStyles.form}>
                        <h2>Login Form</h2>
                        <form>
                            <div className={loginStyles.inputBox}>
                                <input type="text" placeholder="User name"/>
                            </div>
                            <div className={loginStyles.inputBox}>
                                <input type="password" placeholder="Password"/>
                            </div>
                            <div className={loginStyles.inputBox}>
                                <input type="submit" value="Login"/>
                            </div>
                            <p className={loginStyles.forget}>Forgot Password ? <a href='#'>Click Here</a>
                            </p>
                            <p className={loginStyles.forget}>Don't have an account ? <a href='#'>Sign up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default LoginPage