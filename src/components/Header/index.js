import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 30;

export function Header(props) {
    return (
        <View style={styles.container}>

            <StatusBar style='auto' backgroundColor='#020234' />

            <View style={styles.content}>

                <Text style={styles.userName}>{props.name}</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.userButton}>
                    <Feather name='user' size={27} color='#fff' />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#020234',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
        justifyContent: 'space-between'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    userButton: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 44,
    }
})