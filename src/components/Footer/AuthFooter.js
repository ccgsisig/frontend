/*eslint-disable*/
import React from "react";
import { Flex, List, ListItem } from "@chakra-ui/react";

export default function AuthFooter(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
      }}
      alignItems={{
        base: "center",
      }}
      justifyContent='space-between'
      pb='20px'
      fontSize='sm'>
      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
          }}>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
          }}>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
          }}>
        </ListItem>
        <ListItem>
        </ListItem>
      </List>
    </Flex>
  );
}
