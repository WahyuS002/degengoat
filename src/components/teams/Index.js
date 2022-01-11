import React from 'react'
// import Images from '../../assets/TeamImages'
import { TeamImages } from '../../utils'

const teams = [
    {
        name: 'Degen Scientist',
        position: 'Founder, Artist',
        pfp: TeamImages.Team1,
    },
    {
        name: 'TermosEs',
        position: 'Coder',
        pfp: TeamImages.Team2,
    },
    {
        name: 'Wahyu',
        position: 'Web 3 savy',
        pfp: TeamImages.Team3,
    },
    {
        name: 'Algonaut',
        position: 'The G.O.A.T',
        pfp: TeamImages.Team4,
    },
    {
        name: 'Dave',
        position: 'Secret Agent',
        pfp: TeamImages.Team5,
    },
]

export default function Index() {
    return (
        <>
            <div className="md:mt-12 px-6 md:px-24">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-semibold">Meet Our Team</h1>
                    <p className="text-gray-300 mt-4 text-base md:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium aspernatur doloremque</p>
                </div>
                <div className="grid grid-rows-1 md:grid-cols-3 md:gap-x-44 gap-y-12 md:gap-y-16 mt-14">
                    {teams.map((team) => (
                        <div>
                            <img src={team.pfp} className="rounded-full" alt="Team1" />
                            <div className="mt-3 text-center">
                                <h5 className="text-lg font-medium">{team.name}</h5>
                                <p className="text-primary font-medium">{team.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
