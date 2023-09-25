import { type ReactNode , type FC  } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import './styles.scss'

type Props = {
  navbarSlot?: ReactNode
  headerSlot?: ReactNode
  bottomSlot?: ReactNode
  announcementSlot?: ReactNode
  SidebarSlot?: FC;
}

export const Layout = (props: Props) => {
  const { SidebarSlot } = props;
  return (
    <div className='layout'>
     {SidebarSlot && <div className="layout__sidebar"><SidebarSlot/></div>}
    <div className='layout__wrapper'>
      <div className={''}>
          <Outlet />
      </div>
      <footer className={''}>
        <div className="text_sm">
          {new Date().getFullYear()}, see source code on{' '}
          <a href="https://github.com/noveogroup-amorgunov/nukeapp">
            github/noveogroup-amorgunov/nukeapp
          </a>
        </div>
      </footer>
    </div>
      <ScrollRestoration/>
    </div>
  )
}