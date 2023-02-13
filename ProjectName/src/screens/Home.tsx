import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Modal, Appearance, AppState} from 'react-native';

import {styles} from './home.styles';
import BlurScreen from '../components/BlurScreen/BlurScreen';
import {Users} from '../constants/users.constants';
import StarAccount from '../features/accountCard/StarAccount';
import QuickPay from '../features/quickPay/QuickPay';
import ServiceMessages from '../features/serviceMessages/ServiceMessages';
import TransactionList from '../features/transactionList/TransactionList';
import {useAppSelector, useAppDispatch} from '../store/hooks';
import {useThemeToggle} from '../store/themeToggleSlice';
import {isDarkMode} from '../store/themeToggleSlice/themetoggle.slice';
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
