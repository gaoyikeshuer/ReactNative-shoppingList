import React ,{useState, useEffect} from 'react'
import { SafeAreaView, SectionList, View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import TransactionItem from './TransactionItem'

import { db } from '../firebase'
import { collection, getDocs, query, orderBy } from "firebase/firestore"; 
const TransactionList = ({transactionsData}) => {
  
  
  const [listData, setListData] = useState([])

const myFunction = async () => {
  const listRef = collection(db,"TransactionList")
  const q = query(listRef , orderBy("date","desc"))
  const querySnapshot = await getDocs(q)

  const data = []
  const dateFormat = new Intl.DateTimeFormat('en-US')
  querySnapshot.forEach((doc) => {
    const{date, currency, name, number, type} = doc.data()
    const dateObj = new Date(doc.data().date.seconds * 1000)
    data.push({
      key: doc.id,
      date:  dateFormat.format(dateObj),
      currency,
      name,
      number, 
      type
      
    })
  
  })
  setListData(data)
  
};
  useEffect(() =>myFunction() ,[])
console.log(listData)






 const DATA = Object.values(listData.reduce((acc, currentVal) => {

    if (!acc[currentVal.date]) acc[currentVal.date] = {
      title: currentVal.date,
      data: []
    };
    acc[currentVal.date].data.push(currentVal);
    return acc;
  
  }, {}))

  console.log(DATA)
  return (
   <SafeAreaView>
    <View style={{flexDirection:'row', marginHorizontal:12, justifyContent:'space-between', marginBottom:10}}>
        <Text style={{color:'#6E6E6E', fontFamily:'Aspira', fontWeight:'500'}}>RECENT INCOMING TRANSACTIONS</Text>
        <Text style={{color:'#7F2B7B', fontFamily:'Aspira', fontWeight:'500'}}>Show all {`>`}</Text>
    </View>
    <FlatList></FlatList>


  <SectionList sections={DATA}
   scrollEnabled={true}
   stickySectionHeadersEnabled ={false}
  keyExtractor={(item, index)=> item +index} 
  renderItem ={
    ({item}) => {return(<View style={styles.listContainer}>
        <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
            <Text style={{fontSize:16, width:224, marginBottom:3, fontFamily:'Aspira', fontWeight:'500'}}>{item.name}</Text>
            <Text style={{color:'#6E6E6E'}}>{item.type}</Text>
        </View>
       <View style={{alignItems:'flex-end'}}>
       <Text style={{color:'#6E6E6E', fontFamily:'Aspira'}}>{item.currency}</Text>
    
        <Text style={{fontSize:16, fontFamily:'Aspira'}}>{item.number}</Text>

       </View>

        </View>
   
        </View>)}
  }
  ItemSeparatorComponent ={
  () =>{
    
  return <View style={{ borderBottomWidth:1, marginHorizontal:12, borderColor:'#C3C3C3'}}></View>;
  }
  }
  renderSectionHeader ={
    ({section}) =>{
        return(<View style={styles.transactionTitle} >
            <Text style={styles.titleDate}>{section.title}</Text>
        </View>)
    }
  }
  />
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
transactionTitle:{
    paddingHorizontal:12,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor: '#C3C3C3'
},
titleDate:{
    color:'#7F2B7B',
    marginVertical:4
},
listContainer:{
   backgroundColor:'white',
 

},
textContainer:{
    marginHorizontal:12,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:11,
    marginBottom:17
 

},
nameContainer:{

  width:224,
   
}
})

export default TransactionList
