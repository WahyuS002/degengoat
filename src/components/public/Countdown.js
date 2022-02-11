import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

function calculateTimeLeft(started_at, ended_at) {
    const currentTime = Date.parse(moment.tz('America/New_York').toDate())
    if (currentTime < +new Date(started_at)) {
        // jika waktu sekarang kurang dari started_at artinya shuffle AKAN DIMULAI pada
        const difference = +new Date(started_at) - currentTime
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
    } else {
        // jika waktu sekarang lebih dari started_at artinya shuffle AKAN SELESAI pada
        const difference = +new Date(ended_at) - currentTime
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
}

export default function Countdown({ started_at, ended_at }) {
    const currentTime = Date.parse(moment.tz('America/New_York').toDate())
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(started_at, ended_at))
    const [feedback, setFeedback] = useState(null)

    const feedbackMessage = () => {
        if (currentTime < +new Date(started_at)) {
            setFeedback('Shuffle started in')
        } else if (currentTime > +new Date(started_at) && currentTime < +new Date(ended_at)) {
            setFeedback('Shuffle ended in')
        }
    }

    useEffect(() => {
        const id = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(started_at, ended_at))
        }, 1000)
        feedbackMessage()
        return () => {
            clearTimeout(id)
        }
    })

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
            return
        }

        return (
            <div key={interval}>
                {feedback === 'Shuffle started in' ? (
                    <span className="text-primary" key={interval}>
                        {timeLeft[interval]} {interval}
                        <span>&nbsp;</span>
                    </span>
                ) : (
                    <span className="text-red-500" key={interval}>
                        {timeLeft[interval]} {interval}
                        <span>&nbsp;</span>
                    </span>
                )}
            </div>
        )
    })

    return (
        <div>
            {feedback === 'Shuffle started in' ? <span className="text-center text-sm text-primary">{feedback}</span> : <span className="text-center text-sm text-red-500">{feedback}</span>}
            <div className="flex justify-center items-center">
                {feedback === 'Shuffle started in' ? (
                    <span className="w-3 h-3 rounded-full bg-primary block animate-blink mr-3"></span>
                ) : (
                    <span className="w-3 h-3 rounded-full bg-red-600 block animate-blink mr-3"></span>
                )}
                {timerComponents.length ? timerComponents : <span className="text-red-500">This shuffle has ended.</span>}
            </div>
        </div>
    )
}
