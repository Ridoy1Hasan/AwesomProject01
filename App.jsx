import { View, Text, Button } from 'react-native'
import React from 'react'
import First from './src/components/First';
const App = () => {
  return (
    <View>
      <Text>Noob developer</Text>
      <Text style={ { fontSize : 5 } }>I love Shuhashini.</Text>
      <Button title="PressHere" />
      <First/>
      <First/>
      <First/>
      <First/>
    </View>
  )
}

// const First = () =>{
//   return(
//     <View>
//       <Text style={ { fontSize : 40 } }>I love Shuhashini.</Text>
//     </View>
//   );
// };

export default App