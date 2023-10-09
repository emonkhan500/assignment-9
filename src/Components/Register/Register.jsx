import { useContext } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { googleSignIn, createUser } = useContext(AuthContext);

  const handleGoogleSignIn = (media) => {
    media()
      .then((res) => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (password.length < 6) {
      toast.error("password should be more than 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Use one capital later");
      return;
    } else if (!/[\W_]/.test(password)) {
      toast.error("Use special character");
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Account created");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };
  return (
    <div data-aos="flip-down" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
              <button
                onClick={() => {
                  handleGoogleSignIn(googleSignIn);
                }}
                className="btn btn-primary mt-6"
              >
                sign in with Google
              </button>
            </div>
          </form>
          <p className="text-center">
            HAVE ACCOUNT?{" "}
            <Link to="/login">
              <button className="btn btn-link"> Login</button>
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
