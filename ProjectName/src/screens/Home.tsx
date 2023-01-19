import React, {useState, useEffect} from "react"
import {View, SafeAreaView, Modal, Appearance} from "react-native"
import QuickPay from "../features/quickPay/QuickPay"
import StarAccount from "../features/accountCard/StarAccount"
import TransactionList from "../features/transactionList/TransactionList"
import ServiceMessages from "../features/serviceMessages/ServiceMessages"
import {isDarkMode} from "../store/themeToggleSlice/themeToggleSlice"
import DarkModeStyle from "../theme/DarkModeStyle"
import {AppState} from "react-native"
import BlurScreen from "../components/BlurScreen/BlurScreen"
import {useAppSelector, useAppDispatch} from "../store/hooks"
import {Users} from "../constants/Users.constant"
import {useThemeToggle} from "../store/themeToggleSlice"
import {styles} from "./Home.style"
const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const darkmode = useThemeToggle().isDarkModeState
    Appearance.addChangeListener(scheme => {
        dispatch(isDarkMode({scheme: scheme.colorScheme}))
    })

    useEffect(() => {
        const appStateListener = AppState.addEventListener(
            "change",
            nextAppState => {
                setAppState(nextAppState)
            },
        )
        return () => {
            appStateListener?.remove()
        }
    }, [])
    const [appState, setAppState] = useState(AppState.currentState)
    const modalToggle = useAppSelector(state => state.modalToggle)

    return (
        <SafeAreaView
            style={darkmode == "dark" ? DarkModeStyle.container : styles.container}>
            <Modal
                animationType="slide"
                visible={modalToggle.active}
                presentationStyle="overFullScreen"
                transparent={true}>
                <ServiceMessages />
            </Modal>
            <QuickPay payAccounts={Users} />
            <StarAccount />
            <View style={{flex: 1}}>
                <TransactionList />
            </View>

            {appState != "active" ? <BlurScreen /> : null}
        </SafeAreaView>
    )
}

export default Home
