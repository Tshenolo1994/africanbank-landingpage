import React, {useState} from 'react'
import { Select } from '@chakra-ui/react'
import { Grid, GridItem, Box, CircularProgress, CircularProgressLabel, Text, Flex ,  Button, Stack, Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
  SliderMark, Tooltip} from '@chakra-ui/react'
  import millify from "millify";
function Loan() {

const [totalInvestment, setTotalInvestments] = useState('0')
const [AmountValue, setAmountValue] = useState('')
const [TypeValue, setTypeValue] = useState('')
const [frequencyValue, setFrequencyValue] = useState('')
  const [sliderValue, setSliderValue] = React.useState(0)
  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }
  const rates = [{
    interest:6.0,
    term:3,
  },
  {
    interest:8.16,
    term:12,
  },
  {
    interest:9,
    term:24,
  },
  {
    interest:9.45,
    term:36,
  },
  {
    interest:10.19,
    term:60,
  },
]
const handleCalculations  = () => {
  let investmentTotal = 0;
  if(sliderValue <= 3){
  const i = rates[0].interest
  investmentTotal = AmountValue*(1 + (i/100))^(3/12)
  setTotalInvestments(investmentTotal)
  }
  else if(sliderValue > 3 && sliderValue <= 12) {
    const i = rates[1].interest
    investmentTotal = AmountValue*(1 + (i/100))^(12/12)
    setTotalInvestments(investmentTotal)
  }
  else if(sliderValue > 12 && sliderValue <= 24) {
    const i = rates[2].interest
    investmentTotal = AmountValue*(1 + (i/100))^(24/12)
    setTotalInvestments(investmentTotal)
  }
  else if(sliderValue > 24 && sliderValue <= 36) {
    const i = rates[3].interest
    investmentTotal = AmountValue*(1 + (i/100))^(36/12)
    setTotalInvestments(investmentTotal)
  }
  else if(sliderValue > 36 && sliderValue <= 48) {
    const i = rates[4].interest
    investmentTotal = AmountValue*(1 + (i/100))^(48/12)
    setTotalInvestments(investmentTotal)
  }
  else if(sliderValue > 48 && sliderValue <= 60) {
    const i = rates[4].interest
    investmentTotal = AmountValue*(1 + (i/100))^(60/12)
    setTotalInvestments(investmentTotal)
  }
}

  return (
<Grid templateColumns={'60% 40%'} gap={0} h="100%"
pt={300}
>
  <GridItem w='100%' h='100%' p={24} display="flex" justifyContent="center" alignItems="center"> 
<Flex flexDirection="column" gap={5}>

    <Text fontSize="4xl" w="100%">Calculate your potential Investment returns</Text>
    <Text w="75%">Lower your rate. Change your term. Take cash out to pay off debt. No matter which option you choose, refinancing with Lower can save you money.</Text>
<Stack spacing={16}>
<Flex flexDirection="column">
<Text fontWeight={500} fontSize="18px">How much do you want to invest?</Text>
<Input variant='flushed' placeholder='R' type="number"
onChange={(e) => setAmountValue(e.target.value)}

/>
</Flex>
  <Flex flexDirection="column">
    <Text fontWeight={500} fontSize="18px">Which investment type do you want?</Text>
  <Select placeholder='Fixed deposit' variant='flushed' onChange={(e) => setTypeValue(e.target.value)}>
  <option value='notice-deposit'>Notice Deposit</option>
  <option value='access-accumulator'>Access Accumulator</option>
  <option value='tax-free'>Tax Free</option>
</Select>
  </Flex>
<Flex flexDirection="column" >
  <Text fontWeight={500} fontSize="18px" mb={12}>For how long do you want to invest</Text>
<Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}

defaultValue={0}
      min={0}
      max={60}
      step={12}
      // colorScheme='black'
>
        <SliderMark value={3} {...labelStyles}>
          3 mon
        </SliderMark>
        
        <SliderMark value={12} {...labelStyles}>
          12 mo
        </SliderMark>
        <SliderMark value={24} {...labelStyles}>
          24 mo
        </SliderMark>
        <SliderMark value={36} {...labelStyles}>
          36 mo
        </SliderMark>
        <SliderMark value={60} {...labelStyles} >
          60 mo
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='#C6E912'
          color='#2b2b2b'
          mt='-10'
          ml='-5'
          w='12%'
        >
          {sliderValue} mo.
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
</Flex>
<Flex flexDirection="column">
    <Text fontWeight={500} fontSize="18px">Which payout frequency do you prefer?</Text>
  <Select placeholder='monthly' variant='flushed' onChange={(e) => setFrequencyValue(e.target.value)}>
  <option value='12'>monthly</option>
  <option value='2'>bi-annually</option>
  <option value='1'>annually</option>
</Select>
  </Flex>
</Stack>
<Flex>

</Flex>
    <Flex gap={2} mt={10}>
    <Button w="50%" onClick={handleCalculations}> Calculate repayment</Button>
    <Button w="50%"> Apply now</Button>
    </Flex>
</Flex>

  </GridItem>
  
  <GridItem w='100%' h='100%'p={24} display="flex" justifyContent="center" alignItems="center">
  <Box>
  <CircularProgress value={40} color="#C6E912" size="450" thickness='4px' >
 
  <CircularProgressLabel fontSize="7xl"> R {totalInvestment}
  <br />
  <Text fontSize="lg">avg monthly income</Text>
  </CircularProgressLabel>

</CircularProgress>
</Box>
  </GridItem>

</Grid>
  )
}

export default Loan