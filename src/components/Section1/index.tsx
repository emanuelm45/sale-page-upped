import { useRef } from 'react'
import { logoRocket } from '../../assets'
import { Button } from '../Button'
import { SectionContainer } from './style'

const Section1 = () => {
  const handleClick = () => {
    const win: Window = window
    win.location = 'https://pay.kiwify.com.br/yEPKoyZ'
  }

  return (
    <>
      <SectionContainer id="home">
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
          <Button
            light
            onClick={handleClick}
          >
            quero minha vaga agora
          </Button>
        </div>
      </SectionContainer>
    </>
  )
}

export { Section1 }
