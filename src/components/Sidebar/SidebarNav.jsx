import { Stack } from "@chakra-ui/react"
import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"

export const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">

      <NavSection title="GENERAL">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Users</NavLink>
      </NavSection>

      <NavSection title="AUTOMATION">
        <NavLink icon={RiInputMethodLine}>Forms</NavLink>
        <NavLink icon={RiGitMergeLine}>Automation</NavLink>
      </NavSection>

    </Stack>
  )
}
