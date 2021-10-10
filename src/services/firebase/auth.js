import { app, googleProvider } from "./config";

const auth = app.auth();
const db = app.firestore();

const register = async (name, email, password) => {
  const newUser = await auth.createUserWithEmailAndPassword(email, password);
  return await newUser.user.updateProfile({
    displayName: name,
  });
};

const login = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
};
