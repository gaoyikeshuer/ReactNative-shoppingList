import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, SectionList, View, Text, Animated} from 'react-native';
import {db} from '../../../firebase';
import {collection, getDocs, query, orderBy} from 'firebase/firestore';
import Tab from './components/Tab';
import TransactionListStyle from './TransactionListStyle';
import {changeMonth} from '../../store/monthTabSlice/monthTabSlice';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {TransactionData, MonthData, GroupData} from '../../types/Data';
import {useThemeToggle} from '../../store/themeToggleSlice';
const TransactionList = () => {
  const darkMode = useThemeToggle().isDarkModeState;
  const [listData, setListData] = useState<TransactionData[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getData() {
      const listRef = collection(db, 'TransactionList');
      const q = query(listRef, orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      const data: Array<TransactionData> = [];
      const dateFormat = new Intl.DateTimeFormat('en-US');
      querySnapshot.forEach(doc => {
        const {date, currency, name, number, type} = doc.data();
        const dateObj = new Date(doc.data().date.seconds * 1000);
        data.push({
          key: doc.id,
          date: dateFormat.format(dateObj),
          currency,
          name,
          number,
          type,
          month: dateObj.getMonth() + 1,
        });
      });

      setListData(data);
    }

    getData();
  }, []);

  const DATA: GroupData[] = Object.values(
    listData.reduce((acc: any, currentVal: TransactionData) => {
      if (!acc[currentVal.date]) {
        acc[currentVal.date] = {
          title: currentVal.date,
          data: [],
          month: currentVal.month,
        };
      }
      acc[currentVal.date].data.push(currentVal);
      return acc;
    }, {}),
  );

  const monthData: MonthData[] = Object.values(
    listData.reduce((acc: any, currentVal: TransactionData) => {
      if (!acc[currentVal.month]) {
        acc[currentVal.month] = {
          month: currentVal.month,
          data: [],
          monthName: toMonthName(currentVal.month),
        };
      }
      acc[currentVal.month].data.push(currentVal);
      return acc;
    }, {}),
  );

  const Ref = useRef(null);

  function toMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }

  const scrollA = useRef(new Animated.Value(0)).current;

  const _onViewableItemsChanged = React.useCallback(
    ({viewableItems, changed}: {viewableItems: any; changed: any}) => {
      // console.log("Visible items are", viewableItems);
      //have question of the types here

      dispatch(changeMonth({item: viewableItems[1]?.item}));
    },
    [],
  );

  const _viewabilityConfig = {
    itemVisiblePercentThreshold: 80,
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 12,
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text
          style={{
            color: '#6E6E6E',
            fontFamily: 'Aspira',
            fontWeight: '500',
            letterSpacing: 1.5,
            fontSize: 12,
          }}>
          RECENT INCOMING TRANSACTIONS
        </Text>
        <Text
          style={{color: '#7F2B7B', fontFamily: 'Aspira', fontWeight: '500'}}>
          Show all {'>'}
        </Text>
      </View>
      <Tab monthData={monthData} Ref={Ref} DATA={DATA} scrollA={scrollA} />

      <SectionList
        onViewableItemsChanged={_onViewableItemsChanged}
        viewabilityConfig={_viewabilityConfig}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: false},
        )}
        ref={Ref}
        sections={DATA} //must be {title:string, data:array}
        scrollEnabled={true}
        stickySectionHeadersEnabled={false}
        keyExtractor={(item, index) => item.key + index}
        renderItem={({item}) => {
          return (
            <View
              style={[
                TransactionListStyle.listContainer,
                {
                  backgroundColor: darkMode == 'dark' ? '#5A6168' : 'white',
                },
              ]}>
              <View style={TransactionListStyle.textContainer}>
                <View style={TransactionListStyle.nameContainer}>
                  <Text style={TransactionListStyle.textName}>{item.name}</Text>
                  <Text
                    style={{
                      color: darkMode == 'dark' ? 'black' : '#6E6E6E',
                      fontFamily: 'Aspira',
                    }}>
                    {item.type}
                  </Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text
                    style={[
                      TransactionListStyle.textCurrency,
                      {color: darkMode == 'dark' ? 'black' : '#6E6E6E'},
                    ]}>
                    {item.currency}
                  </Text>

                  <Text style={TransactionListStyle.textNumber}>
                    {item.number > 0
                      ? '+' + item.number.toFixed(2).toLocaleString()
                      : item.number.toFixed(2).toLocaleString()}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                borderBottomWidth: 1,
                marginHorizontal: 12,
                borderColor: '#C3C3C3',
              }}
            />
          );
        }}
        renderSectionHeader={({section}) => {
          return (
            <View style={TransactionListStyle.transactionTitle}>
              <Text style={TransactionListStyle.titleDate}>
                {section.title}
              </Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default TransactionList;
