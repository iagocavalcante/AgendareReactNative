import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  ImageBackground,
} from 'react-native';
import {Container, Body, Content} from 'native-base';

const Profile = () => {
  const backgroundDrawer = require('./../../assets/images/background-drawer.png');
  const profilePic = require('./../../assets/images/profile-pic.png');

  return (
    <Container>
      <ImageBackground
        style={{height: 160, width: '100%'}}
        source={backgroundDrawer}>
        <Body>
          <Image style={styles.drawerImage} source={profilePic} />
        </Body>
      </ImageBackground>
      <Content style={styles.content}>
        <Text>Teste</Text>
      </Content>
    </Container>
  );
};

const styles = {
  drawerImage: {
    zIndex: 4,
    top: 100,
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  content: {
    flex: 1,
    borderRadius: 5,
    alingItems: 'center',
  },
};

export default Profile;
