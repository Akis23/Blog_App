import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button} from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return (
        <View style={styles.View}>
            <Text style={styles.TitleContent}>Enter Title:</Text>
            <TextInput
                style={styles.Input}
                value={title}
                onChangeText={ (text) => setTitle(text)}
            />
            <Text style={styles.TitleContent}>Enter Content:</Text>
            <TextInput
                style={styles.Input}
                value={content}
                onChangeText={ (text) => setContent(text) }
            />
            <Button
                title = 'add Blog Post'
                onPress= {() => 
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    })
                }
            />
        </View>
    );
};



const styles = StyleSheet.create({
    Input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom:15,
        padding: 5,
        //margin: 5
    },
    View: {
        margin: 50
    },
    TitleContent:{
        fontSize: 22,
        marginBottom: 5
    }
});

export default CreateScreen;