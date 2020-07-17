import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { register } from "../../Auth/_redux/authCrud";
import axios from "axios";
// const instance = axios.create();
const Axios = require('axios')



export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            last_name: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        // register(this.state.email,this.state.name,this.state.last_name,this.state.password)
        fetch('http://192.168.1.86:9999/api/register', {
            crossDomain: true,
            method: 'POST',
            headers: {
                // "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control-Allow-Credentials": true,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    email: this.state.email,
                    name: this.state.name,
                    last_name: this.state.last_name,
                    password: this.state.password
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
            <>
                <div className="login-form login-signin" style={{ display: "block" }}>
                    <div className="text-center mb-10">
                        <h3>สมัครสมาชิก</h3>
                        <article>กรอกข้อมูลให้ครบถ้วน</article>
                    </div>

                    <form className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp"
                        onSubmit={this.handleSubmit}
                    >


                        {/* begin: Fullname */}
                        <div className="form-group fv-plugins-icon-container">
                            <input
                                placeholder="First name"
                                type="text"
                                className="form-control form-control-solid h-auto py-5 px-6"
                                name="firstname"
                                // value=""
                                onChange={(e) => this.setState({ name: e.target.value })}

                            />

                        </div>
                        {/* end: Fullname */}

                        {/* begin: Email */}
                        <div className="form-group fv-plugins-icon-container">
                            <input
                                placeholder="Email"
                                type="email"
                                className="form-control form-control-solid h-auto py-5 px-6"
                                name="email"
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />

                        </div>
                        {/* end: Email */}

                        {/* begin: Username */}
                        <div className="form-group fv-plugins-icon-container">
                            <input
                                placeholder="Lastname"
                                type="text"
                                className="form-control form-control-solid h-auto py-5 px-6"
                                name="lastname"
                                onChange={(e) => this.setState({ last_name: e.target.value })}
                            />

                        </div>
                        {/* end: Username */}

                        {/* begin: Password */}
                        <div className="form-group fv-plugins-icon-container">
                            <input
                                placeholder="Password"
                                type="password"
                                className="form-control form-control-solid h-auto py-5 px-6"
                                name="password"
                                onChange={(e) => this.setState({ password: e.target.value })}

                            />

                        </div>
                        {/* end: Password */}

                        {/* begin: Terms and Conditions */}
                        <div className="form-group">
                            <label className="checkbox">
                                <input type="checkbox" name="acceptTerms" />
                                <span class="m-1" />
            ยอมรับ
            <Link class="ml-1" to="/terms" target="_blank" rel="noopener noreferrer"> ข้กตกลง & เงื่อนไข</Link>.
            </label>

                        </div>
                        {/* end: Terms and Conditions */}
                        <div className="form-group d-flex flex-wrap flex-center">
                            <button
                                type="submit"

                                className="btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4"
                            >
                                <span>ตกลง</span>

                            </button>

                            <Link to="/auth/login">
                                <button
                                    type="button"
                                    className="btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4"
                                >
                                    ยกเลิก
            </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
