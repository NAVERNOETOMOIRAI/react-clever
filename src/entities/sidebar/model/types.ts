export type Item = {
        title: string;
        type: string;
        path: string;
        url: string;
        scope: string | null;
        module: string | null;
}
export type SidebarItem = {
    items: SidebarItem[] | []
} & Item