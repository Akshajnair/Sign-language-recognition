import React, { useEffect, useRef, useState } from "react"; // eslint-disable-next-line
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./Utilities";
import {
  Finger,
  FingerCurl,
  GestureDescription,
  GestureEstimator,
} from "fingerpose";

const Camera = () => {
  const [isLoading, setIsLoading] = useState(true);
  const webcamRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    let intervalId;
    async function runHandpose() {
      const net = await handpose.load();
      setIsLoading(false);
      //  Loop and detect hands
      // Check data is available
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
        intervalId = setInterval(async () => {
          const hand = await net.estimateHands(video, true);
          // Draw mesh
          const ctx = canvasRef.current.getContext("2d");
          ctx.clearRect(0, 0, videoWidth, videoHeight);
          drawHand(hand, ctx);
        }, 16);
      }
    }
    runHandpose().catch(() => {});
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Webcam
        ref={webcamRef}
        audio={false}
        mirrored={true}
        videoConstraints={{ facingMode: "user" }}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          top: 0,
          width: "auto",
          height: "100%",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          top: 0,
          width: "auto",
          height: "100%",
        }}
      />
      <div
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          top: 0,
          width: "auto",
          height: "100%",
        }}
      >
        {isLoading ? "Please wait while modal is downloading" : ""}
      </div>
    </div>
  );
};

export default Camera;
