import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

function User({user, onRemove, onToggle}) {
    return (
        <View style={styles.viewStyle}>
            <Text 
                style={{
                    fontSize: 15,
                    color: user.active? 'green' : 'black',
                    fontWeight: user.active? 'bold' : 'normal' 
                }}
                onPress={() => onToggle(user.id)}
            >
                {user.username} {user.email}
            </Text>
            <Button 
                title='삭제'
                onPress={() => onRemove(user.id)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        flexDirection: 'row'
    },
    textStyle : {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default React.memo(User);
