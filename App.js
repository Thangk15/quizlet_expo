import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/component/AuthNavigator';
import { Dimensions } from 'react-native';
import Search from './src/screen/Search';
import Create from './src/screen/Create';
import CreateFolder from './src/screen/CreateFolder';
import OptionTest from './src/screen/OptionTest';
import Flashcards from './src/component/FlashCards';
import Flashcard_List from './src/component/FlashCard_List';
import Flashcard from './src/screen/FlashCard';
import Test from './src/screen/Test';
var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      {/* <Search/> */}
      {/* <Create/> */}
      {/* <CreateFolder/> */}
      <NavigationContainer>
        <AuthNavigator/>
      </NavigationContainer>
      {/* <OptionTest/> */}
      {/* <Flashcards/> */}
      {/* <Flashcard_List/> */}
     {/* <Login/> */}
     {/* <Flashcard/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:widthfull,
    height:heightfull
  },
});
