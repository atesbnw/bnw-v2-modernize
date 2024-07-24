import React, {Fragment} from 'react';
import {IconEye} from "@tabler/icons-react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography, Box, IconButton} from "@mui/material";
import {t} from "i18next";
import Divider from "@mui/material/Divider";

function AnnouncementDetail(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const data = [
    { title: t('pages.tools.bonus.promotionName'), content: 'Bayram Free Bet Campaign', show: true },
    { title: t('pages.tools.bonus.provider'), content: 'BNW Bet', show: true },
    { title: t('pages.tools.bonus.fixture'), content: 'Prematch, Live', show: true },
    { title: t('pages.tools.bonus.sport'), content: 'Football, Basketball', show: true },
    { title: t('pages.tools.bonus.category'), content: 'Turkey, USA', show: true },
    { title: t('pages.tools.bonus.tournament'), content: 'Super League, NBA', show: true },
    { title: t('pages.tools.bonus.match'), content: 'All', show: true },
    { title: t('pages.tools.bonus.betType'), content: 'Single, Multiple', show: true },
    { title: t('pages.tools.bonus.currency'), content: 'TRY', show: true },
    { title: t('pages.tools.bonus.startDate'), content: '06/04/2024 15:35:00', show: true },
    { title: t('pages.tools.bonus.endDate'), content: '06/04/2024 15:35:00', show: true },
    { title: t('pages.tools.bonus.minBonusAmount'), content: '100 TRY', show: true },
    { title: t('pages.tools.bonus.maxBonusAmount'), content: '100 TRY', show: true },
    { title: t('pages.tools.bonus.minMatchCount'), content: '100 TRY', show: true },
    { title: t('pages.tools.bonus.minTurnoverRate'), content: '100 TRY', show: true },
    { title: t('pages.tools.bonus.minBetAmount'), content: '10 TRY', show: true },
    { title: t('pages.tools.bonus.descriptionTitle'), content: 'Bayram Free Bet Campaign!', show: false },
    {
      title: t('pages.tools.bonus.description'),
      content: '- You can earn a minimum and maximum of 100 TRY. - The free bet is valid only for basketball and football. - To convert your earnings from the free bet, a minimum rate of 1.70 is required.',
      show: false
    },
  ];

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(true)}>
        <IconEye />
      </IconButton>

      <Dialog fullWidth maxWidth={"lg"}  open={open} onClose={handleClose}>
        <DialogTitle>{t('pages.tools.bonus.Bonus Name')}</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            {data.filter(item => item.show).map(({ id, title, content }) => (
              <Grid item xs={6} md={6} lg={3} key={id}>
                <Typography variant="body1" fontWeight="bold">{title}</Typography>
                <Typography variant="body2">
                  {id === 'description' ? (
                    <Box component="span" display="block" whiteSpace="pre-wrap">{content}</Box>
                  ) : (
                    content
                  )}
                </Typography>
              </Grid>
            ))}
            <Divider/>
            {data.filter(item => !item.show).map(({ id, title, content }) => (
              <Grid item xs={12} key={id}>
                <Typography variant="body1" fontWeight="bold" sx={{mt:0}}>{title}</Typography>
                <Typography variant="body2">
                  {id === 'description' ? (
                    <Box component="span" display="block" whiteSpace="pre-wrap">{content}</Box>
                  ) : (
                    content
                  )}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

    </Fragment>
  );
}

export default AnnouncementDetail;