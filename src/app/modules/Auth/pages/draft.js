import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { login } from "../_redux/authCrud";
import Facebook from "./Facebook"

const initialValues = {
  email: "",
  password: "",
};

function Login(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
  });

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        login(values.email, values.password)
          .then(({ data: { accessToken } }) => {
            disableLoading();
            props.login(accessToken);
          })
          .catch(() => {
            disableLoading();
            setSubmitting(false);
            setStatus(
              intl.formatMessage({
                id: "ชื่อผู้ใช้หรือรหัสผ่านผิด",
              })
            );
          });
      }, 500);
    },
  });

  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* หัวเรื่อง */}
      <div align="center" class="mb-10">
        <h2>เข้าสู่ระบบ</h2>
        <article>กรอกอีเมล์และรหัสผ่าน</article>
      </div>
      {/* สุดหัวเรื่อง */}
      {/* ฟอร์ม */}
      <form onSubmit={formik.handleSubmit} className="form fv-plugins-bootstrap fv-plugins-framework">
        {formik.status && (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        )}

        <div className="form-group fv-plugins-icon-container">
          <input placeholder="Email" type="email" className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses("email")}`} name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <input placeholder="Password" type="password" className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses("password")}`} name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center mb-1">
          <button id="kt_login_signin_submit" type="submit" disabled={formik.isSubmitting} className="btn btn-primary btn-lg btn-block font-weight-bold">
            <span>เข้าสู่ระบบ</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
        </form>
        <div className="row mt-2">
          <div className="col-6  pr-1">
            <button className="btn btn-lg btn-block btn-google font-weight-bold">
              <span>Google</span>
            </button>
          </div>
          <div className="col-6  pl-1">
              <Link to="/auth/facebook"><button className="btn btn-lg btn-block btn-facebook font-weight-bold"><span>Facebook</span></button></Link>
          </div>
        </div>
        <br />
        <div className="row mt-2">
          <div className="col-4">
            <Link to="/auth/forgot-password" className="text-dark-50 text-hover-primary my-3 mr-2">ลืมรหัสผ่าน</Link>
          </div>
          <div className="col-8" align="right">
            <article className="text-dark-50">
              สมัครสมาชิกกับ Easy Sell
              <Link to="/auth/test" className="text-hover-dark mx-1"><b>คลิกที่นี่</b></Link>
            </article>
          </div>
        </div>

      {/*สุดฟอร์ม*/}
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Login));

import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { login } from "../_redux/authCrud";
import Facebook from "./Facebook"
import { components } from "react-select";

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    fetch('http://192.168.1.86:15421/api/login', {
            crossDomain: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    email: this.state.email,
                    password: this.state.password,
                }
            ),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

  }

  render() {
    return (
      <div className="login-form login-signin" id="kt_login_signin_form">
        <div align="center" class="mb-10">
          <h2>เข้าสู่ระบบ</h2>
          <article>กรอกอีเมล์และรหัสผ่าน</article>
        </div>
        <form onSubmit={this.handleSubmit} className="form fv-plugins-bootstrap fv-plugins-framework">

          <div className="form-group fv-plugins-icon-container">
            <input placeholder="Email" type="email" className="form-control form-control-solid h-auto py-5 px-6" name="email"
              onChange={(e) => { this.setState({ email: e.target.value }) }}
            />

          </div>
          <div className="form-group fv-plugins-icon-container">
            <input placeholder="Password" type="password" className="form-control form-control-solid h-auto py-5 px-6" name="password"
              onChange={(e) => { this.setState({ password: e.target.value }) }}
            />

          </div>
          <div className="form-group d-flex flex-wrap justify-content-between align-items-center mb-1">
            <button id="kt_login_signin_submit" type="submit" className="btn btn-primary btn-lg btn-block font-weight-bold">
              <span>เข้าสู่ระบบ</span>

            </button>
          </div>
        </form>
        <div className="row mt-2">
          <div className="col-6  pr-1">
            <button className="btn btn-lg btn-block btn-google font-weight-bold">
              <span>Google</span>
            </button>
          </div>
          <div className="col-6  pl-1">
            <Link to="/auth/facebook"><button className="btn btn-lg btn-block btn-facebook font-weight-bold"><span>Facebook</span></button></Link>
          </div>
        </div>
        <br />
        <div className="row mt-2">
          <div className="col-4">
            <Link to="/auth/forgot-password" className="text-dark-50 text-hover-primary my-3 mr-2">ลืมรหัสผ่าน</Link>
          </div>
          <div className="col-8" align="right">
            <article className="text-dark-50">
              สมัครสมาชิกกับ Easy Sell
              <Link to="/auth/test" className="text-hover-dark mx-1"><b>คลิกที่นี่</b></Link>
            </article>
          </div>
        </div>

        {/*สุดฟอร์ม*/}
      </div>
    );
  }
}


