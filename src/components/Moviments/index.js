import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function Moviments({data}) {

    const [showValue, setShowValue] = useState(false)

    function visible() {
        setShowValue(!showValue)
    }

    return (
        <TouchableOpacity onPress={visible} style={styles.container}>
            <Text style={styles.date}>{data.data}</Text>
            
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>

                {
                    showValue ? (
                        <Text style={data.tipo === 1 ? styles.value : styles.spending }>{data.tipo === 1 ? `R$ ${data.valor}` : `- R$ ${data.valor}` }</Text>
                    ) : (
                        <View style={styles.hidden}></View>
                    )
                }
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#4F4F4F',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#4F4F4F',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    spending: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    },
    hidden : {
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 100
    }
})