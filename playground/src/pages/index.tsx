import styled from '@emotion/styled'
import { NextPage } from 'next'
import { useState } from 'react'
import {
  Badge,
  Box,
  Button,
  Col,
  Input,
  PageContainer,
  Select,
  useColors,
  type Palette,
  type SelectOption,
} from 'shipui'
import { Jazzicon } from 'shipui/dist/components/Jazzicon'

const options: SelectOption[] = [
  { value: 'mango', label: '🥭 Mango' },
  { value: 'peach', label: '🍑 Peach' },
  { value: 'apple', label: '🍎 Apple' },
  { value: 'banana', label: '🍌 Banana' },
]

const colors = [
  '#2CD3E1',
  '#92D0FF',
  '#8dddff',
  '#ABF2E1',
  '#F9F7A2',
  '#FFC537',
  '#FFB84C',
  '#FF9088',
  '#F266AB',
  '#A459D1',
  '#7295ff',
  '#1E8CE0',
]

const HomePage: NextPage = () => {
  const palette = useColors()
  const [jazziconKey, setJazziconKey] = useState<string>(
    '12955c65fdd11a829805993598574ac9a8265812300f75dbc96eac358b5cb419',
  )

  return (
    <PageContainer>
      <Col>
        <Box>
          <Badge>Badge</Badge>
          <Input />
          <Select options={options} onChange={(value) => console.log(value)} defaultValue="mango" />
        </Box>

        <Box>
          <StyledJazzicon palette={palette} address={jazziconKey} colors={colors} size={64} />
          <Button
            onClick={async () => {
              const utf8 = new TextEncoder().encode(Math.random().toString(16))
              const hashBuffer = await crypto.subtle.digest('SHA-256', utf8)
              const hashArray = Array.from(new Uint8Array(hashBuffer))
              const hashHex = hashArray.map((bytes) => bytes.toString(16).padStart(2, '0')).join('')
              setJazziconKey(hashHex)
            }}
          >
            Random
          </Button>
        </Box>
      </Col>
    </PageContainer>
  )
}

export default HomePage

const StyledJazzicon = styled(Jazzicon)<{ palette: Palette }>`
  & > span,
  svg {
    background-color: ${({ palette }) => palette.primary};
  }
`
