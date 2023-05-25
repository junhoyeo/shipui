import { NextPage } from 'next'
import { Badge, Box, Button, Input, Jazzicon, PageContainer, Select, SelectOption } from 'shipui'

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
  return (
    <PageContainer>
      <Box>
        <Badge>Badge</Badge>
        <Input />
        <Select options={options} onChange={(value) => console.log(value)} defaultValue="mango" />

        <Jazzicon address="0x5DAE915Eb74d803d16C7F62560e379B39B065652" colors={colors} />
        <Jazzicon address="0x3078389BDaA902819Ad38F2c22247427aA5Ab98e" colors={colors} />
        <Jazzicon address="0xB0Ed411516056Fa09F335b50d28542Cf3Bf065e5" colors={colors} />
        <Jazzicon address="0x4C1538BE5E0EAF9302ca067D5dDf9946240895e4" colors={colors} />
        <Jazzicon address="0xF71f4f0f15B761A10822cF0298637892AEDD51C1" colors={colors} />

        <Button>Button</Button>
      </Box>
    </PageContainer>
  )
}

export default HomePage
