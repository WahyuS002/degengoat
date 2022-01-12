import { AboutImages } from '../ImportImages/ImportImages'

export const allTabs = [
    { label: 'Robot', src: AboutImages.robot },
    { label: 'Tiger', src: AboutImages.tiger },
    { label: 'Brown', src: AboutImages.brown },
    { label: 'Zombie', src: AboutImages.zombie },
    { label: 'Gold', src: AboutImages.gold },
    { label: 'White', src: AboutImages.white },
    { label: 'Leopard', src: AboutImages.leopard },
    { label: 'Tribal', src: AboutImages.tribal },
    { label: 'Red', src: AboutImages.red },
    { label: 'Lava', src: AboutImages.lava },
    { label: 'Blue', src: AboutImages.blue },
    { label: 'Mutant', src: AboutImages.mutant },
    { label: 'Psychedelic', src: AboutImages.psychedelic },
    { label: 'Pink', src: AboutImages.pink },
]

const [robot, tiger, brown, zombie, gold, white, leopard, tribal, red, lava, blue, mutant, psychedelic, pink] = allTabs
export const initialTabs = [robot, tiger, brown, zombie, gold, white, leopard, tribal, red, lava, blue, mutant, psychedelic, pink]

export function getNextTab(tabs) {
    const existing = new Set(tabs)
    return allTabs.find((tab) => !existing.has(tab))
}
