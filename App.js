import React, { useState } from 'react';
import { View, Text, Alert, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Task from './components/Task';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([
    { text: "shopping", completed: false },
    { text: "eating", completed: false }
  ]);

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      setTasks([
        ...tasks,
        { text: inputValue, completed: false }
      ]);
      setInputValue('');
    }
  };

  const handleTaskAction = (index, action) => {
    let updatedTasks = [...tasks];

    if (action === 'complete') {
      updatedTasks[index].completed = !updatedTasks[index].completed;
    } else if (action === 'delete') {
      updatedTasks.splice(index, 1);
    }

    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>

      <ScrollView style={styles.taskswrap}>
        <Text style={styles.taskTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {tasks.map((task, index) => (
            <Task
              key={index}
              text={task.text}
              completed={task.completed}
              onAction={(action) => handleTaskAction(index, action)}
            />
          ))}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d2d9',
    justifyContent: 'space-between'
  },
  taskswrap: {
    paddingTop: 40,
    paddingHorizontal: 20
  },
  taskTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    paddingLeft: 20,
    marginHorizontal: 5,
    fontSize: 15,
    fontWeight: '600'
  }
});

export default App;
