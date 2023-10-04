import { SidebarItem } from "@/entities/sidebar/model/types";
import { importRemote } from "@module-federation/utilities";
import { useRef, useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

export const ReactPage = () => {
  const { url, scope, module } = useLoaderData() as SidebarItem;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const unmountRef = useRef(() => null);
  const location = useLocation();

  useEffect(
    () => {
        window.dispatchEvent(
          new CustomEvent("[shell] navigated", {
            detail: {
              path: location.pathname,
              app: scope

            }
          })
        );
    },
    [location],
  );

  useEffect(
    () => {
      if(( !url || !scope || !module)) return
      (async () => {
        const {mount}:any = await importRemote({ url, scope, module })
        unmountRef.current = mount({mountPoint: wrapperRef.current!!})
      })()
      return () => {
        unmountRef.current()
      }
    },
    [url,scope, module],
  );



  return (
   <div id={url} ref={wrapperRef}></div>
  );
}