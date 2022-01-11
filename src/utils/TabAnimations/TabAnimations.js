import { AboutImages } from '../ImportImages/ImportImages'

export const allTabs = [
    { icon: '🤖', label: 'Robot', src: AboutImages.robot },
    { icon: '🐯', label: 'Tiger', src: AboutImages.tiger },
    { icon: '🧟‍♂️', label: 'Zombie', src: AboutImages.zombie },
    { icon: '💛', label: 'Gold', src: AboutImages.gold },
    { icon: '⚪', label: 'White', src: AboutImages.white },
    { icon: '🐆', label: 'Leopard', src: AboutImages.leopard },
    { icon: '🔥', label: 'Lava', src: AboutImages.lava },
    { icon: '🧬', label: 'Mutant', src: AboutImages.mutant },
]

const [tomato, lettuce, cheese, carrot, banana, blueberries] = allTabs
export const initialTabs = [tomato, lettuce, cheese, carrot, banana, blueberries]

export function getNextTab(tabs) {
    const existing = new Set(tabs)
    return allTabs.find((tab) => !existing.has(tab))
}
