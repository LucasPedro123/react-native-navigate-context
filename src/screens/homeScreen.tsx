import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { UserContext } from '../contexts/userContext';

const HomeScreen = ({ navigation }: any) => {
    const context = useContext(UserContext);

    function navToGallery() {
        navigation.navigate('Gallery');
    }

    return (
        <View>
            <Text>Bem vindo, {context?.userName || "Nada"}</Text>
            <Button title="Go To Gallery" onPress={navToGallery} />
        </View>
    );
};

export default HomeScreen;
