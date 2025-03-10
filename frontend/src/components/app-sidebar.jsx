'use client'

import * as React from "react"
import { useContext } from "react"
import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import MenuContext from "@/Context/menuContext"
import Link from "next/link"

// This is sample data.
const data = {
  versions: ["1.1.0-alpha"],
  navMain: [
    {
      title: "Polls",
      url: "#",
      items: [
        {
          title: "Public Polls",
          url: '/service/publicpolls'
        },
        {
          title: "Create a poll",
          url: "/service/create",
        },
        {
          title: "My Polls",
          url: "/service/mypolls",
        },
      ],
    },
    {
      title: "Votes",
      url: "#",
      items: [
        {
          title: "My votes",
          url: "/service/myvotes",
        }
      ],
    },
    {
      title : "About",
      url: "#",
      items: [
        {
          title : "About us",
          url: "/service/aboutus"
        },
        {
          title : "Contact us",
          url: "/service/contactus"
        },
      ]
    }
  ],
}

export function AppSidebar({
  ...props
}) {
  const {setLevel1, setLevel2} = useContext(MenuContext)
  return (
    (<Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title} onClick={()=>{
            setLevel1(item.title)
          }}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive} onClick={()=>{
                      setLevel2(item.title)
                  }}>
                    <Link href={item.url}>
                      {item.title}
                    </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>)
  );
}