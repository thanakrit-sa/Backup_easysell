import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import RegisterFacebook from './RegisterFacebook'

export default class Facebook extends Component {
    state = {
        name: ""
    }
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
            autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,user_friends,user_actions.books"
            onClick={componentClicked}
            callback={responseFacebook}
            render={renderProps => (
                <button className="btn btn-lg btn-block btn-facebook font-weight-bold"><span>Facebook</span></button>
            )}
        />

        return (
            <>
                <div hidden>{btnFacebook}</div>
                <RegisterFacebook />
            </>
        )
    }
}


