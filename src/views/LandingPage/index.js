import React from "react";
import { Link } from "react-router-dom";
import 'animate.css';
import { Card, Col, Layout, Row, Menu } from 'antd';

function LandingPage(props) {
  return (
    <Layout style={{backgroundColor: 'white',}}> 
      <Menu style={{backgroundColor: '#1890ff', color: 'white', fontSize: '30px ', padding: '10px'}} mode="horizontal" 
      items={[
        {
          label: 'Jalasoft',
        }
      ]} />
    
    <section className="hero-section animate__animated animate__fadeIn" id="test1">
    <h2 style={{color: '#767676', padding: '30px 0px', textAlign: 'center', fontSize: '26px', lineHeight: '1', fontWeight: '500'}}>Welcome to my Demo for the DevTest.</h2>
  <div className="site-card-wrapper" >
    <Row gutter={12}>
      <Col span={4}>
  <Link to="/signup">
  <Card 
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://www.iconpacks.net/icons/2/free-user-signup-icon-3058-thumb.png" />}>
    <Card.Meta title="Sign Up" description="Click here to register" />
  </Card>
    
  </Link>
  </Col>
  <Col span={4}>
    <Link to="/signin">
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://i.ibb.co/7b9Zr9W/user-3055.png" />}>
    <Card.Meta title="Sign In" description="Click here to login" />
  </Card>
  
    </Link>
    </Col>
    <Col span={4}>
  <Link to='/messages'>
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://i.ibb.co/LhYS30d/speech-bubble-3112.png" />}>
    <Card.Meta title="Chat" description="Click here to start chatting" />
  </Card>
  </Link>
  </Col>
    </Row>
  </div>
</section>

</Layout>
  );
}

export default LandingPage;


