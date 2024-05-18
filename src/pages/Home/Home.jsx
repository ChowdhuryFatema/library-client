
import Background from "./Background";
import Banner from "./Banner";
import Books from "./Books";
import Contact from "./Contact";
import Feature from "./Feature";
import Gallery from "./Gallery";
import Progress from "./Progress";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Library | Home</title>
            </Helmet>
            <Banner></Banner>
            <Progress></Progress>
            <Background></Background>
            <Books></Books>
            <Feature></Feature>
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;