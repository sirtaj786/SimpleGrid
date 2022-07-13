import React from 'react'
import { SimpleGrid ,Box} from '@chakra-ui/react'

const Simple = () => {
  return (
    <Box>
   <SimpleGrid minChildWidth='120px' spacing='40px'>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
    </Box>
   
  )
}

export default Simple