import { Link } from "react-router-dom";
import "../css/LoginForm.css";

const LoginForm = () => {
  return (
    <form>
      <div className="name">
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name" required />
      </div>

      <div className="password">
        <label htmlFor="password">Enter your password: </label>
        <input type="password" id="password" required />
      </div>

      <div className="submit">
        <input type="submit" value="Add booking" />
      </div>

      <div className="forgetPassword">
        <Link to="/forgetPassword">Forget Password?</Link>
      </div>

      <hr />

      
    </form>
  );
};

export default LoginForm;
