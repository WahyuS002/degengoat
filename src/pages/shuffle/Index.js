import Navbar from '../../components/public/Navbar'
import Footer from '../../components/public/Footer'
import Index from '../../components/shuffle/Index'

export default function Shuffle() {
    return (
        <div>
            <Navbar />
            <div className="mt-20 mb-20">
                <Index />
            </div>
            <Footer />
        </div>
    )
}
