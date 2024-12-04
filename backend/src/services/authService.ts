// import {getFirestoreDb} from "../config/firebase";
// import admin from "firebase-admin";
//
// interface User {
//     email: string;
//     password: string;
// }
//
// const db = getFirestoreDb();
//
// export const createUser = async ({email, password}: User) => {
//     const userRecord = await admin.auth().createUser({email, password});
//     await db.collection("users").doc(userRecord.uid).set({email});
//     return userRecord;
// };
//
// export const loginUser = async ({email, password}: User) => {
//     // Implemente o login (com verificação usando Firebase)
//     // Exemplo fictício para ilustrar:
//     return await admin.auth().createCustomToken(email);
// };
