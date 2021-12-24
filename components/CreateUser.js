import React, {useRef} from 'react'
import { View, Text, TextInput,StyleSheet, Button } from 'react-native'

function CreateUser({ username,email, onChange, onCreate}) {
    const secondInput = useRef()
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='User name'
                onChangeText={(e) => onChange("username", e) }
                value={username}
                onSubmitEditing={()=>secondInput.current.focus()}
            />
            <TextInput 
                style={styles.input}
                placeholder='User name'
                onChangeText={(e) => onChange("email", e) }
                value={email}
                ref={secondInput}
            />
            <Button 
                title="등록"
                color="#841584"
                onPress={onCreate}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 50,
      width: 300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f44336'
    }
  });

  export default React.memo(CreateUser);
