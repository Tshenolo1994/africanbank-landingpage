import React from 'react'
import { Grid, GridItem, Image, Box, Text , Flex, Button,  Radio, RadioGroup, Stack } from '@chakra-ui/react'
import ComparisonTabs from '../components/ComparisonTabs'

function Comparison() {
    
  return (
    <Box bg="#fafafa">
       <Grid templateColumns='repeat(2, 1fr)' gap={6} h="95vh">
  <GridItem w='100%' h='100%' display="flex" justifyContent="center" alignItems="start" flexDirection="column" pl={20} gap={50}>

    <Text fontSize="4xl" fontFamily="Altone Trial">Compare Products<br /> in Seconds</Text>
    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, itaque. Ipsum saepe sed voluptas optio neque quibusdam, illum officiis quidem recusandae! Culpa, magnam laboriosam fugiat suscipit explicabo consectetur omnis debitis!</Text>
    <Button>Get Started</Button>
  </GridItem>
  <GridItem w='100%' h='100%'display="flex" justifyContent="center" alignItems="center">

  <Box className='el-5'>
</Box>
  </GridItem>
  
</Grid>
<ComparisonTabs />

    </Box>
  )
}

export default Comparison