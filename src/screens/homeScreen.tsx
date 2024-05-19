import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';


const HomeScreen = ({ navigation }: any) => {
    function navToGallery  (){
        navigation.navigate('Gallery')
    }
    return (
        <View>
            <Text>Home</Text>

            <Button title='Go To gallery' onPress={navToGallery} />
        </View>
    )
}

export default HomeScreen
