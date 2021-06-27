import AsyncStorage from "@react-native-async-storage/async-storage"
import Storage from "react-native-storage"
import "react-native-get-random-values"
import { v4 as uuid } from "uuid"

const storage = new Storage({
    storageBackend: AsyncStorage,
    size: Number.MAX_SAFE_INTEGER,
    defaultExpires: null,
    enableCache: true
})

export const addToContactTracingList = ({ name, phoneNumber, timestamp = Date.now() }: { name: string, phoneNumber: string, timestamp: number }) => {
    (async () => await storage.save({
        key: 'contactTracing',
        id: uuid(),
        data: {
            name,
            phoneNumber,
            timestamp
        }
    }))()
}

export const clearContactTracingList = () => {
    (async () => await storage.clearMapForKey('contactTracing'))()
}

export default storage;