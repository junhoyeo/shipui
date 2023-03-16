import styled from '@emotion/styled'

export const PageContainer = styled.div`
  margin: 48px auto 100px;
  max-width: 1100px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1140px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`
