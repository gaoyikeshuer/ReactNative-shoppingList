import React from 'react';
import {Text, SafeAreaView, View, Pressable, FlatList} from 'react-native';
import ListAccounts from './components/ListAccounts';
import AddAcounts from './components/AddAcounts';
import QuickPayStyle from './quickpay.styles';
import {User} from '../../types/user.interface';

const QuickPay = ({payAccounts}: {payAccounts: User[]}) => {
  return (
    <SafeAreaView>
      <View style={QuickPayStyle.QuickPayTitle}>
        <Text style={QuickPayStyle.QuickPayText}>QUICK PAY</Text>
        <Pressable>
          <Text style={QuickPayStyle.ShowAllText}>Show all {'>'} </Text>
        </Pressable>
      </View>

      <FlatList
        numColumns={5}
        columnWrapperStyle={QuickPayStyle.flatlistStyle}
        style={QuickPayStyle.avatarContainer}
        data={[...payAccounts.slice(0, 9), {plusImage: true}]}
        renderItem={({item}: {item: User | any}) => {
          if (item.plusImage) {
            return <AddAcounts />;
          }
          return <ListAccounts item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default QuickPay;
