import styles from "./SignupPage.module.css";
import FadeIn from "../Components/FadeIn";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div className={styles.backgroundImage}>
      <FadeIn>
        <div className={styles.signupContainer}>
          <div className={styles.signupBox}>
            <h1>Create an Account</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </div>
          <div className={styles.loginBox}>
            <h4>
              Already have an account?
              <Link to="/LoginPage">
                <a href="#">Log In Here</a>
              </Link>
            </h4>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
export default SignupPage;
