import { useAppDispatch, useAppSelector } from "../hooks";
import { deleteMes, MessagesSelector } from "./messagesSlice";

export const useMessages = () =>{
    const MessagesState = useAppSelector(MessagesSelector)
    const dispatch = useAppDispatch();
    const deleteMesAction = dispatch(deleteMes)
    return {
        MessagesState,
        deleteMesAction
    }
}