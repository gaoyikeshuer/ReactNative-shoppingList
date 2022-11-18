import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, Modal } from 'react-native'
import { IconHome, IconAlert } from '../assets/icons'
import HomeHeaderTitle from '../components/HomeHeaderTitle'
import ServiceMessage from '../components/ServiceMessage'
import QuickPay from '../components/QuickPay'
import StarAccount from '../components/StarAccount'
import TransactionList from '../components/TransactionList'
import transactionsData from '../assets/apis/transactions.json'
import { ScrollView } from 'react-native-gesture-handler'
import {useDispatch, useSelector} from 'react-redux'


 



const Home = ({navigation}) => {


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
 
  const [modalOpen, setModalOpen] = useState(false)

  // const deleteMessage = (id) =>{
  //   setMessages(prevMessages => {
  //     return prevMessages.filter(item => item.id != id)
  //   })
  // }
  const toggleActive = useSelector((state) => state.modalToggle)
  const messages = useSelector(state => state.mes)


  return (
    <SafeAreaView style = {styles.container}>

   <View style={ modalOpen?{ backgroundColor:'rgba(0,0,0,0.5)',height:'100%',width:'100%', position:'absolute',zIndex:100}:''}></View>
        <HomeHeaderTitle title= 'Home' toggleModal={toggleModal} messages={messages}/>
      <SafeAreaView>
    
    {/* <Modal    animationType="slide" transparent ={true} visible= {toggleActive.active}>
   <ServiceMessage  />
    </Modal> */}

    <ScrollView>
    <Modal    animationType="slide" transparent ={true} visible= {toggleActive.active}>
   <ServiceMessage  />
    </Modal>


  <QuickPay payAccounts = {payAccounts}/>
  <StarAccount/>
  
  <TransactionList transactionsData={transactionsData} />
      </ScrollView>

    </SafeAreaView>
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
