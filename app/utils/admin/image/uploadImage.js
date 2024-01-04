import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '@/firebase/config';

const uploadImage = async (file, slug) => {
  try {
    const storageRef = ref(storage, slug)
    const fileSnapshot = await uploadBytes(storageRef, file)
    const fileURL = await getDownloadURL( fileSnapshot.ref )
    return fileURL
  
  } catch (error) {
    
    return error
  }
}
export default uploadImage