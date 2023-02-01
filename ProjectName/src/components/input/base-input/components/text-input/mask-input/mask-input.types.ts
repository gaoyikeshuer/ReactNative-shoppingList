import { ExtractProps } from "../../../../../../ts/utils";
import TextInputMask from "react-native-text-input-mask";

export type MaskInputTypes = ExtractProps<typeof TextInputMask> &{
 formatter?:(str:string) =>string
}