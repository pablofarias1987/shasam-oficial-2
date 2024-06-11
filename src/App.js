import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error404 from "./containers/errors/Error404";
import Home from "./containers/Home";
import Navbar from "./components/navigation/Navbar";
import { Footer } from "./components/navigation/Footer";
import Signup from './containers/auth/Signup';
import Login from './containers/auth/Login';
import Activate from './containers/auth/Activate';
import ResetPassword from "./containers/auth/ResetPassword";
import ResetPasswordConfirm from './containers/auth/ResetPasswordConfirm';
import Cart from "./containers/pages/Cart";
import Checkout from './containers/pages/Checkout';
import Shop from './containers/Shop';
import Search from './containers/pages/Search';
import ProductDetail from './containers/pages/productDetail';
import ThankYou from './containers/pages/ThankYou';
import Dashboard from './containers/pages/Dashboard';
import DashboardPayments from './containers/pages/DashboardPayments';
import DashboardPaymentDetail from './containers/pages/DashboardPaymentDetail';
import DashboardProfile from "./containers/pages/DashboardProfile";
import { Alcohol } from "./containers/treatments/alcohol";
import{ Addictions } from "./containers/treatments/addictions";
import{ Programmes } from "./containers/pages/programmes";
import{ Cannabis } from "./containers/treatments/cannabis";
import { Cocaina } from "./containers/treatments/Cocaina";
import { Pastillas } from "./containers/treatments/Pastillas";
import { Tecnologia } from "./containers/treatments/Tecnologia";
import { Sexo } from "./containers/treatments/Sexo";
import { Ludopata } from "./containers/treatments/Ludopata";
import { PastaBase } from "./containers/treatments/Pasta_base";
import {  Index} from "./containers/pages/index";
import {  About} from "./containers/pages/about"

function App() {
  return (
    <Provider store={store}>
    <Router>
    <Navbar />
        <Routes>
            <Route path="*" element={<Error404/>}/>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='/checkout' element={<Checkout/>}/>
          {/* Authentication */}
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/activate/:uid/:token' element={<Activate/>}/>
          <Route exact path='/reset_password' element={<ResetPassword/>} />
          <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />

          <Route exact path='/shop' element={<Shop/>}/>
          <Route exact path='/product/:productId' element={<ProductDetail/>}/>
          <Route exact path='/search' element={<Search/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/dashboard/payments' element={<DashboardPayments/>}/>

          <Route exact path='/dashboard/payment/:transaction_id' element={<DashboardPaymentDetail/>}/>
          <Route exact path='/thankyou' element={<ThankYou/>}/>    
          <Route exact path='/dashboard/profile' element={<DashboardProfile/>}/>      
           {/* nav bar rutas*/}
          
          <Route exact path='/programmes' element={<Programmes/>}/> 
          <Route exact path='/addictions'element={<Addictions/>}/>
          <Route exact path='/alcohol'element={<Alcohol/>}/>
          <Route exact path='/cannabis'element={<Cannabis/>}/>
          <Route path="/cocaina" element={<Cocaina />} />       
        <Route path="/pastillas" element={<Pastillas />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/sexo" element={<Sexo />} />
        <Route path="/ludopata" element={<Ludopata />} />
        <Route path="/pasta_base" element={<PastaBase />} />
        <Route path="/index" element={<Index />} />
        <Route path="/about" element={<About />}/>
        </Routes>
        <Footer />
    </Router>
    </Provider>
  );
}

export default App;
