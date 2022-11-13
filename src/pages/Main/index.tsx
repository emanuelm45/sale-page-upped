import {
  Navbar,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7
} from '../../components'
import { MainContainer } from './style'

const Main = () => {
  return (
    <>
      <Navbar />
      <MainContainer>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </MainContainer>
    </>
  )
}

export { Main }
