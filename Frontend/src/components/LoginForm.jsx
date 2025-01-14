import "../css/LoginForm.css"

const LoginForm = () => {
  return (
    <form>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" id="name" required />

      <label htmlFor="password">Enter your password: </label>
      <input type="password" id="password" required />

      <input type="submit" value="Add booking" />
    </form>
  );
};

export default LoginForm;