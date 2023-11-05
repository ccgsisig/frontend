/*eslint-disable*/
import React from "react";
import { Flex, List, ListItem } from "@chakra-ui/react";

export default function Footer(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px='30px'
      pb='20px'>
      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}>
        </ListItem>
        <ListItem>
        </ListItem>
      </List>
    </Flex>
  );
}

