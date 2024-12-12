import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Task = ({ text, completed, onAction }) => {
  
  const showOptions = () => {
    Alert.alert(
      'Choose an option',
      '',
      [
        {
          text: 'Task Completed',
          onPress: () => onAction('complete')
        },
        {
          text: 'Delete Task',
          onPress: () => onAction('delete')
        },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={[styles.item, { backgroundColor: completed ? 'lightblue' : 'white' }]}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <TouchableOpacity style={styles.circular} onPress={showOptions} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'lightblue',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    height: 12,
    width: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 3,
  },
});

export default Task;
