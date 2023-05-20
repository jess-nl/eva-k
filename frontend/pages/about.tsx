import groq from "groq";
import client from "../client";
import PortableTextComponent from "../hooks/richText";
import urlFor from "../hooks/image";
import { Flex, Box, Grid, GridItem } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import Image from "next/image";

const About = ({ about }: any) => {
  const { mainImage, longSummary } = about[0];
  return (
    <>
      <Box minHeight="100%" w="100%" h="100%">
        <Flex h="100vh">
          <Box bg="#80687F" width="100%">
            <Flex>
              <Grid templateColumns="repeat(6, 1fr)" minHeight="100vh">
                <GridItem colSpan={2} px={20} pt="80px">
                  <BackButton color="#CFC500" noHash />
                </GridItem>
              </Grid>
              <Box mx="20%" mt="250px">
                {longSummary && (
                  <PortableTextComponent
                    content={longSummary}
                    fontSize="lg"
                    color="#CFC500"
                  />
                )}
              </Box>
            </Flex>
          </Box>

          <Box bg="#A8973F">
            {mainImage && (
              <Image
                src={urlFor(mainImage).width(1200).height(1200).toString()}
                style={{ width: "100%" }}
                alt=''
              />
            )}
          </Box>
        </Flex>
      </Box>
      <Box position="fixed" bottom="0" zIndex="1" w="100%">
        <Footer />
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const about = await client.fetch(groq`
    *[_type == "about"]
  `);
  return {
    props: {
      about,
    },
  };
}

export default About;
