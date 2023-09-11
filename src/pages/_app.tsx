import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure({
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id:
    "us-east-1:49aa5ca7-b3c2-47bd-93bb-d9ff88eb690e",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_ueDbnnE88",
  aws_user_pools_web_client_id: "2d5fo4o7cqhgr46c3i1iirlmsk",
  oauth: {},
  aws_cognito_username_attributes: ["EMAIL"],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ["EMAIL"],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: ["SMS"],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
  aws_cloud_logic_custom: [
    {
      name: "faceliveness",
      endpoint: "https://p2cyguum19.execute-api.us-east-1.amazonaws.com/dev",
      region: "us-east-1",
    },
  ],
});

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
