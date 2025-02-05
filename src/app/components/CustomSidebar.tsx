import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { FaHome } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { MdOutlineStart } from "react-icons/md";
import { FaHeadSideVirus } from "react-icons/fa6";

export default function CustomSidebar() {
    return (<div>
        <Sidebar>
            <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                    <MdOutlineStart />                      
                    <span>AI Notes</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
            </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                    <FaHome />
                      <span>Home</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href='#'>
                    <IoStar />
                      <p>Favorites</p>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
            <SidebarMenuButton asChild>
                    <a href='#'>
                    <FaHeadSideVirus />
                      <span>Emmanuel Vincent</span>
                    </a>
                  </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
    </div>
      
    );
  }