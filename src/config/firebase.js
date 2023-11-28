import { initializeApp } from "firebase/app";
import {
    initializeAuth,
    getReactNativePersistence,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyAytojhF5SRP5AQWKo6o4w_BOpBe3_cwo8",
    authDomain: "lista-de-compras-a704b.firebaseapp.com",
    projectId: "lista-de-compras-a704b",
    storageBucket: "lista-de-compras-a704b.appspot.com",
    messagingSenderId: "258366609662",
    appId: "1:258366609662:web:5e37d06eea2de6182c2daf",
    measurementId: "G-JGDR0YFYPW",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
