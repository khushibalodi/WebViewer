import firebase from "firebase/compat/app"
import "firebase/compat/auth" 
import 'firebase/compat/firestore';

const app=firebase.initializeApp({
    apiKey:  "AIzaSyBgf_i1hnRNd3Vr-UUwv3JFsMYOx3-krVo",
    authDomain: process.env.React_authDomain,
    projectId: process.env.React_projectId,
    storageBucket: process.env.React_storageBucket,
    messagingSenderId: process.env.React_messagingSenderId,
    appId: process.env.React_appId
})

export const auth=app.auth()
export default app