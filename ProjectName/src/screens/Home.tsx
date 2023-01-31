import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Modal, Appearance, AppState} from 'react-native';

import {Users} from '@aib/constants/users.constants';
import {useAppSelector, useAppDispatch} from '@aib/store/hooks';
import {isDarkMode} from '@aib/store/themeToggleSlice/themetoggle.slice';

import {styles} from './home.styles';
import BlurScreen from '../components/BlurScreen/BlurScreen';
import StarAccount from '../features/accountCard/StarAccount';
import QuickPay from '../features/quickPay/QuickPay';
import ServiceMessages from '../features/serviceMessages/ServiceMessages';
import TransactionList from '../features/transactionList/TransactionList';
import {useThemeToggle} from '../store/themeToggleSlice';
import DarkModeStyle from '../theme/darkmode.styles';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const {isDarkModeState: isDark} = useThemeToggle();
  Appearance.addChangeListener(scheme => {
    dispatch(isDarkMode({scheme: scheme.colorScheme}));
  });
  const [appState, setAppState] = useState(AppState.currentState);
  useEffect(() => {
    const appStateListener = AppState.addEventListener(
      'change',
      nextAppState => {
        setAppState(nextAppState);
      },
    );
    return () => {
      appStateListener?.remove();
    };
  }, []);

  const modalToggle = useAppSelector(state => state.modalToggle);

  return (
    <SafeAreaView
      style={isDark == 'dark' ? DarkModeStyle.container : styles.container}>
      <Modal
        animationType="slide"
        visible={modalToggle.active}
        presentationStyle="overFullScreen"
        transparent={true}>
        <ServiceMessages />
      </Modal>
      <QuickPay payAccounts={Users} />
      <StarAccount />
      <View style={styles.transactionContainer}>
        <TransactionList />
      </View>
      {appState != 'active' ? <BlurScreen /> : null}
    </SafeAreaView>
  );
};

export default Home;
