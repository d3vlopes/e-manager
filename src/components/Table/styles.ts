import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  overflow-x: auto;
`

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  `}
`

export const Thead = styled.thead`
  ${({ theme }) => css``}
`

export const Tr = styled.tr`
  ${({ theme }) => css`
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.neutral['200']};
    }
  `}
`

export const Th = styled.th`
  ${({ theme }) => css`
    text-align: left;
    padding: 0.8rem 2rem;
    background-color: ${theme.colors.neutral['100']};
    font-weight: bold;
    color: ${theme.colors.primary['600']};
  `}
`

export const Tbody = styled.tbody`
  ${({ theme }) => css``}
`

export const Td = styled.td`
  ${({ theme }) => css`
    padding: 0.8rem 2rem;
    color: ${theme.colors.dark};
  `}
`

export const ButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;

    a {
      color: ${theme.colors.neutral['100']};
    }
  `}
`
