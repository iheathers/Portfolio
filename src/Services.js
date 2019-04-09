import React, { Component } from 'react';
import './Services.css';

class Services extends Component {
    render(){
        return (
            <div className="services py-5">
                <h5 className="text-warning text-center text-uppercase">Services</h5>
                <h1 className="text-white text-center">What We Offer</h1>
                <div className="container py-5">
                    <div className="row ">
                        <div className="col ">
                           <span className="rounded-circle bg-white p-5 "><i class="fas fa-mobile-alt fa-2x" ></i></span>
                           <h4 className="pt-5 text-white">Responsive</h4>
                           <p className="text-white">lorem ipsum dito</p>
                        </div>
                        
                        <div className="col ">
                            <span className="rounded-circle bg-white p-5 "><i class="fas fa-pencil-alt fa-2x"></i></span>
                            <h4 className="pt-5 text-white">Redesigned</h4>
                            <p className="text-white">lorem ipsum dito</p>
                        </div>

                        <div className="col">
                            <span className="rounded-circle bg-white p-5 "><i class="far fa-thumbs-up fa-2x"></i></span>
                            <h4 className="pt-5 text-white">Favourited</h4>
                            <p className="text-white">lorem ipsum dito</p>
                        </div>

                        <div className="col">
                            <span className="rounded-circle bg-white p-5 "><i class="fab fa-quora fa-2x"></i></span>
                            <h4 className="pt-5 text-white">Question</h4>
                            <p className="text-white">lorem ipsum dito</p>
                        </div>
                    </div>

                </div>

            </div>



        );

    }

}

export default Services;