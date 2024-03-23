import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Img,
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorModeValue,
  useMenuButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiSelector } from "react-icons/hi";

import BioTechLogo from "../../assets/Logos/biotechInc_Logo.png";
import LeafBotLogo from "../../assets/Logos/LeafBotics_Logo.png";

interface IAccount {
  id: string;
  name: string;
  logo: string;
}

const Accounts: IAccount[] = [
  {
    id: "bio-tech-inc",
    name: "Biotech Inc.",
    logo: BioTechLogo,
  },
  {
    id: "leaf-bots",
    name: "LeafBotics.com",
    logo: LeafBotLogo,
  },
];

export const AccountSwitcher = () => {
  const [activeAccount, setActiveAccount] = useState<IAccount>(Accounts[1]);

  return (
    <Menu>
      <AccountSwitcherButton company={activeAccount.name} logo={activeAccount.logo} />
      <MenuList shadow="lg" py="4" color={useColorModeValue("gray.600", "gray.200")} px="3">
        <Text fontWeight="medium" mb="2">
          theharryd987@gmail.com
        </Text>
        <MenuOptionGroup defaultValue="chakra-ui">
          {Accounts.map((account) => (
            <MenuItemOption
              value={account.id}
              fontWeight="semibold"
              rounded="md"
              onClick={() => {
                setActiveAccount(account);
              }}
              key={account.id}
            >
              {account.name}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
        <MenuDivider />
        <MenuItem rounded="md">Workspace settings</MenuItem>
        <MenuItem rounded="md">Add an account</MenuItem>
        <MenuDivider />
        <MenuItem rounded="md">Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

interface IAccountSwitcherButtonProps extends FlexProps {
  company: string;
  logo: string;
}

const AccountSwitcherButton = (props: IAccountSwitcherButtonProps) => {
  const buttonProps = useMenuButton(props);
  return (
    <Flex
      as="button"
      w="full"
      display="flex"
      alignItems="center"
      {...buttonProps}
      rounded="lg"
      bg="gray.700"
      px="3"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: "gray.600" }}
      _focus={{ shadow: "outline" }}
    >
      <HStack flex="1" spacing="3">
        <Img w="8" h="8" rounded="md" objectFit="cover" src={props.logo} alt="Logo" />
        <Box textAlign="start">
          <Box noOfLines={1} fontWeight="semibold">
            Harry Drew
          </Box>
          <Box fontSize="xs" color="gray.400">
            {props.company}
          </Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="gray.400">
        <HiSelector />
      </Box>
    </Flex>
  );
};
