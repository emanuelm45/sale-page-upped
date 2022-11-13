import { imgTrajectory } from '../../assets'
import { SectionContainer } from './style'

const Section4 = () => {
  return (
    <>
      <SectionContainer>
        <div>
          <h2>
            <strong>
              O TREINAMENTO <span>UP DESIGN</span>
            </strong>{' '}
            será composto por <em>14 módulos!</em>
          </h2>
          <h3>E você vai aprender a dominar cada um deles.</h3>
          <figure>
            <img
              src={imgTrajectory}
              alt="Image Trajectory"
            />
          </figure>
        </div>
      </SectionContainer>
    </>
  )
}

export { Section4 }
