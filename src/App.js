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
        <Route>
            <Error/>
        </Route>
    </Switch>
  )
}

export default App
