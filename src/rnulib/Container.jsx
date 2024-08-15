import React from 'react';
import {View} from 'react-native-ui-lib';


export default function Container({children, style}) {
  return (
    <View flex bg-primaryColor centerV padding-10 style={style}>
      {children}
    </View>
  );
}
