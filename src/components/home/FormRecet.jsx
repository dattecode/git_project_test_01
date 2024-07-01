import React, { useState } from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import { useForm } from "react-hook-form";
import Input from "../../hooks/Input";
import { recetary } from "../../utils/dataStructure";
import uuid from 'react-native-uuid';

const FormRecet = ({renderUserData}) => {
  const { handleSubmit, control, reset } = useForm();

  // controls errors
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const addRecetary = (data) => {

    //data verification
    if(!data.name || !data.time || !data.description) {
      setError(true)
      setErrorMessage("All fields are required")
      return
    }

    // data control
    const structureData = {
      ...recetary,
      ...data,
      id: uuid.v4(),
    } 

    structureData.date = structureData.date.toISOString().split('T')[0]

    // add data to storage
    renderUserData(structureData)
    
    // end process
    reset({
      name: "",
      time: "",
      description: "",
    });
    setError(false)
  };

  return (
    <View>
      <View>
        <Text>Name</Text>
        <Input name="name" control={control} />
        <Text>Time</Text>
        <Input name="time" control={control} />
        <Text>Description</Text>
        <Input name="description" control={control} />
        <Button 
          title="Add" 
          onPress={handleSubmit(addRecetary)}
        />
      </View>

      {error && <Text>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({});

export default FormRecet;
