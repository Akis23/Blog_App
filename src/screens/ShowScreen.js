import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext';
import { Foundation } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find( (blogPost) => blogPost.id === navigation.getParam('id') );

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight:() => (
            <TouchableOpacity onPress={ () => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <Foundation name="pencil" size={30} color="black" />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({});

export default ShowScreen;
