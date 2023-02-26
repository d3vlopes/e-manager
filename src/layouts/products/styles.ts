import styled, { css } from 'styled-components'

import { Wrapper as TableStyles } from 'components/Table/styles'

export const Header = styled.div`
  display: flex;
  gap: 1.6rem;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Divider = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.neutral['300']};
    margin: 4rem 0;
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${TableStyles} {
    margin-top: 2.4rem;
  }
`
