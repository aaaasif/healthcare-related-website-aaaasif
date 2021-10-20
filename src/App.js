import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import FindDoctors from './Pages/FindDoctors/FindDoctors';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignIn from './Pages/Shared/Header/SignIn/SignIn';
import Resister from './Pages/Shared/Header/Resister/Resister';
import Booking from './Pages/Booking/Booking';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Shared/Header/SignIn/PrivateRoute/PrivateRoute';
import Telemedicine from './Pages/Telemedicine/Telemedicine';
import DoctorDetails from './Pages/FindDoctors/DoctorDetails/DoctorDetails';
import ServiceDetails from './Pages/Home/Services/ServiceDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/service/:Id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route exact path="/finddoctors">
              <FindDoctors></FindDoctors>
            </Route>

            <PrivateRoute path="/finddoctors/:doctorId">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>

            <PrivateRoute path="/telemedicine">
              <Telemedicine></Telemedicine>
            </PrivateRoute>
            
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/signin">
              <SignIn></SignIn>
            </Route>

            <Route path="/resister">
              <Resister></Resister>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
