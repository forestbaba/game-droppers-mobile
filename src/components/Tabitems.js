import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import {Actions} from 'react-native-router-flux'
export default class TabsItem extends Component {

    loadPostLayout() {
        Actions.post();
    }
    loadProfileLayout() {
        Actions.profile();
    }

    render() {


        return (
            <Container>
                <Header />
                <Content />
                <Footer>
                    <FooterTab>
                        <Button badge vertical onPress={this.loadPostLayout}>
                            <Badge><Text>2</Text></Badge>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical onPress={this.loadPostLayout}>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button active badge vertical>
                            <Badge ><Text>51</Text></Badge>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}