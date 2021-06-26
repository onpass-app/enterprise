import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { FlatList } from "react-native"
import storage from "../../database"
import ContactTracingRow from "./ContactTracingRow"
import EmptyContactTracingListMessage from "./EmptyContactTracingListMessage"

const ContactTracingList = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => setData(await storage.getAllDataForKey('contactTracing')))()
    }, [])

    return (
        <>
            {data.length > 0 ? 
                <FlatList
                data={data}
                keyExtractor={(_, index) => `person-${index}`}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <ContactTracingRow {...item} />}
                />
            : <EmptyContactTracingListMessage />
            }
        </>
    )
}

export default ContactTracingList