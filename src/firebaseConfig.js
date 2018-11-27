import firebase from "firebase";

export const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: ""
};
const fire = firebase.initializeApp(config);

export default fire;

// paste in the configuration data of your firebase database
