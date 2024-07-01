import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Ingredients = ({ route }) => {
  //states
  const [recetary, setRecetary] = useState({});

  // params data
  const { userData} = route.params;

  //functions
  const addIngredients = (ingredient) => {
    const totalData = {
      ...recetary,
      ingredients: [...recetary.ingredients, ingredient],
    };
    console.log(totalData);
  };

  const editIngredients = (data) => {
    const totalData = recetary.ingredients.filter((ingredient) => {
      return ingredient.id !== data.id;
    });
    const endData = { ...recetary, ingredients: totalData };
    console.log(totalData);
    console.log(endData);
  };

  const deleteIngredients = (id) => {
    const totalData = recetary.ingredients.filter((ingredient) => {
      return ingredient.id !== id;
    });
    console.log(totalData);
  }; 

  //states
  useEffect(() => {
    setRecetary(userData);
  }, []);

  return (
    <View>
      <View>
        <Text>{recetary.name}</Text>
        <Text>{recetary.time}</Text>
        <Text>{recetary.description}</Text>
        <Text>{recetary.date}</Text>
      </View>
      <Text>Ingredients</Text>
      <FlatList
        data={recetary.ingredients}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.quantity}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Ingredients;
