import {
  Text,
  Flex,
  Box,
  Spacer,
  VStack,
  AspectRatio,
  Stack,
  Image,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack display="block" h="900px">
      <Stack position="absolute" w="100%">
        <Flex p="14">
          <Box>
            <Text fontSize="110px" lineHeight="110%">
              Eva <br /> Kabuya
            </Text>
          </Box>
          <Spacer />
          <VStack textAlign="right" spacing="100px">
            <Box p="4" w="360px">
              <Text color="#80687F" fontSize="3xl" lineHeight="80%">
                About Me
              </Text>
              <Text color="#CFC500" fontSize="2xl">fr | en</Text>
            </Box>
            <Box p="4" w="360px">
              <Text color="#80687F" fontSize="4xl">Biography</Text>
              <Text color="#80687F" fontSize="4xl">Released Works</Text>
              <Text color="#80687F" fontSize="4xl">Timeline</Text>
              <Text color="#80687F" fontSize="4xl">Work With Me</Text>
            </Box>
          </VStack>
        </Flex>
      </Stack>
      <Box w="100%" h="350px" />
      <Box>
        <Image
					src="https://bit.ly/dan-abramov"
					alt="Dan Abramov"
					h="300px"
					maxW="900px"
					position="absolute"
					left="0"
					right="840px"
					margin="auto"
					mt="130px"
        />
      </Box>
      <Box zIndex={-1} position="absolute" display="block" w="100%" h="100%">
        <Box maxW="900px" h="370px" overflow="hidden" mx="auto">
          <AspectRatio maxW="900px" ratio={16 / 9} mt="-70px">
            <iframe
              title="tbd"
              src="https://player.vimeo.com/video/530984056?h=337e6011fd?autoplay=1&autopause=0&muted=1&background=1#t=0m1s"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Box>
    </Stack>
  );
};

export default Header;
