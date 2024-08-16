import React from 'react';
import {ViewStyle} from 'react-native';
import {View} from 'react-native-ui-lib';

interface props {
  style?: ViewStyle;
  children: React.ReactNode;
}
export default function Container({style, children}: props) {
  return (
    <View flex bg-primaryColor centerV padding-10 style={style}>
      {children}
    </View>
  );
}
