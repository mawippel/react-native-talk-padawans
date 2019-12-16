import React from 'react';

import { ImageBackground } from 'react-native';

const HomePage = () => {

  return (
    <ImageBackground source={require('../../assets/baby-yoda-2.jpg')} style={{ width: '100%', height: '100%' }} />
  );
};

export default HomePage;
