import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sarah!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    // isDarkBackground
    backgroundColor="#F8EBE6"
  >
    <VStack>
      <Avatar
        size="2xl"
        name="Sarah Padilla"
        src={require('../images/santorini.jpeg')}
      />
      <p>{greeting}</p>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
