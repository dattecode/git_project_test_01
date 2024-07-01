import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Edit" component={Ingredients} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;
