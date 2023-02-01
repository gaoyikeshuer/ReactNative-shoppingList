export type ExtractProps<T> = T extends
  | React.Component<infer P>
  | React.FC<infer P>
  ? P
  : never;
