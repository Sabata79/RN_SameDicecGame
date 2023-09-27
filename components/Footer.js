import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../style/styles.js';

export default Footer = () => {
    return (
        <View style={Styles.footer}>
            <Text style={Styles.author}>
                Author: Pekka Ojala
            </Text>
        </View>
    )
}