import styled from 'styled-components'
import { devices } from '../../styles/devices'

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: var(--bg-linear);

  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: var(--clr-white);
    width: min(30rem, 90vw);

    strong {
      font-weight: var(--fw-bold);
    }

    & > strong {
      font-size: var(--fs-900);
    }

    div {
      display: flex;
      align-items: center;

      img {
        display: inline;
        margin-right: 0.6rem;
      }

      p {
        font-size: var(--fs-500);
        margin: 1rem 0;
        font-weight: var(--fw-bold);
      }
    }

    p {
      margin: 0rem 0 2rem;
      font-size: var(--fs-800);

      small {
        display: block;
        font-size: var(--fs-500);
      }
    }
  }

  @media (${devices.tablet}) {
    a {
      width: 100%;
      font-size: var(--fs-400);
    }
  }
`

export { SectionContainer }
