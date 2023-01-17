import { useAppDispatch, useAppSelector } from "../hooks";
import { AppStateActive, isAppActiveSelector } from "./AppStateSlice";

export const useAppActive = () =>{
    const isAppActive = useAppSelector(isAppActiveSelector)
    const dispatch = useAppDispatch();
    const appStateAction = dispatch(AppStateActive)
    return {
        isAppActive,
        appStateAction
    }
}