import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "../../redux/stores/rootStore";
import './sidebar.scss'
import {FULL_SIDEBAR} from "../../redux/types";
import {MainLogo} from "../../media/svg";
import account from '../../media/images/avatar_default.jpg'
import ActiveLink from "../ActiveLink/ActiveLink";
import {
    HomeOutlined,
    SearchOutlined,
    ManageAccountsOutlined,
    SettingsOutlined,
    Menu, TranslateOutlined,
    NotificationsOutlined,
    LogoutOutlined
} from '@mui/icons-material'

const PanelNavigation = [
    {
        id: 1,
        name: 'App',
        icon: HomeOutlined,
        route: '/home'
    },
    {
        id: 2,
        name: 'Search',
        icon: SearchOutlined,
        route: '/search'
    },
    {
        id: 3,
        name: 'Account',
        icon: ManageAccountsOutlined,
        route: '/account'
    },
    {
        id: 4,
        name: 'Settings',
        icon: SettingsOutlined,
        route: '/settings'
    }
]

const Sidebar = (): JSX.Element => {

    const dispatch = useDispatch()
    const fullSideBar = useSelector((state: RootReducer) => state.app.fullSidebar)

    const showHide = () => {
        dispatch({type: FULL_SIDEBAR, payload: !fullSideBar})
    }

    return (
        <div className="panel" style={{width: fullSideBar ? '17rem' : '4rem'}}>
            {/*<div className="panel-logo">*/}
            {/*    {<MainLogo width={fullSideBar ? 10 : 4} />}*/}
            {/*</div>*/}
            <div className="panel-top">
                <div className="panel-top-logo">
                    <h3>Music</h3>
                    <div className="btn" onClick={showHide}>
                        {<Menu/>}
                    </div>
                </div>
                <div className="panel-top-extra">
                    <div className="btn">
                        {<TranslateOutlined />}
                    </div>
                    <div className="btn">
                        {<NotificationsOutlined />}
                    </div>
                    <div className="btn">
                        {<LogoutOutlined />}
                    </div>
                </div>
            </div>
            <div className="panel-account">
                <div className="panel-account-image">
                    <img src={account} alt="Default photo"/>
                </div>
                {
                    fullSideBar &&
                    <div className="panel-account-fullname">
                        <h4>John</h4>
                        <h4>Doe</h4>
                    </div>
                }
            </div>
            <div className="panel-navigation">
                {
                    PanelNavigation.map(navigation => {
                        return (
                            <div className={fullSideBar ? 'extended' : ''} key={navigation.id}>
                                <ActiveLink to={navigation.route}>
                                    <navigation.icon style={{marginRight: fullSideBar ? '1rem' : '0'}}/>
                                    {fullSideBar && navigation.name}
                                </ActiveLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default React.memo(Sidebar)