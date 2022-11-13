import styled from 'styled-components'

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      317.07deg,
      rgba(19, 154, 228, 0.2) 23.09%,
      rgba(0, 0, 0, 0) 88.66%
    ),
    #000000;
  padding: 0 min(2rem, 2vw);

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(80rem);
    div {
      width: 45%;
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
`

export { SectionContainer }
