import { LivenessQuickStart } from "@/components/Liveness";
import { Button, View } from "@aws-amplify/ui-react";

export default function Home() {
  return (
    <View width="600px" margin="0 auto">
      <LivenessQuickStart />
    </View>
  );
}
