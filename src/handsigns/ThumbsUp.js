import {
  Finger,
  FingerCurl,
  FingerDirection,
  GestureDescription,
} from "fingerpose";

export const thumbs_upSign = new GestureDescription("thumbs_up");

//Thumb
thumbs_upSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbs_upSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Index
thumbs_upSign.addCurl(Finger.Index, FingerCurl.FullCurl, 0.9);
// thumbs_upSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.7);
// thumbs_upSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
thumbs_upSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.7);
// thumbs_upSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.7);

//Ring
thumbs_upSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.7);
// thumbs_upSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.7);

//Pinky
thumbs_upSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.7);
// thumbs_upSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.7);
