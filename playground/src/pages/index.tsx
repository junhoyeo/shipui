import { NextPage } from 'next'
import { Badge, Box, Button, Input, PageContainer, Select, SelectOption } from 'shipui'

const options: SelectOption[] = [
  { value: 'mango', label: '🥭 Mango' },
  { value: 'peach', label: '🍑 Peach' },
  { value: 'apple', label: '🍎 Apple' },
  { value: 'banana', label: '🍌 Banana' },
]

const HomePage: NextPage = () => {
  return (
    <PageContainer>
      <Box>
        <Badge>Badge</Badge>
        <Input />
        <Select options={options} onChange={(value) => console.log(value)} defaultValue="mango" />
        <Button>Button</Button>
      </Box>
    </PageContainer>
  )
}

export default HomePage
