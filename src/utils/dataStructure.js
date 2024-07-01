import AsyncStorage from "@react-native-async-storage/async-storage";

// data
export const recetary = {
  name: "",
  date: new Date(),
  time: "",
  description: "",
  ingredients: [],
  totalRecetaryPrice: 0,
  id: "",
};

export const ingredient = {
  name: "",
  quantity: 0,
  totalQuantity: 0,
  price: 0,
  totalPrice: 0,
  id:"",
};

export const addRecetary = async (data) => {
  try {
    await AsyncStorage.setItem("recetary", JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

export const getRecetary = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("recetary");
    if(jsonValue != null) {
      const parsedData = JSON.parse(jsonValue);
      return Array.isArray(parsedData) ? parsedData : [];
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
