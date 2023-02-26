import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const RadioWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    accent-color: ${theme.colors.primary['500']};

    span {
      margin: 0.8rem 0;
      color: ${theme.colors.neutral[600]};
    }
  `}
`

export const RadioContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`
