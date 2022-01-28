import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomNotification() {
    return (
        <div className="flex justify-center">
            <div className="bg-semi-black px-6 py-4 rounded-lg fixed bottom-4">
                <p>
                    <span className="uppercase bg-primary px-2 py-1 rounded-lg text-sm text-black font-semibold mr-2 animate-blink">Info</span> Shuffle is started right now.{' '}
                    <Link to="/shuffle" className="text-primary font-semibold">
                        click here
                    </Link>{' '}
                    to join the shuffle.
                </p>
            </div>
        </div>
    )
}
