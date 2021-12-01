import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const aSign = new GestureDescription("A");
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
aSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index
aSign.addCurl(Finger.Index, FingerCurl.FullCurl, 0.9);
aSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);

//Middle
aSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.7);
aSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.7);

//Ring
aSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.7);
aSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.7);

//Pinky
aSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.7);
aSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.7);
