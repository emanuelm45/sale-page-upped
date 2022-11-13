import { iconCorrect, imgDesktop } from '../../assets'
import { SectionContainer } from './style'

const Section3 = () => {
  return (
    <>
      <SectionContainer>
        <div>
          <figure>
            <img
              src={imgDesktop}
              alt="Desktop Image"
            />
          </figure>
          <div>
            <h2>
              Mas afinal, para quem é o <br /> <strong>CURSO UP DESIGN</strong>?
            </h2>
            <ul>
              <li>
                <img
                  src={iconCorrect}
                  alt="Icon Correct"
                />
                <p>Para quem está cansado de prestar serviço como freela.</p>
              </li>
              <li>
                <img
                  src={iconCorrect}
                  alt="Icon Correct"
                />
                <p>
                  Se sente insatisfeito com a desvalorização dos Designers e não
                  quer mais artistas que sujam o mercado.
                </p>
              </li>
              <li>
                <img
                  src={iconCorrect}
                  alt="Icon Correct"
                />
                <p>
                  E para você que quer finalmente conquistar a meta de R$10.000
                  por mês, apenas com um método de fechar contratos de uma forma
                  simples.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export { Section3 }
