import React from "react";
import "./Sidebar.scss";
import { Box, Circle, Flex, Stack } from "@chakra-ui/react";
import { AccountSwitcher } from "./AccountSwitcher";
import { NavItem } from "./NavItem";
import { NavGroup } from "./NavGroup";
import { BiBuoy, BiCog, BiEnvelope, BiPurchaseTagAlt, BiRecycle } from "react-icons/bi";
import {
  AiOutlineBarChart,
  AiOutlineDashboard,
  AiOutlineDollar,
  AiOutlineSetting,
} from "react-icons/ai";

import ServerIcon from "../../assets/icons/servers_622397.svg";
import ObjectMapperIcon from "../../assets/icons/3d-cube_1723788.svg";
import DeviceManagerIcon from "../../assets/icons/robotic-arm_1404716.svg";
import SystemIcon from "../../assets/icons/settings_3067451.svg";
import EventViewerIcon from "../../assets/icons/event_839888.svg";
import SimulationIcon from "../../assets/icons/augmented-reality_7085016.svg";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <Flex h="full" id="app-container">
        <Box className="sidebar__inner-container" bg="gray.900" color="white" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <AccountSwitcher />
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <NavGroup label="Account Overview">
                <NavItem icon={<AiOutlineDashboard />} label="Dashboard" />
                <NavItem icon={<AiOutlineBarChart />} label="Analytics" />
                <NavItem icon={<AiOutlineDollar />} label="Billing" />
              </NavGroup>

              <NavGroup label="Tools">
                <NavItem active={true} icon={<AiOutlineSetting />} label="Schedule Editor" />
                <NavItem
                  icon={<img src={ServerIcon} className="sidebar__svg-icon" />}
                  label="Storage Manager"
                />
                <NavItem
                  icon={<img src={ObjectMapperIcon} className="sidebar__svg-icon" />}
                  label="Object Manager"
                />
                <NavItem
                  icon={<img src={DeviceManagerIcon} className="sidebar__svg-icon" />}
                  label="Device Manager"
                />
                <NavItem
                  icon={<img src={SystemIcon} className="sidebar__svg-icon" />}
                  label="System"
                />
                <NavItem
                  icon={<img src={EventViewerIcon} className="sidebar__svg-icon" />}
                  label="Event Viewer"
                />
                <NavItem
                  icon={<img src={SimulationIcon} className="sidebar__svg-icon" />}
                  label="Simulation"
                />
              </NavGroup>
            </Stack>
            <Box>
              <Stack spacing="1">
                <NavItem subtle icon={<BiCog />} label="Settings" />
                <NavItem subtle icon={<BiBuoy />} label="Help & Support" />
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Sidebar;
