import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box , Flex, Text, Button,   Radio, RadioGroup, Stack} from '@chakra-ui/react'
import {HiOutlineDocumentText} from "react-icons/hi"
import LoansList from "../components/LoansList"
import InvestmentsList from "../components/InvestmentsList"
import CreditList from "../components/CreditList"
import InsuranceList from "../components/InsuranceList"

function ComparisonTabs() {
    const [value, setValue] = React.useState('1')
  return (
    <Tabs variant='' colorScheme='green'>
    <TabList display="flex" alignItems="center" justifyContent="center" overflowX={'auto'}>
      <Tab>
      <Box backgroundColor="rgba(0,24,69, .3)" h="100%" p={12}
      boxSize="350px">
  <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <HiOutlineDocumentText
    size="80px"
    fill='#141437'
    color='#f0f0fa'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Compare Loans</Text>
     <Text >Get the best loan rates in the country. Gaurateed returns in 60 months, with personal loan rate at just 12%</Text>
     <Button>Compare</Button>
</Box>
 </Flex>
  </Box>
      </Tab>
      <Tab>
      <Box backgroundColor="rgba(198,233,18, .4)" h="100%" p={12}
      boxSize="350px">
  <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <HiOutlineDocumentText
  size="80px"
  fill='#C6E912'
  color='#ebffad'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Compare Credit rates</Text>
     <Text>Get the best loan rates in the country. Gaurateed returns in 60 months, with personal loan rate at just 12%</Text>
     <Button>Compare</Button>
</Box>
 </Flex>
  </Box>
      </Tab>
      <Tab>
      <Box backgroundColor="rgba(0,24,69, .3)" h="100%" p={12}
      boxSize="350px">
  <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <HiOutlineDocumentText
    size="80px"
    fill='#141437'
    color='#f0f0fa'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Compare Investments</Text>
     <Text>Get the best loan rates in the country. Gaurateed returns in 60 months, with personal loan rate at just 12%</Text>
     <Button>Compare</Button>
</Box>
 </Flex>
  </Box>
      </Tab>
      <Tab>
      <Box backgroundColor="rgba(198,233,18, .4)"h="100%" p={12}
      boxSize="350px">
  <Flex flexDirection="column" justifyContent="space-evenly" h="100%">
 <HiOutlineDocumentText
   size="80px"
   fill='#C6E912'
   color='#ebffad'
     />
<Box display="flex" flexDirection="column" gap="2">
<Text fontWeight="600" fontSize='22px' >Compare Insurance</Text>
     <Text>Get the best loan rates in the country. Gaurateed returns in 60 months, with personal loan rate at just 12%</Text>
     <Button>Compare</Button>
</Box>
 </Flex>
  </Box>
      </Tab>
    
    
    </TabList>
    <TabPanels>
      <TabPanel p={24}>
       <Box>
       <Box display="flex" justifyContent="center"><RadioGroup onChange={setValue} value={value}>
      <Stack direction='row' spacing={12}>
        <Radio value='1'>Earning less than R14 000</Radio>
        <Radio value='2'> Earning more than R14 000</Radio>
        <Radio value='3'>Low Rates</Radio>
        <Radio value='4'>High Rates</Radio>
      </Stack>
    </RadioGroup></Box>
       </Box>
       <LoansList />
      </TabPanel>
      <TabPanel p={24}>
      <Box>
      <Box display="flex" justifyContent="center"><RadioGroup onChange={setValue} value={value}>
      <Stack direction='row' spacing={12}>
        <Radio value='1'>Earning less than R14 000</Radio>
        <Radio value='2'> Earning more than R14 000</Radio>
        <Radio value='3'>Low Rates</Radio>
        <Radio value='4'>High Rates</Radio>
      </Stack>
    </RadioGroup></Box>
     <InvestmentsList />
      </Box>
      </TabPanel>
      <TabPanel p={24}>
 <Box>
 <Box display="flex" justifyContent="center"><RadioGroup onChange={setValue} value={value}>
      <Stack direction='row' spacing={12}>
        <Radio value='1'>Earning less than R14 000</Radio>
        <Radio value='2'> Earning more than R14 000</Radio>
        <Radio value='3'>Low Rates</Radio>
        <Radio value='4'>High Rates</Radio>
      </Stack>
    </RadioGroup></Box>
    <CreditList />
 </Box>
      </TabPanel>
      <TabPanel p={24}>
<Box>
<Box display="flex" justifyContent="center"><RadioGroup onChange={setValue} value={value}>
      <Stack direction='row' spacing={12}>
        <Radio value='1'>Earning less than R14 000</Radio>
        <Radio value='2'> Earning more than R14 000</Radio>
        <Radio value='3'>Low Rates</Radio>
        <Radio value='4'>High Rates</Radio>
      </Stack>
    </RadioGroup></Box>
    <InsuranceList />
</Box>
      </TabPanel>
  
    </TabPanels>
  </Tabs>
  )
}

export default ComparisonTabs