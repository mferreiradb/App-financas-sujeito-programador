import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Balance(props) {
    return (
        <View style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{props.saldo}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.spending}>{props.gastos}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        marginTop: -24,
        marginHorizontal: 14,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 22,
        zIndex: 99,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemTitle: {
        color: '#DADADA',
        fontSize: 20,
    },
    currencySymbol: {
        color: '#DADADA',
        marginRight: 6,
    },
    balance: {
        color: '#2ecc71',
        fontSize: 22,
    },
    spending: {
        color: '#e74c3c',
        fontSize: 22,
    }
})