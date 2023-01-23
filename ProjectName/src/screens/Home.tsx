import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Modal, Appearance} from 'react-native';
import QuickPay from '../features/quickPay/QuickPay';
import StarAccount from '../features/accountCard/StarAccount';
import TransactionList from '../features/transactionList/TransactionList';
import ServiceMessages from '../features/serviceMessages/ServiceMessages';
import {isDarkMode} from '../store/themeToggleSlice';
import DarkModeStyle from '../theme/DarkModeStyle';
import {AppState} from 'react-native';
import BlurScreen from '../components/BlurScreen/BlurScreen';
import {useAppSelector, useAppDispatch} from '../store/hooks';
import {UsersInfo} from '../constants/Users.constant';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const darkmode = useAppSelector(state => state.themeToggle);
  Appearance.addChangeListener(scheme => {
    dispatch(isDarkMode({scheme: scheme.colorScheme}));
  });

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
  const [appState, setAppState] = useState(AppState.currentState);
  const [payAccounts, setPayAccounts] = useState(UsersInfo);
  const modalToggle = useAppSelector(state => state.modalToggle);

  return (
    <SafeAreaView
      style={
        darkmode.scheme == 'dark' ? DarkModeStyle.container : styles.container
      }>
      <Modal
        animationType="slide"
        visible={modalToggle.active}
        presentationStyle="overFullScreen"
        transparent={true}>
        <ServiceMessages />
      </Modal>
      <QuickPay payAccounts={payAccounts} />
      <StarAccount />
      <View style={{flex: 1}}>
        <TransactionList />
      </View>

      {appState != 'active' ? <BlurScreen /> : null}
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
    position: 'absolute',
    top: 0,
  },
});

export default Home;
