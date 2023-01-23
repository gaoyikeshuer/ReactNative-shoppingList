import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, SectionList, View, Text, Animated} from 'react-native';
import {db} from '../../../firebase';
import {collection, getDocs, query, orderBy} from 'firebase/firestore';
import Tab from './components/Tab';
import TransactionListStyle from './transactionlist.styles';
import {changeMonth} from '../../store/monthTabSlice/monthtab.slice';
import {useAppDispatch} from '../../store/hooks';
import {
  TransactionData,
  MonthData,
  GroupData,
} from '../../types/data.interface';
import {useThemeToggle} from '../../store/themeToggleSlice';

const TransactionList = () => {
  const {isDarkModeState: isDark} = useThemeToggle();
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
        const {currency, name, number, type} = doc.data();
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
  function toMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }

  /* eslint-disable no-param-reassign */
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
  /* eslint-enable no-param-reassign */
  const Ref = useRef(null);

  const scrollA = useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = React.useCallback(
    ({viewableItems, changed}: {viewableItems: any; changed: any}) => {
      // console.log("Visible items are", viewableItems);
      //have question of the types here

      dispatch(changeMonth({item: viewableItems[1]?.item}));
    },
    [],
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 80,
  };
  return (
    <SafeAreaView>
      <View style={TransactionListStyle(isDark).wholeListContainer}>
        <Text style={TransactionListStyle(isDark).wholeListTitle}>
          RECENT INCOMING TRANSACTIONS
        </Text>
        <Text style={TransactionListStyle(isDark).wholeListShow}>
          Show all {'>'}
        </Text>
      </View>
      <Tab monthData={monthData} Ref={Ref} DATA={DATA} scrollA={scrollA} />

      <SectionList
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
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
            <View style={TransactionListStyle(isDark).listContainer}>
              <View style={TransactionListStyle(isDark).textContainer}>
                <View style={TransactionListStyle(isDark).nameContainer}>
                  <Text style={TransactionListStyle(isDark).textName}>
                    {item.name}
                  </Text>
                  <Text style={TransactionListStyle(isDark).textType}>
                    {item.type}
                  </Text>
                </View>
                <View style={TransactionListStyle(isDark).arrangeItem}>
                  <Text style={TransactionListStyle(isDark).textCurrency}>
                    {item.currency}
                  </Text>

                  <Text style={TransactionListStyle(isDark).textNumber}>
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
          return <View style={TransactionListStyle(isDark).itemSeparator} />;
        }}
        renderSectionHeader={({section}) => {
          return (
            <View style={TransactionListStyle(isDark).transactionTitle}>
              <Text style={TransactionListStyle(isDark).titleDate}>
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
