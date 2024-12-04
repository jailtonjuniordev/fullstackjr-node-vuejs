import firebase from "../config/firebase";
import Product from "../entities/Product";
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, updateDoc} from 'firebase/firestore';

const db = getFirestore(firebase);
export default class ProductService {
    async createProduct(productData: Product): Promise<Product> {
        const docRef = await addDoc(collection(db, 'products'), productData);
        return {
            id: docRef.id,
            ...productData,
        };
    }

    async listAllProducts() {
        const products = await getDocs(collection(db, 'products'));
        const productArray: Product[] = [];

        if (products.empty) {
            return 'No Products found';
        } else {
            products.forEach((doc) => {
                const product = new Product(
                    doc.id,
                    doc.data().name,
                    doc.data().price,
                    doc.data().stock,
                );
                productArray.push(product);
            });
            return productArray;
        }
    }

    async listProductById(id: string) {
        const product = doc(db, 'products', id);
        const data = await getDoc(product);

        if (data.exists()) {
            return data.data();
        } else {
            return 'Product Not Found'
        }
    }

    async editProduct(productData: {}, id: string) {
        const productRef = doc(db, 'products', id);
        await updateDoc(productRef, productData);

        return {...productData, id: id};

    }

    async deleteProduct(id: string) {
        await deleteDoc(doc(db, 'products', id));

        return "Product deleted successfully";
    }
}
