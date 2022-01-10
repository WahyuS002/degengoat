import { AboutImages } from '../ImportImages/ImportImages'

export const allTabs = [
    { icon: '🐐', label: 'Basic', src: AboutImages.Image1 },
    { icon: '🧟‍♀️', label: 'Zombie', src: AboutImages.Image2 },
    { icon: '🤖', label: 'Robot', src: AboutImages.Image3 },
    { icon: '👽', label: 'Alien', src: AboutImages.Image4 },
    { icon: '👾', label: 'Lorem', src: AboutImages.Image5 },
    { icon: '🧠', label: 'Brain', src: AboutImages.Image6 },
    { icon: '🥂', label: 'Champers?', src: AboutImages.Image1 },
]

const [tomato, lettuce, cheese, carrot, banana, blueberries] = allTabs
export const initialTabs = [tomato, lettuce, cheese, carrot, banana, blueberries]

export function getNextTab(tabs) {
    const existing = new Set(tabs)
    return allTabs.find((tab) => !existing.has(tab))
}
