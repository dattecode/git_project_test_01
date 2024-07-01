import React from 'react'
import { useController } from 'react-hook-form';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ name, control }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    margin: 10,
  },
});

export default Input