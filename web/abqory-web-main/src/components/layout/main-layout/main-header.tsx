import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Container,
} from "@mantine/core"
import Link from "next/link"
import Image from "next/image"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons"

import abqoryLogo from "../../../../public/logo/abqory-logo.png"

const useStyles = createStyles((theme) => ({
  inner: {
    height: 65,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // background: "#ccc",
  },
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
      cursor: "pointer",
    }),
  },
  dropdownLink: {
    display: "block",
    height: "100%",
    width: "100%",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
    textDecoration: "none",
    padding: 0,
    ...theme.fn.hover({
      cursor: "pointer",
      background: "white",
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${Number(theme.spacing.md) * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}))

export default function MainHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const [akademiOpened, { toggle: toggleLinksAkademi }] = useDisclosure(false)
  const [eventOpened, { toggle: toggleLinksEvents }] = useDisclosure(false)
  const { classes, theme } = useStyles()

  return (
    <>
      <Header sx={{ position: "sticky" }} height={65}>
        <Container size="xl">
          <div className={classes.inner}>
            <Link href="/" className={classes.link}>
              <Image src={abqoryLogo} width={55} height={45} alt="abqory-logo" />
            </Link>
            <Group position="apart" sx={{ height: "100%" }}>
              <Group sx={{ height: "100%" }} spacing={0} className={classes.hiddenMobile}>
                <Link href="/" className={classes.link}>
                  Home
                </Link>
                <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
                  <HoverCard.Target>
                    <div className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Media
                        </Box>
                        <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                      </Center>
                    </div>
                  </HoverCard.Target>

                  <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                    <Group display="flex" sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                      <Link className={classes.dropdownLink} href="/media/abqory-tv">
                        Abqory TV
                      </Link>
                      <Link className={classes.dropdownLink} href="/media/abqory-talk">
                        Abqory Talk
                      </Link>
                      {/* <Link className={classes.dropdownLink} href="/media/abqory-book">
                        Abqory Book
                      </Link> */}
                    </Group>
                  </HoverCard.Dropdown>
                </HoverCard>
                <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
                  <HoverCard.Target>
                    <div className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Insitute
                        </Box>
                        <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                      </Center>
                    </div>
                  </HoverCard.Target>

                  <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                    <Group display="flex" sx={{ flexDirection: "column", alignItems: "flex-start" }}>
                      <Link className={classes.dropdownLink} href="/insitute/training">
                        Pelatihan
                      </Link>
                      <Link className={classes.dropdownLink} href="/insitute/webinar">
                        Webinar
                      </Link>
                      <Link className={classes.dropdownLink} href="/insitute/skill-upgrade">
                        Skill Upgrade
                      </Link>
                    </Group>
                  </HoverCard.Dropdown>
                </HoverCard>
                <Link href="/consultant" className={classes.link}>
                  Consultant
                </Link>
                <Link href="/artikel" className={classes.link}>
                  Artikel
                </Link>
              </Group>
              <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
            </Group>
          </div>
        </Container>
      </Header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Abqory Sharia"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

          <Link href="/" className={classes.link}>
            Home
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinksAkademi}>
            <Center inline>
              <Box component="span" mr={5}>
                Media
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={akademiOpened}>
            <UnstyledButton className={classes.subLink}>
              <Group noWrap align="flex-start">
                <div>
                  <Link className={classes.link} href="/media/abqory-tv">
                    Abqory Tv
                  </Link>
                  <Link className={classes.link} href="/media/abqory-talk">
                    Abqory Talk
                  </Link>
                  {/* <Link className={classes.link} href="/media/abqory-book">
                    Abqory Book
                  </Link> */}
                </div>
              </Group>
            </UnstyledButton>
          </Collapse>
          <UnstyledButton className={classes.link} onClick={toggleLinksEvents}>
            <Center inline>
              <Box component="span" mr={5}>
                Insitute
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={eventOpened}>
            <UnstyledButton className={classes.subLink}>
              <Group noWrap align="flex-start">
                <div>
                  <Link className={classes.link} href="/insitute/training">
                    Pelatihan
                  </Link>
                  <Link className={classes.link} href="/insitute/webinar">
                    Webinar
                  </Link>
                  <Link className={classes.link} href="/insitute/skill-upgrade">
                    Skill Upgrade
                  </Link>
                </div>
              </Group>
            </UnstyledButton>
          </Collapse>
          <Link href="/consultant" className={classes.link}>
            Consultant
          </Link>
          <Link href="/artikel" className={classes.link}>
            Artikel
          </Link>
          <Divider my="sm" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />
        </ScrollArea>
      </Drawer>
    </>
  )
}
