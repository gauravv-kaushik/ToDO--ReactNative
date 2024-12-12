import React, { useState } from 'react';
import { View, Text, Alert, Button, StyleSheet, TouchableOpacity,Platform, StatusBar, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Task from './components/Task';

const arr=["shopping","eating"]


const App=()=>{

  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    arr.push(inputValue);
    setInputValue('');
  };

  return(
    <View style={styles.container}>

      <ScrollView style={styles.taskswrap}>

        <Text style={styles.taskTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {arr.map((task)=><Task text={task}/>)}
        </View>

      </ScrollView>

      <View>
        <TextInput 
          placeholder='Enter a task to add'
          style={styles.textInput}
          value={inputValue}
          onChangeText={setInputValue}
        />

        <Button 
          title='ADD TASK'
          onPress={handleButtonClick}
        />
      </View>

    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
   backgroundColor:'#d2d2d9',
   justifyContent:'space-between'
  },
  taskswrap:{
    paddingTop:40,
    paddingHorizontal:20
  },
  taskTitle:{
    fontSize:25,
    fontWeight:"bold",
  },
  items:{
    marginTop:30,
  },
  textInput:{
    borderWidth:2,
    borderRadius:20,
    marginBottom:10,
    paddingLeft:20,
    marginHorizontal:5,
    fontSize:15,
    fontWeight:'600'
  }
})

export default App;