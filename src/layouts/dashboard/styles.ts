import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.4rem;

  @media only screen and (min-width: 1075px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (min-width: 1300px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
