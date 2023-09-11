import { useEffect, useState } from "react";
import { Loader, Heading } from "@aws-amplify/ui-react";
import { FaceLivenessDetector } from "@aws-amplify/ui-react-liveness";
import { API } from "aws-amplify";

export function LivenessQuickStart() {
  const [loading, setLoading] = useState(true);
  const [sessionId, setSessionId] = useState(null);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchCreateLiveness = async () => {
      const response = await API.get("liveness", "/session/create", {});
      setSessionId(response);
      setLoading(false);
    };

    fetchCreateLiveness();
  }, []);

  const handleAnalysisComplete = async () => {
    const data = await API.get("liveness", "/session/get", {
      queryStringParameters: {
        sessionId: sessionId.sessionId,
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

  const handleError = (error) => {
    console.log("got error", error);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <FaceLivenessDetector
            sessionId={sessionId.sessionId ?? "1"}
            region="us-east-1"
            onAnalysisComplete={handleAnalysisComplete}
            onError={handleError}
          />
          <Heading level={2}>{success}</Heading>
        </>
      )}
    </>
  );
}
