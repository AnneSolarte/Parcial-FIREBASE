import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { getFirestore, collection, addDoc, getDocs, query, orderBy  } from "firebase/firestore";
import { Recipes } from "../types/recipes";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const SaveRecipeDB = async (recipe: Recipes) => {
    try {
        const where = collection(db, "recipes")
          await addDoc(where,{...recipe, createdAt: new Date()});
          return true
        } catch (e) {
          console.error("Error adding document: ", e);
          return false
        }
}

const GetRecipesDB = async(): Promise<Recipes[]> =>{
    const resp: Recipes[] = [];

    const q = query(collection(db,"recipes"), orderBy("createdAt"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      resp.push({
        ...doc.data()
      }as Recipes)
    });
    return resp
}

export const firebase = {
    SaveRecipeDB,
    GetRecipesDB
}