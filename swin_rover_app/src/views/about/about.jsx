import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Hero from '../../components/aboutHero/aboutHero'
import Mission from '../../components/mission/mission'
import { Box } from '@mui/system'

export default function About(){
    return(
        <>
            <Navbar/>
            <Box marginY={5}>
                <Hero/>
            </Box>
            <Mission/>
            <Footer/>
        </>
    )
}