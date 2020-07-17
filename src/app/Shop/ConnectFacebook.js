import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// import FacebookLogin from 'react-facebook-login';

export default class ConnectFacebook extends Component {

    render() {
        const responseFacebook = (response) => {
            console.log(response);
            this.setState({
                name: response.name
            })
        }
        console.log(this.state);

        const componentClicked = () => {
            console.log("as");
        }

        const btnFacebook = <FacebookLogin
            appId="895210694323561"
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            render={renderProps => (
                <button onClick={renderProps.onClick} className="btn btn-lg btn-facebook font-weight-bold"><span>เชื่อมต่อกับบัญชี Facebook</span></button>
            )} />
    
        return (
            <>
                {btnFacebook}
            </>
        )

    }
}
