import React from "react"
import { FlatList } from "react-native"
import ContactTracingRow from "./ContactTracingRow"
import EmptyContactTracingListMessage from "./EmptyContactTracingListMessage"

const ContactTracingList = () => {
    let data: any[] = [
        {
            name: "JOHN DOE",
            phoneNumber: "+1 (647) 555-5555",
            timestamp: 1624679075707
        },
        {
            name: "JANE DOE",
            phoneNumber: "+1 (647) 555-5556",
            timestamp: 1624670075407
        },
        {
            name: "RICHARD DOE",
            phoneNumber: "+1 (647) 555-5557",
            timestamp: 1622479045407
        }
    ]
    return (
        <>
            {data.length < 0 ? 
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