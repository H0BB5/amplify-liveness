import Image from "next/image";
import { Inter } from "next/font/google";
import { LivenessQuickStart } from "@/components/Liveness";
import { Button, useAuthenticator, View } from "@aws-amplify/ui-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  return (
    <View width="600px" margin="0 auto">
      <LivenessQuickStart />
      <Button onClick={signOut} variation="warning">
        Sign Out
      </Button>
    </View>
  );
}
