import React, { useContext } from "react";
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Touchable} from 'react-native';
import {Context} from "../context/BlogContext";
import { AntDesign } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost} = useContext(Context);

   return (
    <View>
            <FlatList 
                data={state}
                keyExtractor={(BlogPost) => BlogPost.title}
                renderItem={({item}) => {
                    return(
                    <TouchableOpacity onPress={ () => navigation.navigate('Show', { id: item.id })}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <AntDesign name="delete" style={styles.icon}/>
                            </TouchableOpacity>      
                        </View>
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
       
   );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
    ) 
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'black'
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;