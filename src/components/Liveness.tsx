import { useEffect, useState } from "react";
import { Loader, Heading } from "@aws-amplify/ui-react";
import { FaceLivenessDetector } from "@aws-amplify/ui-react-liveness";
import { API } from "aws-amplify";

export function LivenessQuickStart() {
  const [loading, setLoading] = useState<boolean>(true);
  const [sessionId, setSessionId] = useState<{
    sessionId: string;
  } | null>(null);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchCreateLiveness = async () => {
      const response = await API.get(
        "faceliveness",
        "/faceliveness/create",
        {}
      ); // add cors like this
      setSessionId(response);
      setLoading(false);
    };

    fetchCreateLiveness();
  }, []);

  const handleAnalysisComplete = async () => {
    const data = await API.get("faceliveness", "/faceliveness/get", {
      queryStringParameters: {
        sessionId: sessionId?.sessionId,
      },
    });

    if (data.isLive) {
      setSuccess("User is live");
      console.log("live");
    } else {
      setSuccess("User is not live");
      console.log("not live");
    }
  };

  const handleError = (error: any) => {
    console.log("got error", error);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <FaceLivenessDetector
            sessionId={sessionId?.sessionId ?? "1"}
            region="us-east-1"
            onAnalysisComplete={handleAnalysisComplete}
            onError={handleError as any}
          />
          <Heading level={2}>{success}</Heading>
        </>
      )}
    </>
  );
}
