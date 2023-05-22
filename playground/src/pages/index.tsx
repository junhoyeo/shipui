import { NextPage } from 'next'
import { Badge, Box, Button, Input, Jazzicon, PageContainer, Select, SelectOption } from 'shipui'

const options: SelectOption[] = [
  { value: 'mango', label: '🥭 Mango' },
  { value: 'peach', label: '🍑 Peach' },
  { value: 'apple', label: '🍎 Apple' },
  { value: 'banana', label: '🍌 Banana' },
]

const colors = [
  '#1E8CE0',
  '#92D0FF',
  '#C7D3F7',
  '#C4E0FE',
  '#ABF2E1',
  '#F9F7A2',
  '#FFE1AC',
  '#FFC537',
  '#FAB1F0',
  '#FF9088',
]

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <Box>
        <Badge>Badge</Badge>
        <Input />
        <Select options={options} onChange={(value) => console.log(value)} defaultValue="mango" />

        <Jazzicon address="1324545" colors={colors} />
        <Jazzicon address="45" colors={colors} />
        <Jazzicon address="5645567467yetgrgggert" colors={colors} />
        <Jazzicon address="fergrgf434334gerrg" colors={colors} />
        <Jazzicon address="1324545" colors={colors} />
        <Button>Generate</Button>
      </Box>
    </PageContainer>
  )
}

export default HomePage
