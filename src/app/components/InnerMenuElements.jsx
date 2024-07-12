import Menuitems from '@/app/(default)/layout/vertical/sidebar/MenuItems';
import { usePathname } from "next/navigation";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import NavItem from '@/app/(default)/layout/vertical/sidebar/NavItem';
// import NavCollapse from './NavCollapse';
import NavGroup from '@/app/(default)/layout/vertical/sidebar/NavGroup/NavGroup';
import { toggleMobileSidebar } from '@/store/customizer/CustomizerSlice';
import NavCollapse from '@/app/(default)/layout/vertical/sidebar/NavCollapse';


export const SidebarItems = ({items = Menuitems, activeFilled = false}) => {
  const  pathname  = usePathname();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf('/'));
  const customizer = useSelector((state) => state.customizer);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const hideMenu = lgUp ? customizer.isCollapse && !customizer.isSidebarHover : '';
  const dispatch = useDispatch();
  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {items.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else if (item.children) {
            return (
              <NavCollapse
                activeFilled={activeFilled}
                menu={item}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                pathWithoutLastPart={pathWithoutLastPart}
                level={1}
                key={item.id}
                onClick={() => dispatch(toggleMobileSidebar())}
              />
            );

            // {/********If Sub No Menu**********/}
          } else {
            return (
              <NavItem item={item} key={item.id} pathDirect={pathDirect} hideMenu={hideMenu} onClick={() => {}} />
            );
          }
        })}
      </List>
    </Box>
  );
};
