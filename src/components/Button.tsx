import styled from '@emotion/styled'

import { Colors } from '@/utils/colors'

export const ButtonList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const Button = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 16px;
  border-radius: 12px;
  border: 0;
  background: ${Colors.background};

  font-size: 1rem;
  font-weight: 600;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-radius: 12px;
    background-color: transparent;
    /* z-index: -1; */
    transition: all 0.2s ease;
  }

  transition: opacity 0.2s ease;

  &:hover {
    &::before {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  &:focus {
    &::before {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`
