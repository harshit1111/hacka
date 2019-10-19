import React , { Component } from 'react'
import Particles from 'react-particles-js'
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import { firebase } from '../../firebase'

const particlesOpt = {
        particles : {
            number : {
                value : 150,
                density : {
                    enable : true,
                    value_area : 800
                }
            }
        }
}

class Login extends Component{

    state = {
        address : 1234,
        balance : 124,
        name : `harshit`,
        location : "171717",
        role : "developer",
        batchId  : 1,
        desc : `hi there`,
        farmer : "jindal",
        location : "delhi",
        quantity  :15,
        shipper : 'anubhav',
        mname : "harshit",
        maddress : "ranchi",
        mlocation : "dehradun",
        dname : "vishesh",
        daddress:"hong kong",
        dlocation : "mirzapur"
    }

   loginHandler = () => {
        const email = this.state.email;
        const password = this.state.password;

        console.log(email)
        console.log(password)

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => {
            console.log("success")
            console.log(user)
            console.log(this.props)
            this.props.history.replace("/admin")
        })
        .catch(err => {
            console.log("error")
            console.log(err)
        })

    }

    handleChange = (event,target) => {

        if(target === 'email'){
            this.setState({
                email : event.target.value
            })
        }else{
            this.setState({
                password : event.target.value
            })
        }
    }

    render(){

        return(
            <div>
               
                <div className="container p-5" style={{background:"white",marginTop:"60px",width:"80%",borderRadius:"15px"}}>
                    <div className="row mb-5">
                        <div className="col text-center common-heading">
                            <h2 className="display-2">Pharma</h2>
                        </div>
                    </div>
                    <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Eth Address : <span className="distributor-text">
                                    {this.state.address}</span></h2>
                                </div>
                    </div>
                    <div className="row mb-3">
                                <div className="col pl-5">
                                    <h2 className="distributor-text">Balance : <span className="distributor-text">
                                    {this.state.balance}</span></h2>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Name : <span className="distributor-text">
                                    {this.state.name}</span></h2>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Location : <span className="distributor-text">
                                    {this.state.location}</span></h2>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Name : <span className="distributor-text">
                                    {this.state.role}</span></h2>
                                </div>
                        </div>
                
                        <div className="container" style={{
                   
                }}>
                    <div className="row mt-5 p-2">
                        <div className="col-12 col-md-5 p-4" style={{
                             border: `1px solid yellow`
                        }}>
                        <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">BatchId : <span className="distributor-text">
                                    {this.state.batchId}</span></h2>
                                </div>
                        </div>
                        <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Description : <span className="distributor-text">
                                    {this.state.desc}</span></h2>
                                </div>
                        </div>
                        <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Farmer Name : <span className="distributor-text">
                                    {this.state.farmer}</span></h2>
                                </div>
                        </div>
                        <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Location : <span className="distributor-text">
                                    {this.state.location}</span></h2>
                                </div>
                        </div>
                        <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Quantity : <span className="distributor-text">
                                    {this.state.quantity}</span></h2>
                                </div>
                        </div>
                        <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Shipper : <span className="distributor-text">
                                    {this.state.shipper}</span></h2>
                                </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-5 p-4 ml-auto" style={{
                             border: `1px solid yellow`
                        }}>
                        <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Manufacturer Name : <span className="distributor-text">
                                    {this.state.mname}</span></h2>
                                </div>
                        </div>
                        <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Manufacturer Address : <span className="distributor-text">
                                    {this.state.maddress}</span></h2>
                                </div>
                        </div>
                        <div className="row mb-3">
                                <div className="col pl-5">
                                <h2 className="distributor-text">Manufacturer Location : <span className="distributor-text">
                                    {this.state.mlocation}</span></h2>
                                </div>
                        </div>
                        </div>
                        
                    </div>
                    <div className="row mt-5">
                        <div className="col-8 mx-auto" style={{border:"1px solid purple"}}>
                            <div className="row mt-5 mb-3" >
                                <div className="col mx-auto pl-5">
                                <h2 className="distributor-text">Distributor Name : <span className="distributor-text">
                                    {this.state.dname}</span></h2>
                                </div>
                            </div>
                            <div className="row mb-3" >
                                <div className="col mx-auto pl-5">
                                <h2 className="distributor-text">Distributor Address : <span className="distributor-text">
                                    {this.state.daddress}</span></h2>
                                </div>
                            </div>
                            <div className="row mb-3" >
                                <div className="col mx-auto pl-5">
                                <h2 className="distributor-text">Distributor Location : <span className="distributor-text">
                                    {this.state.dlocation}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                        <Button className="btn btn-block btn-outline-danger mx-auto" 
                            style={{width:"60%" ,
                            background:"linear-gradient(to right,rgba(205,52,181),rgba(0,0,0))",
                            borderRadius:"10px",
                            fontSize:"20px"}}
                            >Validate</Button>
                            
                        </div>
                    </div>
                    
                </div>
                   
                </div>

                
            
                <Particles params={particlesOpt} style={{height : "200vh" ,background : 'linear-gradient(to right,rgba(205,52,181),rgba(68,166,187))' ,position :"absolute",minHeight:"300vh" , top:"0" , left : "0", zIndex:"-10"}} />
               
                
            </div>
            
                
                    

            
        )
        
       
    }
}

export default Login