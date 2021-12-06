import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './global/Styles/Styles.css'
import Home from './user/screens/Home'
import About from './user/screens/About'
import Hospital from './user/screens/Hospital'
import HospitalInfo from './user/screens/HospitalInfo'
import Contact from './user/screens/Contact'
import SignUp from './user/screens/SignUp'
import Login from './user/screens/Login'
import Profile from './user/screens/Profile'
import Error from './user/screens/Error'
import NavigationBar from './user/components/NavigationBar'
import Footer from './user/components/Footer'
import NavigationBarAdmin from './admin/components/NavigationBarAdmin'
import Registration from './admin/screens/Registration'
import LoginHospital from './admin/screens/LoginHospital'
import AllAppointment from './admin/screens/AllAppointment'
import AllHospital from './admin/screens/AllHospital'
import AllUsers from './admin/screens/AllUser'
import HospitalProfile from './admin/screens/HospitalProfile'
import UpdateHospitalDetaile from './admin/screens/AddHospital'
import Dashboard from './admin/screens/Dashboard'

function App() {
  return (
    <Switch>
        <Route exact path="/">
           <NavigationBar path="/"/>
           <Home/>
           <Footer/>
        </Route>
        <Route exact path="/about">
           <NavigationBar path="/about"/>
           <About/>
           <Footer/>
        </Route>
        <Route exact path="/allhospital">
           <NavigationBar path="/allhospital"/>
           <Hospital/>
           <Footer/>
        </Route>
        <Route exact path="/allhospital/:id">
           <NavigationBar path="/allhospital"/>
           <HospitalInfo/>
           <Footer/>
        </Route>
        <Route exact path="/contact">
           <NavigationBar path="/contact"/>
           <Contact/>
           <Footer/>
        </Route>
        <Route exact path="/signup">
           <NavigationBar path="/signup"/>
           <SignUp/>
           <Footer/>
        </Route>
        <Route exact path="/login">
           <NavigationBar path="/login"/>
           <Login/>
           <Footer/>
        </Route>
        <Route exact path="/profile">
           <NavigationBar path="/profile"/>
           <Profile/>
           <Footer/>
        </Route>
        <Route exact path="/registerHospital">
            <NavigationBarAdmin path="/registerHospital"/>
            <Registration/>
            <Footer/>
        </Route>
        <Route exact path="/loginhospital">
            <NavigationBarAdmin path="/loginhospital"/>
            <LoginHospital/>
            <Footer/>
        </Route>
        <Route exact path="/allapointments">
            <NavigationBarAdmin path="/allapointments"/>
            <AllAppointment/>
            <Footer/>
        </Route>
        <Route exact path="/hospitalsall">
            <NavigationBarAdmin path="/hospitalsall"/>
            <AllHospital/>
            <Footer/>
        </Route>
        <Route exact path="/users">
            <NavigationBarAdmin path="/users"/>
            <AllUsers/>
            <Footer/>
         </Route>
         <Route exact path="/hospitalprofile/:id">
            <NavigationBarAdmin path="/hospitalprofile"/>
            <HospitalProfile/>
            <Footer/>
         </Route>
         <Route exact path="/updatehospitaldetailes">
            <NavigationBarAdmin path="/updatehospitaldetailes"/>
            <UpdateHospitalDetaile/>
            <Footer/>
         </Route>
         <Route exact path="/dashboard">
            <NavigationBarAdmin path="/dashboard"/>
            <Dashboard/>
            <Footer/>
         </Route>
        <Route>
            <Error/>
        </Route>
    </Switch>
  )
}

export default App
