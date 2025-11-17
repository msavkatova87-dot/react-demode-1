import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2 text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2 text-white" />
        )}
      </IconButton>

      <Drawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        className="bg-gray-950 backdrop-blur-md"
      >
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4 text-white"
        >
          {/* Brand */}
          <div className="mb-4 flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="brand"
              className="h-8 w-8"
            />
            <Typography variant="h5" color="white" className="font-serif">
              ZEGNA
            </Typography>
          </div>

          {/* Search */}
          <div className="mb-4">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
              label="Search"
              className="bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:!ring-blue-500 focus:!border-blue-500"
            />
          </div>

          {/* Menu */}
          <List>
            {/* Products Accordion */}
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 text-white transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0">
                <AccordionHeader onClick={() => handleOpen(1)} className="p-3">
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5 text-white" />
                  </ListItemPrefix>
                  <Typography className="mr-auto font-normal">Create Products</Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <Link to={"/create2"}>
                    <ListItem className="hover:bg-gray-700 rounded-lg">
                      <ListItemPrefix>
                        <ChevronRightIcon className="h-4 w-4 text-white" />
                      </ListItemPrefix>
                      Add Shoes
                    </ListItem>
                  </Link>
                  <Link to={"/create"}>
                    <ListItem className="hover:bg-gray-700 rounded-lg">
                      <ListItemPrefix>
                        <ChevronRightIcon className="h-4 w-4 text-white" />
                      </ListItemPrefix>
                      Add Shirt
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>

            {/* View Products Accordion */}
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 text-white transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0">
                <AccordionHeader onClick={() => handleOpen(2)} className="p-3">
                  <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5 text-white" />
                  </ListItemPrefix>
                  <Typography className="mr-auto font-normal">Products</Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <Link to={"/products2"}>
                    <ListItem className="hover:bg-gray-700 rounded-lg">
                      <ListItemPrefix>
                        <ChevronRightIcon className="h-4 w-4 text-white" />
                      </ListItemPrefix>
                      Shoes
                      <ListItemSuffix>
                        <Chip value="New" size="sm" variant="ghost" color="blue" className="text-white" />
                      </ListItemSuffix>
                    </ListItem>
                  </Link>
                  <Link to={"/products"}>
                    <ListItem className="hover:bg-gray-700 rounded-lg">
                      <ListItemPrefix>
                        <ChevronRightIcon className="h-4 w-4 text-white" />
                      </ListItemPrefix>
                      Shirt
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>

            <hr className="my-2 border-gray-700" />

            {/* Other links */}
            <ListItem className="hover:bg-gray-800 rounded-lg">
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="red" className="text-white" />
              </ListItemSuffix>
            </ListItem>

            <ListItem className="hover:bg-gray-800 rounded-lg">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              Profile
            </ListItem>

            <ListItem className="hover:bg-gray-800 rounded-lg">
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              Settings
            </ListItem>

            <ListItem className="hover:bg-gray-800 rounded-lg">
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
}
