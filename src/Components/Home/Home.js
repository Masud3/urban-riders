import React from 'react';
import { Card } from 'react-bootstrap';
import bike from '../../urban-riders-main/images/bike.png';
import car from '../../urban-riders-main/images/car.png';
import bus from '../../urban-riders-main/images/bus.png';
import train from '../../urban-riders-main/images/train.png';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div className="card-container">
                <Card className="card">
                    <Card.Img src={bike} />
                    <Link className="btn btn-info" to="/destination">BIKE</Link>
                </Card>
                <Card className="card">
                    <Card.Img src={car}/>
                    <Link className="btn btn-info" to="/destination">CAR</Link>
                </Card>
                <Card className="card">
                    <Card.Img src={bus}/>
                    <Link className="btn btn-info" to="/destination">BUS</Link>
                </Card>
                <Card className="card">
                    <Card.Img src={train}/>
                    <Link className="btn btn-info" to="/destination">TRAIN</Link>
                </Card>
            </div>
        </div>
    );
};

export default Home;