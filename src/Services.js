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
                        <Icon icon={iconObj[0].icon} title={iconObj[0].title} description={iconObj[0].description} />
                        <Icon icon={iconObj[1].icon} title={iconObj[1].title} description={iconObj[1].description} />
                        <Icon icon={iconObj[2].icon} title={iconObj[2].title} description={iconObj[2].description} />
                        <Icon icon={iconObj[3].icon} title={iconObj[3].title} description={iconObj[3].description} />                        
                    </div>
                </div>
            </div>
        );
    }
}

const iconObj = [
    {
        icon: <i class="fas fa-mobile-alt fa-2x" ></i>,
        title: "Responsive",
        description: "Duis ipsum est tempo"
    },
    {
        icon: <i class="fas fa-pencil-alt fa-2x"></i>,
        title: "Redesigned",
        description: "Duis ipsum est tempo"
    },
    {
        icon: <i class="far fa-thumbs-up fa-2x"></i>,
        title: "Featured",
        description: "Duis ipsum est tempo"
    },
    {
        icon: <i class="fab fa-quora fa-2x"></i>,
        title: "Question",
        description: "Duis ipsum est tempo"
    }
];

class Icon extends Component{
    render(){
        return(
            <div className="col ">
                <span className="rounded-circle bg-white p-5 ">{this.props.icon}</span>
                <h4 className="pt-5 text-white">{this.props.title}</h4>
                <p className="text-white">{this.props.description}</p>
            </div>
        );
    }
}

export default Services;