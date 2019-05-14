import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

 class Dashboard extends Component {
   render() {
     return (
       <Container>
         {/* <Header /> */}
         <Content>
           <Card >
             <CardItem>
               <Left>
                 <Thumbnail source={require('../img/user.png')} />
                 <Body>
                   <Text>NativeBase</Text>
                   <Text note>GeekyAnts</Text>
                 </Body>
               </Left>
               <Right>
                 <Text>11h ago</Text>
               </Right>
             </CardItem>

             <CardItem style={{marginTop:-20}}>
               <Left>
                 <Button transparent>
                   <Icon active name="heart" />
                   <Text>12 Likes</Text>
                 </Button>
               </Left>
               <Body>
                 <Button transparent>
                   <Icon active name="comment" />
                   <Text>4 Comments</Text>
                 </Button>
               </Body>

             </CardItem>
           </Card>
         </Content>

         {/* <TabsItem /> */}
       </Container>


     );


   }
}
export default Dashboard;