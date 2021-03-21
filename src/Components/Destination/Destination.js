import React from 'react';
import { Link } from 'react-router-dom';
import map from '../../urban-riders-main/images/Map.png';
import './Destination.css';

const Destination = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col md-4">
                    <form className="form" action="">
                        <p>Pick From</p>
                        <input type="text" placeholder="Enter Place name" />
                        <br/>
                        <p>Pick To</p>
                        <input type="text" placeholder="Enter Place name" />
                        <br/>
                        <br/>
                        <Link to="/contact" className="btn btn-warning">Search</Link>
                    </form>
                </div>
                <div className="col md-8">
                    <img style={{height:'520px'}} src={map} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Destination;