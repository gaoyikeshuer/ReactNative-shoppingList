import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Modal, Appearance, AppState} from 'react-native';
import QuickPay from '../features/quickPay/QuickPay';
import StarAccount from '../features/accountCard/StarAccount';
import TransactionList from '../features/transactionList/TransactionList';
import ServiceMessages from '../features/serviceMessages/ServiceMessages';
import {isDarkMode} from '../store/themeToggleSlice/themetoggle.slice';
import DarkModeStyle from '../theme/darkmode.styles';
import BlurScreen from '../components/BlurScreen/BlurScreen';
import {useAppSelector, useAppDispatch} from '../store/hooks';
import {Users} from '../constants/users.constants';
import {useThemeToggle} from '../store/themeToggleSlice';
import {styles} from './home.styles';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const darkmode = useThemeToggle().isDarkModeState;
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
      style={darkmode == 'dark' ? DarkModeStyle.container : styles.container}>
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
