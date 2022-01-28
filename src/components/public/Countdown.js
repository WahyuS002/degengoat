import React, { useEffect, useState } from 'react'

function calculateTimeLeft() {
    const difference = +new Date(`2022-1-29`) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
        timeLeft = {
            d: Math.floor(difference / (1000 * 60 * 60 * 24)),
            h: Math.floor((difference / (1000 * 60 * 60)) % 24),
            m: Math.floor((difference / 1000 / 60) % 60),
            s: Math.floor((difference / 1000) % 60),
        }
    }

    return timeLeft
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const id = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => {
            clearTimeout(id)
        }
    })

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
            return
        }

        return (
            <span>
                {timeLeft[interval]} {interval}{' '}
            </span>
        )
    })

    return <div>{timerComponents.length ? timerComponents : <span className="text-red-500">This shuffle has ended.</span>}</div>
}
