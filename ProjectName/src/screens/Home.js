import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Modal,
  Pressable,
  Appearance
} from 'react-native';


import { IconHome, IconAlert } from '../assets/icons';

import QuickPay from '../features/quickPay/QuickPay';

import StarAccount from '../features/accountCard/StarAccount';

import TransactionList from '../features/transactionList/TransactionList';

import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import ServiceMessages from '../features/serviceMessages/ServiceMessages';
import HomeHeaderTitle from '../components/ServiceBell/ServiceBell';

// import { firestore } from '../config'
import { isDarkMode } from '../store/themeToggleSlice';
import DarkModeStyle from '../theme/DarkModeStyle';
import { AppState } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import BlurScreen from '../components/BlurScreen/BlurScreen';



const Home = () => {

  const dispatch = useDispatch()
  const darkmode= useSelector(state => state.themeToggle)
  Appearance.addChangeListener((scheme) =>{
 
    dispatch(isDarkMode({scheme : scheme.colorScheme}))

  })

   useEffect(() => {
    const appStateListener = AppState.addEventListener(
      'change',
      nextAppState => {
        // console.log('Next AppState is: ', nextAppState);
        setAppState(nextAppState);
       
      },
    );
    return () => {
      appStateListener?.remove();
    };
  }, []);
const  [appState, setAppState] = useState(AppState.currentState)
console.log(appState)



  const [payAccounts, setPayAccounts] = useState([
    {id: 1, name: 'Alloment Weal'},
    {id: 2, name: 'Cian Byrne'},
    {id: 3, name: 'Yike Gao'},
    {id: 4, name: 'Tianyi Wang'},
    {id: 5, name: 'Linghan Jing'},
    {id: 6, name: 'Ryan Veale'},
    {id: 7, name: 'Chetanya Kandhari'},
    {id: 8, name: 'Yoeri Percy'},
    {id: 9, name: 'Harry Potter'},
    {id: 10, name: 'Zheng Sun'},
    {id: 11, name: 'nyan tsabjnx'},
  ]);

  const modalToggle = useSelector(state => state.modalToggle);

  return (
    <SafeAreaView style={darkmode.scheme == 'dark'? DarkModeStyle.container: styles.container}>


        <Modal animationType="slide" visible={modalToggle.active} presentationStyle="overFullScreen" transparent={true}>
          <ServiceMessages />
        </Modal>


<QuickPay payAccounts={payAccounts} />
        <StarAccount />
       
     <View style ={{flex:1}}>
     <TransactionList />
     </View>
    
   

  {appState != 'active'?<BlurScreen/>: null}
  
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingVertical: 14,

    display: 'flex',
    flex: 1,
  },
  darkContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  absolute: {
    position:'absolute',
    top:0
  },
});

export default Home;
