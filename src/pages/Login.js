import { useNavigate } from "react-router-dom";

const Login = ({ login, profile }) => {
  const navigate = useNavigate();
  return profile ? (
    navigate("/home")
  ) : (
    <div>
      <button onClick={() => login()}>Sign in with Google 🚀</button>
    </div>
  );
};

export default Login;
