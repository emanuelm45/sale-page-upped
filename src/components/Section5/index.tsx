import { iconCorrect, logoDesign } from '../../assets'
import { Button } from '../Button'
import { SectionContainer } from './style'

const Section5 = () => {
  return (
    <>
      <SectionContainer>
        <div>
          <figure>
            <img
              src={logoDesign}
              alt="Icon Design"
            />
          </figure>
          <strong>R$ 607,99</strong>
          <div>
            <img
              src={iconCorrect}
              alt="Icon Correct"
            />
            <p>Valor promocional com tudo incluso</p>
          </div>
          <p>
            POR 12x DE <strong>R$24,75</strong>
            <small>OU R$297,99 À VISTA</small>
          </p>
          <Button light>quero minha vaga agora</Button>
        </div>
      </SectionContainer>
    </>
  )
}

export { Section5 }
