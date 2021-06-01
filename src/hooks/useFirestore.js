import  { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {

        const unSub = projectFirestore.collection(collection)
            .orderBy('createdAt','desc')
            .limit(20)
            .onSnapshot((snap) => {
                let documents = []
                snap.forEach((doc) => {
                    documents.push({
                        ...doc.data(),
                        id: doc.id
                    })
                })
                setDocs(documents.reverse());
            })

        return unSub;
    },[collection])

    return { docs }
}

export default useFirestore
