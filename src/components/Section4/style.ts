import styled from 'styled-components'
import { bcgSection4 } from '../../assets'
import { devices } from '../../styles/devices'

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 80vh;
  background: url(${bcgSection4}) center/auto no-repeat;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
    background: linear-gradient(
        9.53deg,
        rgba(54, 150, 170, 0.4) 22.22%,
        rgba(0, 0, 0, 0) 76.78%
      ),
      #111111;
    pointer-events: none;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;

    h2 {
      font-weight: var(--fw-bold);
      font-size: var(--fs-800);
      width: min(35rem);
      text-align: center;
    }

    h3 {
      font-size: var(--fs-500);
      letter-spacing: 2.5px;
      margin: 1rem 0 2rem;
    }

    h2,
    h3 {
      color: var(--clr-white);
    }

    h3,
    strong span,
    em {
      color: var(--clr-blue-300);
    }

    img {
      filter: drop-shadow(1px 2px 20px rgba(255, 255, 255, 0.2));
    }
  }

  @media (${devices.tablet}) {
    background-size: cover;
    background-attachment: fixed;
  }
`

export { SectionContainer }
