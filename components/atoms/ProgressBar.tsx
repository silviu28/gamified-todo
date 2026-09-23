import { FC } from "react";
import { View } from "react-native";

interface ProgressBarProps {
  percent?: number
}

const ProgressBar: FC<ProgressBarProps> = ({ percent, accent }: { percent: number, accent: string }) => {
  if (percent < 0 || percent > 100) return;

  return (
    <View style={{ width: '100%', height: 20, backgroundColor: 'gray', borderRadius: 5 }}>
      <View style={{ width: `${percent}%`, height: 20, backgroundColor: accent, borderRadius: 5 }} />
    </View>
   );
};

export default ProgressBar;