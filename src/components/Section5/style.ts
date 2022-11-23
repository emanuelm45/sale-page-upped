import styled from 'styled-components'
import { devices } from '../../styles/devices'

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: var(--bg-linear);
  padding: 2rem 0;

  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: var(--clr-white);
    width: min(30rem, 90vw);

    p.price {
      margin: 0rem 0 2rem;
      font-size: var(--fs-800);
      text-transform: uppercase;

      small {
        display: block;
        font-size: var(--fs-500);
      }
    }

    strong {
      font-weight: var(--fw-bold);
    }

    & > strong {
      font-size: var(--fs-900);
      position: relative;

      &::before,
      &::after {
        content: '';
        height: 3px;
        background-color: var(--clr-white);
        display: block;
        position: absolute;
        width: 100%;
      }

      &::before {
        top: 50%;
        transform: rotate(15deg);
      }
      &::after {
        top: 50%;
        transform: rotate(-15deg);
      }
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
        text-transform: uppercase;
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
