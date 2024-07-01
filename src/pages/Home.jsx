import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import FormRecet from "../components/home/FormRecet";
import LogicUser from "../hooks/LogicUser";
import ReceCard from "../components/home/ReceCard";

const Home = () => {
  //state
  const [userData, setUserData] = useState([]);
  
  //custom Hooks
  const { 
    renderData, 
    simpleRender, 
    controlData, 
    deleteRecetary, 
    changeItem } =
    LogicUser();

  //render custom funtions
  const renderUserData = async (data) => {
    const totalData = await renderData(data, userData);
    setUserData(totalData);
  };

  const deleteRecetaryItem = async (id) => {
    const dataEnd = await deleteRecetary(id);
    setUserData(dataEnd);
  };
  const changeData = async (data) => {
    const dataEnd = await changeItem(data);
    setUserData(dataEnd);
  };

  //effects
  useEffect(() => {
    const fetchData = async () => {
      const totalData = await simpleRender();
      setUserData(totalData);
    };

    fetchData();
  }, []);

  return (
    <View>
      <Button
        title="Add Recetary"
        onPress={() => console.log("add recetary")}
      />
      <FormRecet renderUserData={renderUserData} />
      <View>
        <FlatList
          data={userData.filter((item) => item !== null)}
          renderItem={({ item }) => (
            <ReceCard
              userData={item}
              deleteRecetaryItem={deleteRecetaryItem}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
