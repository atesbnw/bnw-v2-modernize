import { useSelector, useDispatch } from 'react-redux';
import { t } from 'i18next';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { setVisibilityFilter } from '@/store/apps/email/EmailSlice';
import Scrollbar from '../../../components/custom-scroll/Scrollbar';
import {Cancel, Delete, CheckCircle, DriveFolderUploadRounded, FolderRounded} from '@mui/icons-material';

const DocsFilter = () => {
  const active = useSelector((state) => state.emailReducer.currentFilter);
  const customizer = useSelector((state) => state.customizer);
  const br = `${customizer.borderRadius}px`;

  const dispatch = useDispatch();
  const filterData = [
    {
      id: 1,
      filterbyTitle: t('menu.Users.Docs Page.docsMenu'),
    },
    {
      id: 3,
      name: t('menu.Users.Docs Page.Uploaded'),
      icon: DriveFolderUploadRounded,
      color: 'inherit',
      chip: 3,
      chipColor: 'primary'
    },
    {
      id: 2,
      name: t('menu.Users.Docs Page.Approved'),
      icon: CheckCircle,
      color: 'inherit',
      chip: 3,
      chipColor: 'success'
    },
    {
      id: 5,
      name: t('menu.Users.Docs Page.Rejected'),
      icon: Cancel,
      color: 'inherit',
      chip: 3,
      chipColor: 'error'
    },
    {
      id: 7,
      name: t('menu.Users.Docs Page.Trash'),
      icon: Delete,
      color: 'inherit',
      chip: 3,
      chipColor: 'warning'
    },
    {
      id: 6,
      divider: true,
    },
    {
      id: 9,
      divider: true,
    },
    {
      id: 13,
      filterbyTitle: 'Labels',
    },
    {
      id: 10,
      name: t('menu.Users.Docs Page.Personal'),
      icon: FolderRounded,
      color: 'primary.main',
    },
    {
      id: 11,
      name: t('menu.Users.Docs Page.System'),
      icon: FolderRounded,
      color: 'error.main',
    },
    {
      id: 12,
      name: t('menu.Users.Docs Page.Examine'),
      icon: FolderRounded,
      color: 'success.main',
    },
  ];

  return (
    <>
      <List>
        <Scrollbar sx={{ height: { lg: 'calc(100vh - 100px)', md: '100vh' }, maxHeight: '800px' }}>
          {filterData.map((filter) => {
            if (filter.filterbyTitle) {
              return (
                <Typography
                  variant="subtitle2"
                  p={3}
                  pb={1}
                  pl={2.5}
                  fontWeight={600}
                  key={filter.id}
                >
                  {filter.filterbyTitle}
                </Typography>
              );
            } else if (filter.divider) {
              return <Divider key={filter.id} />;
            }

            return (
              <ListItemButton
                sx={{
                  mb: 1,
                  px: '10px',
                  mx: 1,
                  borderRadius: br,
                }}
                selected={active === `${filter.name}`}
                onClick={() => dispatch(setVisibilityFilter(`${filter.name}`))}
                key={`${filter.id}${filter.name}`}
              >
                {/* ------------------------------------------- */}
                {/* If list to filter */}
                {/* ------------------------------------------- */}
                <ListItemIcon sx={{ minWidth: '30px', color: filter.color }}>
                  <filter.icon stroke="1.5" size={19} />
                </ListItemIcon>
                <ListItemText sx={{ textTransform: 'capitalize' }}>{filter.name}</ListItemText>
                {filter.chip &&
                    <Chip label={filter.chip} color={filter.chipColor} size='small'/>
                }
              </ListItemButton>
            );
          })}
        </Scrollbar>
      </List>
    </>
  );
};

export default DocsFilter;
