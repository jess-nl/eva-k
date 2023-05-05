import {
  Text,
  Flex,
  Box,
  Spacer,
  VStack,
  AspectRatio,
  Stack,
} from "@chakra-ui/react";
import urlFor from "../hooks/image";

const Header = ({ header }: any) => {
  const { title, mainImage, vimeoUrl } = header[0];
  const splittedTitle = title.split(" ");

  return (
    <Stack display="block" h="900px">
      <Stack position="absolute" w="100%">
        <Flex p="14">
          <Box>
            {splittedTitle.map((titlePiece: any, id: any) => (
              <Text fontSize="110px" lineHeight="110%" key={id}>
                {titlePiece}
                <br />
              </Text>
            ))}
          </Box>
          <Spacer />
          <VStack textAlign="right" spacing="100px">
            <Box p="4" w="360px">
              <Text color="#80687F" fontSize="3xl" lineHeight="80%">
                About Me
              </Text>
              <Text color="#CFC500" fontSize="2xl">
                fr | en
              </Text>
            </Box>
            <Box p="4" w="360px">
              <Text color="#80687F" fontSize="4xl">
                Biography
              </Text>
              <Text color="#80687F" fontSize="4xl">
                Released Works
              </Text>
              <Text color="#80687F" fontSize="4xl">
                Timeline
              </Text>
              <Text color="#80687F" fontSize="4xl">
                Work With Me
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Stack>
      <Box w="100%" h="350px" />
      <Box>
        <img
          src={urlFor(mainImage).height(400).maxHeight(900).url()}
          style={{
            position: "absolute",
            left: "0",
            right: "840px",
            margin: "auto",
            marginTop: "130px",
          }}
        />
      </Box>
      <Box zIndex={-1} position="absolute" display="block" w="100%" h="100%">
        <Box maxW="900px" h="370px" overflow="hidden" mx="auto">
          <AspectRatio maxW="900px" ratio={16 / 9} mt="-70px">
            <iframe
              title="tbd"
              src={`${vimeoUrl}?autoplay=1&autopause=0&muted=1&background=1#t=0m1s`}
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Box>
    </Stack>
  );
};

export default Header;
