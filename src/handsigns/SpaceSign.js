import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

//   [ "Thumb", "No Curl", "Vertical Up" ]
// ​​
// 1: Array(3) [ "Index", "No Curl", "Diagonal Up Left" ]
// ​​
// 2: Array(3) [ "Middle", "No Curl", "Diagonal Up Left" ]
// ​​
// 3: Array(3) [ "Ring", "No Curl", "Horizontal Left" ]
// ​​
// 4: Array(3) [ "Pinky", "No Curl", "Horizontal Left" ]
export const spaceSign = new GestureDescription("space");

//Thumb
spaceSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
spaceSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index
spaceSign.addCurl(Finger.Index, FingerCurl.NoCurl, 0.9);
spaceSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.7);

//Middle
spaceSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.7);
spaceSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.7);

//Ring
spaceSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 0.7);
spaceSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.7);

//Pinky
spaceSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.7);
spaceSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.7);
