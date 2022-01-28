import Navbar from '../components/public/Navbar'
import Footer from '../components/public/Footer'
import Index from '../components/teams/Index'
import BottomNotification from '../components/public/BottomNotification'

export default function Team() {
    return (
        <div>
            <Navbar />
            <Index />
            <div className="mt-40">
                <Footer />
            </div>
            <BottomNotification />
        </div>
    )
}
