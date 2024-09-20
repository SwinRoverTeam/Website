import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Hero from '../components/aboutHero/aboutHero'
import Mission from '../components/mission/mission'
import Departments from '../components/department/department'
import CodeOfConduct from '../components/codeOfConduct/codeOfConduct'
import History from '../components/history/history'
import { Box } from '@mui/system'

export default function About(){
    return(
        <>
            <Navbar/>
            <Box marginY={3}>
                <Hero/>
            </Box>
            <Mission/>
            <History />
            <Departments/>
            <CodeOfConduct/>
            <Footer/>
        </>
    )
}