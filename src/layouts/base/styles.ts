import styled from 'styled-components'

export const Wrapper = styled.main`
  max-width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    & {
      max-width: 80%;
    }
  }

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`
