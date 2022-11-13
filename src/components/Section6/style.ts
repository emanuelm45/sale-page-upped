import styled from 'styled-components'
import { bcgSection6 } from '../../assets'

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 90vh;
  background: url(${bcgSection6}) center/cover no-repeat;

  h2 {
    font-size: var(--fs-700);
    text-align: center;
    font-weight: var(--fw-bold);
    margin: 3rem 0;
    width: min(40rem, 90vw);
    color: var(--clr-white);

    strong {
      color: var(--clr-blue-300);
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  ul li figure {
    position: relative;
  }

  ul li:first-child figure::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.856162447889312) 9%,
      rgba(0, 0, 0, 0.5452380781414128) 57%,
      rgba(0, 0, 0, 0.3043417195979955) 85%
    );
  }

  ul li:last-child figure::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.856162447889312) 9%,
      rgba(0, 0, 0, 0.5452380781414128) 57%,
      rgba(0, 0, 0, 0.3043417195979955) 85%
    );
  }
`

export { SectionContainer }
