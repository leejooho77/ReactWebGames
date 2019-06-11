import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Icon, Menu, Row } from 'antd';

const Layout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link to="/">
                        <Icon type="home" />
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="ghostlegs">
                    <Link to="/ghostlegs">
                        <Icon type="pause" /> Ghost Legs
                    </Link>
                </Menu.Item>
                <Menu.Item key="about">
                    <Link to="/about">
                        <Icon type="question-circle" /> About
                    </Link>
                </Menu.Item>
            </Menu>
            <Row>
                <Col xs={0} md={6} style={{border: "1px solid gray"}}>
                    1
                </Col>
                <Col xs={24} md={12} style={{border: "1px solid gray"}}>
                    {children}
                </Col>
                <Col xs={0} md={6} style={{border: "1px solid gray"}}>
                    3
                </Col>
            </Row>
        </div>
    );
};

export default Layout;