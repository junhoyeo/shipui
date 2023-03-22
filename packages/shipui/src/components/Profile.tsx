import styled from '@emotion/styled'
import { useMemo } from 'react'

import { PaletteProps, useColors } from '@/utils/colors'

import { Col } from './Col'

export type ProfileProps = { displayName: string }

export const Profile: React.FC<ProfileProps> = ({ displayName }) => {
  const colors = useColors()

  const initials = useMemo(() => {
    const names = displayName.trim().split(' ')
    return names.length > 1 ? names[0][0] + names[names.length - 1][0] : names[0][0]
  }, [displayName])

  return (
    <Col style={{ alignItems: 'center' }}>
      <ProfileImage colors={colors}>
        <span style={{ color: colors.primary }}>{initials}</span>
      </ProfileImage>
      <DisplayName>{displayName}</DisplayName>
    </Col>
  )
}

const ProfileImage = styled.div<PaletteProps>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${({ colors }) => colors.opacity35};

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.25rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`
const DisplayName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`
