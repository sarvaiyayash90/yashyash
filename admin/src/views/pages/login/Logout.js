import React, { useEffect } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true
const Logout = () => {

    useEffect(()=>{

        axios.post('http://localhost:5000/admin_logindata/admin_logout')
            .then((res) => {
                localStorage.removeItem('Auth_check');
                window.location.href="/";
            }).catch((error) => {
                
            })
    })
    
    return (<div></div>);
}
 
export default Logout ;