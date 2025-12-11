import { State } from "@/app/store";
import { FC } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

interface ProgressBarProps {
  percent?: number
}

const ProgressBar: FC<ProgressBarProps> = ({ percent }) => {
  const { accent } = useSelector((state: State) => state.preferences);

  if (percent < 0 || percent > 100) return;

  return (
    <View style={{ width: '100%', height: 20, backgroundColor: 'gray', borderRadius: 5 }}>
      <View style={{ width: `${percent}%`, height: 20, backgroundColor: accent, borderRadius: 5 }} />
    </View>
   );
};

export default ProgressBar;