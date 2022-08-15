import {
    Box,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    Flex,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaCheckCircle } from 'react-icons/fa';
  
  const options = [
    { id: 1, desc: '1 lorem ipsum' },
    { id: 2, desc: 'Lorem, ipsum dolor.' },
    { id: 3, desc: 'Monthly Updates' },
  ];
  interface PackageTierProps {
    title: string;
    options: Array<{ id: number; desc: string }>;
    typePlan: string;
    checked?: boolean;
  }
  const PackageTier = ({
    title,
    options,
    typePlan,
    checked = false,
  }: PackageTierProps) => {
    const colorTextLight = checked ? 'white' : 'purple.600';
    const bgColorLight = checked ? 'purple.400' : 'gray.300';
  
    const colorTextDark = checked ? 'white' : 'purple.500';
    const bgColorDark = checked ? 'purple.400' : 'gray.300';
  
    return (
      <Stack
        p={3}
        py={3}
        justifyContent={{
          base: 'flex-start',
          md: 'space-around',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        alignItems={{ md: 'center' }}>
        <Heading size={'md'}>{title}</Heading>
        <List spacing={3} textAlign="start">
          {options.map((desc, id) => (
            <ListItem key={desc.id} w="100%">
              <ListIcon as={FaCheckCircle} color="#C6E912" />
              {desc.desc}
            </ListItem>
          ))}
        </List>
        <Flex flexDirection="column" gap={4}>
        <Text>Earning from </Text>
        <Heading size={'xl'}> {typePlan}</Heading>
        <Text>Annual Income</Text>
        </Flex>
        <Stack>
          <Button
            size="md"
            color="#fafafafa"
            bgColor="#140e2e">
            Get Started
          </Button>
        </Stack>
      </Stack>
    );
  };
  const ThreeTierPricingHorizontal = () => {
    return (
      <Box py={6} px={5} min={'100vh'} mt={20}>
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <Stack
            p={5}
            alignItems={'center'}
            justifyContent={{
              base: 'flex-start',
              md: 'space-around',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}>
            <Stack
              width={{
                base: '100%',
                md: '40%',
              }}
              textAlign={'center'}>
              <Heading size={'lg'}>
              Get the credit card that suits you
              </Heading>
            </Stack>
            <Stack
              width={{
                base: '100%',
                md: '60%',
              }}>
              <Text textAlign={'center'} w="85" textAlign="left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                quod in iure vero. Facilis magnam, sed officiis commodi labore
                odit.
              </Text>
            </Stack>
          </Stack>
          <Divider />
          <PackageTier title={'Blue Credit Card'} typePlan="R84 000" options={options} />
          <Divider />
          <PackageTier
            title={'Wealth Credit Card'}
            checked={true}
            typePlan="R240 000"
            options={options}
          />
          <Divider />
          <PackageTier title={'Premium Credit Card'} typePlan="R850 000" options={options} />
        </Stack>
      </Box>
    );
  };
  
  export default ThreeTierPricingHorizontal;