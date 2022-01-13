import React from 'react'
// import Images from '../../assets/TeamImages'
import { TeamImages } from '../../utils'

const teams = [
    {
        name: 'Degen Scientist',
        position: 'Founder & Artist',
        pfp: TeamImages.DegenScientist,
        label: 'Core Team',
    },
    {
        name: 'TermosEs',
        position: 'Coder',
        pfp: TeamImages.Termoses,
        label: 'Core Team',
    },
    {
        name: 'Wahyu',
        position: 'Web 3 savy',
        pfp: TeamImages.Wahyu,
        label: 'Core Team',
    },
    {
        name: 'Algonaut',
        position: 'Marketing, Merch & Degen King',
        pfp: TeamImages.Algonaut,
        label: 'Core Team',
    },
    {
        name: 'Dave',
        position: 'Advisor',
        pfp: TeamImages.Dave,
        label: 'Additional Team',
    },
    {
        name: 'Edgmeri',
        position: 'Marketing & Merch',
        pfp: TeamImages.Meri,
    },
]

export default function Index() {
    return (
        <>
            <div className="md:mt-12 px-6 md:px-24">
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-semibold">Team</h1>
                    {/* <p className="text-gray-300 mt-4 text-base md:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium aspernatur doloremque</p> */}
                </div>
                <div className="grid grid-rows-1 md:grid-cols-3 md:gap-x-44 gap-y-12 md:gap-y-16 mt-14">
                    {teams.map((team) => (
                        <div>
                            <div className={(team.label === 'Core Team' ? 'border-violet-700 ' : 'border-primary ') + '-full rounded-full border-4 border-dashed relative'}>
                                {team.label === 'Core Team' ? (
                                    <div className="absolute right-0 left-0 -bottom-5 rounded-full w-10 h-10 md:w-8 md:h-8 bg-violet-700 flex items-center justify-center cursor-pointer group mx-auto text-center">
                                        <span className="group-hover:visible group-hover:z-50 invisible absolute rounded-lg p-1 bg-violet-700 text-white -mt-24 w-36 text-center shadow-xl">
                                            Core Team
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="absolute right-0 left-0 -bottom-5 rounded-full w-10 h-10 md:w-8 md:h-8 bg-primary flex items-center justify-center cursor-pointer group mx-auto text-center">
                                        <span className="group-hover:visible group-hover:z-50 invisible absolute rounded-lg p-1 bg-primary text-white -mt-24 w-36 text-center shadow-xl">
                                            Additional Team
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <img src={team.pfp} className="rounded-full p-2" alt="Team1" />
                            </div>
                            <div className="mt-6 text-center">
                                <h5 className="text-lg font-medium">{team.name}</h5>
                                <p className={(team.label === 'Core Team' ? 'text-violet-700' : 'text-primary') + ' font-medium'}>{team.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
