import { Component } from 'react'
import { FaSpinner } from 'react-icons/fa'

import * as S from './styles'

export interface LoadingProps {
  color: string
  size?: string | number
}

export class Loading extends Component<LoadingProps> {
  render() {
    return (
      <S.Wrapper color={this.props.color} size={this.props.size || 3.4}>
        <FaSpinner />
      </S.Wrapper>
    )
  }
}
