import Navbar from '../components/public/Navbar'
import Footer from '../components/public/Footer'
import Index from '../components/teams/Index'

export default function Teams() {
    return (
        <div>
            <Navbar />
            <Index />
            <div className="mt-40">
                <Footer />
            </div>
        </div>
    )
}
