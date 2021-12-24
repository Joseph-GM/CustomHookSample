import React from 'react'
import { View, Text } from 'react-native'
import User from './User';

function UserList({users, onRemove, onToggle}) {
    return (
        <View>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </View>
    )
}

export default React.memo(UserList);
