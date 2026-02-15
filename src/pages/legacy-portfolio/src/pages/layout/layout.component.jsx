import { Outlet} from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar.component';
import './layout.styles.scss';

const Layout = () => {
    return (
        <div className="App">
            <Sidebar/>
            <div className="page">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;