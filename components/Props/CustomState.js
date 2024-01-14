import React, {useState} from 'react';
import { View, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomState = (props) => {
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  return(
      <View>
        <View>
            <View style={{marginHorizontal:'5%', marginVertical:'5%'}}>

            <View style={{flexDirection:"row"}}>

              <View style={{flex:3, justifyContent: 'center'}}>
                <Pressable onPress={() => setLike(like + 1)}>
                  <Icon name="thumbs-up" color="#427D9D" />
                </Pressable>
                <Text style={{color:'#427D9D'}}>{ like }</Text>
              </View>

              <View style={{flex:1, justifyContent: 'center'}}>
                <Pressable onPress={() => setDislike(dislike + 1)}>
                    <Icon name="thumbs-down" color="#427D9D" />
                </Pressable>
                <Text style={{color:'#427D9D'}}>{ dislike }</Text>
              </View>

            </View>
          </View>
        </View>
      </View>
  )
}

export default CustomState;