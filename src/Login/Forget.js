import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Forget() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          email: "",
        },
        onSubmit: async (values) => {
          try {
            const user =await axios.post("https://password-rest.herokuapp.com/forgot", values);
            alert("Check your email");
            navigate("/");
          } catch (error) {
            alert("incorrect username/password");
          }
        },
      });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image">
                  <img
                    src="https://st.depositphotos.com/1900347/4146/i/450/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
                    width={"450px"}
                    height={"425px"}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">
                        Forgot Your Password?
                      </h1>
                      <p className="mb-4">
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a link to reset your password!
                      </p>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          name="email"
                          onChange={formik.handleChange}
                          values={formik.values.email}
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <Link
                        to={"/"}
                        className="btn btn-primary btn-user btn-block"
                      >
                        Reset Password
                      </Link>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link to={"/accout"} className="small">
                        Create an Account!
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link to={"/"} className="small">
                        Already have an account? Login!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
