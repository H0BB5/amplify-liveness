import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
