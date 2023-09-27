import React, {useState, useEffect} from 'react';
import { Text, View ,Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../style/styles.js';

export default Header = () => {
    return (
        <View style={Styles.header}>
            <Text style={Styles.title}>
                Dices game
            </Text>
        </View>
    )
}