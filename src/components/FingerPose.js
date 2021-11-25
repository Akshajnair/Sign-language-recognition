import {
  Finger,
  FingerCurl,
  GestureDescription,
  GestureEstimator,
} from "fingerpose";

const A = new GestureDescription("A");
A.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
A.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
A.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.8);
A.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.8);
A.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);

const B = new GestureDescription("B");
B.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
B.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
B.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.8);
B.addCurl(Finger.Ring, FingerCurl.NoCurl, 0.8);
B.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.8);

const C = new GestureDescription("C");
C.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
C.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
C.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
C.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
C.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);

const D = new GestureDescription("D");
D.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
D.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
D.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.7);
D.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
D.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

const E = new GestureDescription("E");
E.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
E.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
E.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
E.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
E.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

const F = new GestureDescription("F");
F.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
F.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
F.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
F.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
F.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

const G = new GestureDescription("G");
G.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
G.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
G.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
G.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
G.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

const H = new GestureDescription("H");
H.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
H.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
H.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
H.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
H.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

const Gestures = new GestureEstimator([A, B, C, D]);
export default Gestures;
