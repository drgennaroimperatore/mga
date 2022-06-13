import React from 'react'

import {View, Text , Image} from 'react-native'

export default function WelcomeHeader(pros)
{
 return (
 <View>
     <View>
         <Text> Hello </Text>
         <Image source ={{uri: 'https://via.placeholder.com/65'}} />
          </View> 
          <Text> Level 3 </Text>
</View>
 );
}