import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Actions } from '../../components/Actions';
import { Balance } from '../../components/Balance';
import { Header } from '../../components/Header';
import { Moviments } from '../../components/Moviments';

const list = [{
    id: 1,
    label: 'Água',
    valor: '150,89',
    data: '12/01/2022',
    tipo: 0
},
{
    id: 2,
    label: 'Luz',
    valor: '135,96',
    data: '25/10/2022',
    tipo: 0
},
{
    id: 3,
    label: 'Pagamento Mensalidade',
    valor: '235,00',
    data: '02/03/2022',
    tipo: 1
},
]

export function Home() {
    return (
        <View style={styles.container}>
            <Header name='Mauricio Ferreira' />
            <Balance saldo='20.000,00' gastos='2.000,00' />

            <Actions />
            <Text style={styles.title}>Ultimas movimentações</Text>

            <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={ ({ item }) => <Moviments data={item}/> } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list: {
        marginHorizontal: 14,
    }
})