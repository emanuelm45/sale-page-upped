import styled from 'styled-components'
import { bcgSection6 } from '../../assets'

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 90vh;
  background: url(${bcgSection6}) center/cover no-repeat;
  padding: 2rem 0;

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
`

export { SectionContainer }
