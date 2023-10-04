import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Sidebar } from '@/widgets/sidebar/ui'
import { Spinner } from '../Spinner';

import './styles.scss'


type Props = {
  withSidebar?: boolean;
  withFooter?: boolean;
  withSpinner?: boolean;
  withLayoutWrapperHeader?: string;
}

export const Layout = (props: Props) => {
  const { withSidebar, withFooter, withSpinner, withLayoutWrapperHeader } = props;
  return (
    <div className='layout'>
     {withSidebar && <div className="layout__sidebar"><Sidebar/></div>}
      <div className='layout__wrapper'>
        {withLayoutWrapperHeader && <div className='layout__wrapper-header'>{withLayoutWrapperHeader}</div>}
        {withSpinner ? <div className='layout__wrapper-spinner'>{<Spinner/>}</div> : <Outlet />}
        {withFooter && <footer>
            <div className="text_sm">
              {new Date().getFullYear()}, see source code on{' '}
              <a href="https://github.com/navernoetomoirai">
                https://github.com/navernoetomoirai
              </a>
            </div>
        </footer>}
      </div>
      {withSidebar && <ScrollRestoration/>}
    </div>
  )
}