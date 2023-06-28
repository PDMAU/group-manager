import { useAuth } from "../contexts/auth";

const Login = () => {
  const context = useAuth();
  return (
    <div>
      <button onClick={() => context.login()}>Sign in with Google 🚀</button>
    </div>
  );
};

export default Login;
