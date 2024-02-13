import React from 'react'
import { GoogleLogin } from 'react-google-login';
const ClientId="292583621362-jl1f7dolha2o3o7ckhf6el5amnfe0713.apps.googleusercontent.com";

export default function login() {
   const onSuccess=(res)=>{
    console.log("login success",res.profileObj)
   }
   const onFailure =(res)=>{
    console.log("login fail",res)
   }
  return (
    <div>
     <GoogleLogin
      clientId={ClientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
    </div>
  )
}
