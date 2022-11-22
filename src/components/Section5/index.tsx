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
          <strong>R$ 395,80</strong>
          <div>
            <img
              src={iconCorrect}
              alt="Icon Correct"
            />
            <p>Valor promocional com tudo incluso</p>
          </div>
          <p className="price">
            por apenas 12x DE <strong>R$19,78</strong>
            <small>ou R$197,90 à vista</small>
          </p>
          <Button light>quero minha vaga agora</Button>
        </div>
      </SectionContainer>
    </>
  )
}

export { Section5 }
