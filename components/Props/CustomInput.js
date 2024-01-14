import React from 'react';
import { View, TextInput, Text } from 'react-native';

const CustomInput = (props) => {
  return(
      <View>
        <Text style={{marginTop:10, fontWeight:'bold'}}>{props.inputText}</Text>
        <TextInput
          value={props.inputValue}
          style={props.inputTextStyle}
          keyboardType={"default"}
          placeholder={props.inputTextHolder}
          secureTextEntry={props.hide}
        />
      </View>
  )
}

export default CustomInput;