import styled from 'styled-components'
import { devices } from '../../styles/devices'

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-linear);
  padding: 2rem min(2rem, 2vw);

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(80rem, 90vw);
    div {
      width: min(40rem, 100%);
      h2 {
        color: var(--clr-white);
        font-weight: var(--fw-bold);
        font-size: var(--fs-800);
        margin-bottom: 2rem;
      }

      ul {
        li {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;

          img {
            margin-right: 1rem;
          }

          p {
            color: var(--clr-white);
            font-size: var(--fs-500);
          }
        }
      }
    }
  }

  @media (${devices.tablet}) {
    div {
      flex-direction: column;

      h2 {
        margin-top: 2rem;
        text-align: center;
      }
    }
    div div ul li p {
      font-size: var(--fs-400);
    }
  }
`

export { SectionContainer }
