import React from 'react';
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right
  } from "native-base";
import {View, Image} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import commonStyles from '../../Common/Styles';

const logo = require('../../Images/dummylogo.png')


const Home = (props) => {
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => props.navigation.openDrawer()}>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body style={commonStyles.headerContent}>
                    {/* <Title>Home Screen</Title> */}
                    <Image source={logo} style={commonStyles.logo}/>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='search' />
                    </Button>
                </Right>
            </Header>
            <Grid>
                <Row>
                    <Col style={{ backgroundColor: 'red'}}></Col>
                    <Col style={{ backgroundColor: 'blue'}}></Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: '#fff'}}></Col>
                    <Col style={{ backgroundColor: 'black'}}></Col>
                    <Col style={{ backgroundColor: 'orange'}}></Col>
                </Row>
            </Grid>
        </Container>
    )
}

export default Home