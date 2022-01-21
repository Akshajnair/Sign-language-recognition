import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./components/handposeutil";
import * as fp from "fingerpose";
import Handsigns from "./handsigns";
import { Signimage, Signpass } from "./handimage";
import About from "./components/about";
import Metatags from "./components/metatags";
import "./styles/App.css";
import "@tensorflow/tfjs-backend-webgl";
import axios from "axios";
import {
  Text,
  Heading,
  Button,
  Image,
  Stack,
  Container,
  Box,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react";

export default function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [sign, setSign] = useState("");
  const [text, setText] = useState("");
  const [textSuggestion, setTextSuggestion] = useState("");

  useEffect(() => {
    let intervalId;
    async function runHandpose() {
      const net = await handpose.load();

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
          // Make Detections
          const hand = await net.estimateHands(video);
          setLoading(false);
          // Draw hand lines
          const ctx = canvasRef.current.getContext("2d");
          ctx.clearRect(0, 0, videoWidth, videoHeight);
          if (hand.length > 0 && hand[0].handInViewConfidence > 0.7) {
            drawHand(hand, ctx);
            //loading the fingerpose model
            const GE = new fp.GestureEstimator([
              // fp.Gestures.ThumbsUpGesture,
              Handsigns.aSign,
              Handsigns.bSign,
              Handsigns.cSign,
              Handsigns.dSign,
              Handsigns.eSign,
              Handsigns.fSign,
              // Handsigns.gSign,
              Handsigns.hSign,
              // Handsigns.iSign,
              // Handsigns.jSign,
              // Handsigns.kSign,
              Handsigns.lSign,
              // Handsigns.mSign,
              // Handsigns.nSign,
              Handsigns.oSign,
              // Handsigns.pSign,
              // Handsigns.qSign,
              // Handsigns.rSign,
              // Handsigns.sSign,
              // Handsigns.tSign,
              // Handsigns.uSign,
              // Handsigns.vSign,
              Handsigns.wSign,
              // Handsigns.xSign,
              // Handsigns.ySign,
              // Handsigns.zSign,
              Handsigns.thumbs_upSign,
              Handsigns.spaceSign,
            ]);

            const estimatedGestures = await GE.estimate(hand[0].landmarks, 7.0);
            // console.log(estimatedGestures);
            if (estimatedGestures.gestures.length) {
              const confidence = estimatedGestures.gestures.map((p) => p.score);
              const maxConfidence = confidence.indexOf(
                Math.max.apply(undefined, confidence)
              );
              const guestureName =
                estimatedGestures.gestures[maxConfidence].name || "";
              if (guestureName !== sign) setSign(guestureName);
            }
          } else {
            setSign("");
          }
        }, 20);
      }
    }
    runHandpose().catch(() => {});
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    let timeoutId = 0;
    if (sign !== "") {
      timeoutId = setTimeout(() => {
        // if (sign === "thumbs_up") {
        //   const lastText = text.substr(0, text.lastIndexOf(" ") + 1);
        //   setText(lastText + textSuggestion + " ");
        // } else if (sign === "space") {
        //   setText(text + " ");
        // } else
        setText(text + sign);
      }, 800);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [sign]);

  useEffect(async () => {
    if (text !== "") {
      const lastText = text.split(" ")[text.split(" ").length - 1];
      console.log(lastText);
      const textSuggestionApi = await axios
        .get(`https://api.datamuse.com/words?sp=${lastText}??`)
        .catch((err) => {
          console.log(err);
        });
      setTextSuggestion(textSuggestionApi?.data[0]?.word);
    } else setTextSuggestion("");
  }, [text]);
  return (
    <ChakraProvider>
      <Metatags />
      <Box bgColor="#5784BA">
        <Container centerContent maxW="xl" height="100vh" pt="0" pb="0">
          <VStack spacing={4} align="center">
            <Box h="20px"></Box>
          </VStack>

          <Heading
            as="h1"
            size="lg"
            id="app-title"
            color="yellow"
            textAlign="center"
            style={{ fontSize: "70px" }}
          >
            {loading ? "Loading..." : text}
          </Heading>
          <Box h="20px"></Box>
          <Heading
            as="h3"
            size="md"
            className="tutor-text"
            color="white"
            textAlign="center"
          >
            {textSuggestion ? `Did you mean: ${textSuggestion}` : ""}
          </Heading>
          <Box id="webcam-container">
            <Webcam id="webcam" ref={webcamRef} />

            {sign !== "" ? (
              <div
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  right: "calc(50% - 50px)",
                  bottom: 100,
                  textAlign: "-webkit-center",
                }}
              >
                {/* <Text color="orange" fontSize="sm" mb={1}>
                  detected gestures:
                </Text> */}
                <Text mb={1} color="orange" style={{ fontSize: "50px" }}>
                  {sign}
                </Text>
                {/* <img
                  alt="signImage"
                  src={Signimage[sign]}
                  style={{
                    height: 30,
                  }}
                /> */}
              </div>
            ) : (
              " "
            )}
          </Box>

          <canvas id="gesture-canvas" ref={canvasRef} style={{}} />

          <Box
            id="singmoji"
            style={{
              zIndex: 9,
              position: "fixed",
              top: "50px",
              right: "30px",
            }}
          ></Box>

          <Image h="150px" objectFit="cover" id="emojimage" />
          {/* <pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre> */}
        </Container>

        <Stack id="start-button" spacing={4} direction="row" align="center">
          <Button
            onClick={() => {
              setText("");
            }}
            colorScheme="orange"
          >
            Clear Text
          </Button>
          <About />
        </Stack>
      </Box>
    </ChakraProvider>
  );
}
