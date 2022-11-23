import { SectionContainer, TextContainer } from './style'
import { bcgSection7 } from '../../assets'

const Section7 = () => {
  return (
    <>
      <SectionContainer>
        <TextContainer>
          <h2>Quem é Arthur?</h2>
          <p>
            Especialista em design, social media e gestor de tráfego. Atuo na
            área de design e com muito tempo de estudos e noites em claro
            aprendi a dominar tudo sobre comunicação visual.
          </p>
          <p>
            Depois de tanto tempo estudando e me dedicando, desenvolvi um método
            e um curso para ensinar pessoas iniciantes, designers e social
            medias que querem conquistar uma transformação de vida sendo um
            Designer Número 1.
          </p>
          <p>
            {' '}
            Minha missão é fazer com que você sinta confiança para trabalhar
            como designer e não seja apenas mais um no mercado, mas sim um
            profissional de destaque e de valor. Sua vida irá mudar para sempre
            depois que você dominar tudo sobre design, prospecção de clientes e
            como escalar suas artes.
          </p>
        </TextContainer>
        <figure>
          <img
            src={bcgSection7}
            alt="Photo Arthur"
          />
        </figure>
      </SectionContainer>
    </>
  )
}

export { Section7 }
