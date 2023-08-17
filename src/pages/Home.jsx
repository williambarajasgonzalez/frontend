import Body from "../Components/Body";
import Footer from "../Components/Footer";
import Header from "../Components/Header"

export default function Home(){
    return(
        <>
            <div className="bg-blue-200">
                <Header />
                <Body />
                <Footer />
            </div>
        </>
    );
}