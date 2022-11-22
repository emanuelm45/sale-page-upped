import styled from 'styled-components'
import { banner, bcgMobileSection1 } from '../../assets'
import { devices } from '../../styles/devices'

const SectionContainer = styled.section`
  min-height: calc(90vh - 100px);
  width: 100vw;
  background: url(${banner}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3rem min(4rem, 5vw) 2rem;

  div {
    width: min(35rem, 90vw);
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      font-weight: var(--fw-bold);
      text-transform: uppercase;
      font-size: var(--fs-600);
      margin: 1rem 0;
    }

    h2,
    p {
      color: var(--clr-white);
    }

    p {
      margin-bottom: 3rem;
      font-size: var(--fs-500);
    }

    strong {
      color: var(--clr-blue-300);
    }
  }

  @media (${devices.tablet}) {
    background: url(${bcgMobileSection1}) top right / cover no-repeat;
    padding-top: 12rem;
    margin-top: 0;

    a {
      font-size: var(--fs-400);
      width: 100%;
    }
  }
`
export { SectionContainer }
