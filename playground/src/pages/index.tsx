import { NextPage } from 'next'
import { useState } from 'react'
import { Badge, Box, Button, Col, Input, Jazzicon, PageContainer, Row, Select, SelectOption } from 'shipui'

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
  const [jazziconKey, setJazziconKey] = useState<string>('0')

  return (
    <PageContainer>
      <Col>
        <Box>
          <Badge>Badge</Badge>
          <Input />
          <Select options={options} onChange={(value) => console.log(value)} defaultValue="mango" />
        </Box>

        <Box>
          <Row>
            <Jazzicon address="0x5DAE915Eb74d803d16C7F62560e379B39B065652" colors={colors} />
            <Jazzicon address="0x3078389BDaA902819Ad38F2c22247427aA5Ab98e" colors={colors} />
            <Jazzicon address="0xB0Ed411516056Fa09F335b50d28542Cf3Bf065e5" colors={colors} />
            <Jazzicon address="0x4C1538BE5E0EAF9302ca067D5dDf9946240895e4" colors={colors} />
            <Jazzicon address="0xF71f4f0f15B761A10822cF0298637892AEDD51C1" colors={colors} />
          </Row>

          <Jazzicon address={jazziconKey} colors={colors} size={100} />
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
