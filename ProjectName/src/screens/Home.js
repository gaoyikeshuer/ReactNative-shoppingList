import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Modal,
  Pressable,
} from 'react-native';


import { IconHome, IconAlert } from '../assets/icons';

import QuickPay from '../components/QuickPay';

import StarAccount from '../components/StarAccount';

import TransactionList from '../../components/TransactionList';

import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import ServiceMessages from '../components/ServiceMessages';
import HomeHeaderTitle from '../components/HomeHeaderTitle';

// import { firestore } from '../config'



const Home = () => {
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
    <SafeAreaView style={styles.container}>
      {/* <View style={ modalToggle.active?{ backgroundColor:'rgba(0,0,0,0.5)',height:'100%',width:'100%', position:'absolute',zIndex:100}:''}></View> */}


        <Modal animationType="slide" visible={modalToggle.active}>
          <ServiceMessages />
        </Modal>

        <QuickPay payAccounts={payAccounts} />
        <StarAccount />
     <View style ={{flex:1}}>
     <TransactionList />
     </View>
   
  
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
  message: {},
});

export default Home;
