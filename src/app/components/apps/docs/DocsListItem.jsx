import React, {Fragment} from 'react';
import { t } from 'i18next';
import { Grid, Card, CardContent, Typography, CardActions, Checkbox, IconButton, Chip, Box } from '@mui/material/';
import { useTheme } from '@mui/material/styles';
import {IconCheck, IconClock, IconEdit} from '@tabler/icons-react';
import Divider from "@mui/material/Divider";

const DocsListItem = ({title, uploadDate, uploadedBy, note, status, img}) => {
  const theme = useTheme();

  const warningColor = theme.palette.warning.main;
  const errorColor = theme.palette.error.light;

  return (
    <Grid container item lg={6} xs={12}>
      <Card variant="outlined" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', height: '100%' }}>
        <CardContent sx={{p:2}}>
          <Typography variant="h4" mb={2}>{title}</Typography>

          <img src={img} alt={title} style={{ width: '100%' }} />

          <Box mt={1}>
            <Typography variant="body2" sx={{fontWeight:'bold'}} component="span">{t('pages.user-management.user_management_dashboard.Docs Page.uploadDate')}: </Typography>
            <Typography variant="body2" component="span">{uploadDate}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{fontWeight:'bold'}} component="span">{t('pages.user-management.user_management_dashboard.Docs Page.uploadedBy')}: </Typography>
            <Typography variant="body2" component="span">{uploadedBy}</Typography>
          </Box>

          <Divider sx={{my:2}} />

          <Box mt={1}>
            <Typography variant="body2" sx={{fontWeight:'bold'}} component="span">{t('pages.user-management.user_management_dashboard.Docs Page.note')}: </Typography>
            <Typography variant="body2" component="span">{note}</Typography>
          </Box>

        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Checkbox />
            <IconButton>
              <IconEdit />
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              {status === 'approved' ? (
                  <Chip variant="outlined" color="success" label={t('pages.user-management.user_management_dashboard.Docs Page.approved')} size="small" icon={<IconCheck />} />
                )
                : <Chip variant="outlined" label={t('pages.user-management.user_management_dashboard.Docs Page.awaitingApproval')} size="small" icon={<IconClock />} />}
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DocsListItem;
