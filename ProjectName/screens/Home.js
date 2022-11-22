import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, Modal, Pressable } from 'react-native'
import { IconHome, IconAlert } from '../assets/icons'
import HomeHeaderTitle from '../components/HomeHeaderTitle'
import QuickPay from '../components/QuickPay'
import StarAccount from '../components/StarAccount'
import TransactionList from '../components/TransactionList'
import transactionsData from '../assets/apis/transactions.json'
import { ScrollView } from 'react-native-gesture-handler'
import {useDispatch, useSelector} from 'react-redux'
import ServiceMessages from '../components/ServiceMessages'

// import { firestore } from '../config'


import { db } from '../firebase'


// import { collection, getDocs } from "firebase/firestore"; 

import { doc, getDoc } from "firebase/firestore";

const Home = () => {

 const GetData = async() =>{

  const docRef = doc(db, "TransactionList",'YcfAz6kY0y5XHv1H5DO3');
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document")
  }
  // const citiesCol = collection(db, 'TransactionList');
  // const citySnapshot = await getDocs(citiesCol);
  // const cityList = citySnapshot.docs.map(doc => doc.data());
  // console.log(citySnapshot)
 }
 GetData();


  
  
  // const [list, setList] = useState([])
  // // const transRef = firestore.collection('TransactionList')
  // const transRef = db.collection('TransactionList')
  // useEffect( async () =>{
  //   transRef
  //   .onSnapshot(
  //     querySnapshot =>{
  //      const lists = []
  //      querySnapshot.forEach((doc)=>{
  //       const{date,currency,name,number,type}= doc.data()
  //       lists.push({
  //         id: doc.id,
  //         date,
  //         currency,
  //         name,
  //         number,
  //         type

  //       })  
  //     })
  //     setList(lists)
  // })
  // },[])

  const[payAccounts, setPayAccounts] = useState([
    {id:1, name:"Alloment Weal"},
    {id:2, name:"Cian Byrne"},
    {id:3, name: "Yike Gao"},
    {id:4, name: "Tianyi Wang"},
    {id:5, name: "Linghan Jing"},
    {id:6, name: "Ryan Veale"},
    {id:7, name:'Chetanya Kandhari'},
    {id:8, name:'Yoeri Percy'},
    {id:9, name: 'Harry Potter'},
    {id:10, name: 'Zheng Sun'},
    {id:11, name: 'nyan tsabjnx'}
  ])
 

  const modalToggle = useSelector((state) => state.modalToggle)
 

  return (
    <SafeAreaView style = {styles.container}>
 {/* <View style={ modalToggle.active?{ backgroundColor:'rgba(0,0,0,0.5)',height:'100%',width:'100%', position:'absolute',zIndex:100}:''}></View> */}

      <ScrollView>
    
    <Modal    animationType="slide"  visible= {modalToggle.active}>
   <ServiceMessages  />
    </Modal>
    

  <QuickPay payAccounts = {payAccounts}/>
  <StarAccount/>
  
  <TransactionList transactionsData={transactionsData} />
      </ScrollView>

    </SafeAreaView>
 
  )
}

const styles = StyleSheet.create ({
  container:{
 position: 'relative',
 paddingVertical:14,

 display:'flex',
 flex:1,

  },
  darkContainer:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex:1
  },
  message :{


  }
})

export default Home
