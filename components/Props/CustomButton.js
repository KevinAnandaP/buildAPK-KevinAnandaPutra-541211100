import React from 'react';
import { View, Pressable, Text } from 'react-native';

const CustomButton = (props) => {
  return(
      <View style={{alignItems:'center'}}>
        <Pressable
        onPress={props.btnPress}
        style={props.btnStyle}>
          <Text style={props.btnTextStyle}>{props.btnText}</Text>
        </Pressable>
      </View>
  )
}

export default CustomButton;