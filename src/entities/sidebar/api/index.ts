import { baseApi } from "@/shared/api/baseApi";
import { SidebarItem } from "../model/types";


export const sidebarApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sidebar: build.query<SidebarItem, void>({
      query: () => ({
        url: `/menu`,
      }),
    })
  }),
})

export const { useSidebarQuery } = sidebarApi