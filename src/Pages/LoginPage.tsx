import styles from "./LoginPage.module.css";
import FadeIn from "../Components/FadeIn";
// import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div className={styles.backgroundImage}>
      <FadeIn>
        <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
            <h1>Enter Login Details</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </div>
          <div className={styles.signupBox}>
            <h4>
              Dont have an account?
              {/* <Link to="/SignupPage"> */}
              <a href="#">Sign Up Here</a>
              {/* </Link> */}
            </h4>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
export default LoginPage;
