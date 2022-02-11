import Navbar from '../../components/public/Navbar'
import Footer from '../../components/public/Footer'
import Index from '../../components/shuffle/Index'

export default function Shuffle() {
    return (
        <div>
            <Navbar />
            <div className="mb-40">
                <Index />
            </div>
            <Footer />
        </div>
    )
}
