import { logoRocket } from '../../assets'
import { Button } from '../Button'
import { SectionContainer } from './style'

const Section1 = () => {
  return (
    <>
      <SectionContainer>
        <div>
          <figure>
            <img
              src={logoRocket}
              alt="Logo Upped Training"
            />
          </figure>
          <h2>
            <strong>photoshop</strong> do zero ao <strong>avançado</strong>
          </h2>
          <p>
            A Fórmula para ganhar muito dinheiro como designer que me tornou
            independente antes dos 18 anos de idade! Mesmo começando do total 0
            e sem nenhuma experiência.
          </p>
          <Button light>quero minha vaga agora</Button>
        </div>
      </SectionContainer>
    </>
  )
}

export { Section1 }
