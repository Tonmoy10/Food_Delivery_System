import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'

const GoogleLogin2 = () => {
    let navigate = useNavigate()
    const clientId = '1048941969416-8n4ct1b61jop3kdovfa133mronh4bsrv.apps.googleusercontent.com'
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            })
        }
        gapi.load('client:auth2', initClient)
    })
    const onSuccess = res => {
        navigate('/dashboard/customer')
    }
    const onFailure = err => {
        console.log('failed:', err)
    }
    return <GoogleLogin clientId={clientId} buttonText='Sign in with Google' onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} isSignedIn={true} />
}

export default GoogleLogin2
