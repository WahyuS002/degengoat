import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function BottomNotification() {
    const [notification, setNotification] = useState(null)

    const getNotification = async () => {
        await axios
            .get(`${process.env.REACT_APP_API_URL}/notification`)
            .then(({ data }) => {
                setNotification(data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getNotification()
    }, [])

    return (
        <div>
            {notification ? (
                <div className="flex justify-center">
                    <div className="bg-semi-black px-6 py-4 rounded-lg fixed bottom-4">
                        <span className="uppercase bg-primary px-2 py-1 rounded-lg text-sm text-black font-semibold mr-2 animate-blink">Info</span>
                        <span dangerouslySetInnerHTML={{ __html: notification.content }}></span>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}
