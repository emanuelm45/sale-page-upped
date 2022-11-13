import styled from 'styled-components'
import { bcgSection4 } from '../../assets'
import { devices } from '../../styles/devices'

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 75vh;
  background: url(${bcgSection4}) center/cover no-repeat;
  padding: 2rem 0;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.5;
    background: var(--bg-linear);
    pointer-events: none;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    width: min(50rem, 95vw);
    text-align: center;

    h2 {
      font-weight: var(--fw-bold);
      font-size: var(--fs-800);
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
      filter: drop-shadow(1px 2px 20px rgba(255, 255, 255, 0.4));
    }
  }

  @media (${devices.tablet}) {
    background-attachment: fixed;
  }
`

export { SectionContainer }
