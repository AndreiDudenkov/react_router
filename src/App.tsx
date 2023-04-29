import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Routes, Route, Outlet, useParams} from 'react-router-dom'

const Profile = () => {
    const some = useParams()
    return <div>profileuseParams</div>
}





function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>-main-</NavLink>
            <NavLink to={'/user_login'}>-login-</NavLink>
            <NavLink to={'/profile'} className={({isActive})=>isActive? 'used':'unUsed'}> -profile-</NavLink>
            <NavLink to={'/profile/1'}>-profile/1-</NavLink>

            <Routes>
                <Route path={'/*'} element={<div>-Error 404-</div>}/>
                <Route path={'/'} element={<div>-main-</div>}/>
                <Route path={'/user_login'} element={<div>-login-</div>}/>
                <Route path={'/profile'} element={<div>-profile-</div>}/>
                <Route path={'/profile/:id'} element={<Profile/>}/>
            </Routes>
</div>
)
}

export default App;
