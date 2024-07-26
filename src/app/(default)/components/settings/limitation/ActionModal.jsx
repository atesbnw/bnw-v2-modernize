import React, {Fragment, memo, useCallback, useEffect, useState} from 'react';
import { t } from 'i18next';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {
  Grid,
  Box,
  Card,
  Typography,
  TextField,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Switch,
  MenuItem, InputAdornment
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import ProviderLimitsModal from "@/app/(default)/components/settings/limitation/ProviderLimitsModal";
import CustomSelect from "@/app/components/forms/theme-elements/CustomSelect";
import CustomOutlinedInput from "@/app/components/forms/theme-elements/CustomOutlinedInput";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const casinoProviders = ["EGT", "Pragmatic", "Playson", "Wazdan", "Netent", "WorldMatch", "RubyPlay", "Endorphina", "Booming", "Habanero", "CasinoTech", "EvoPlay"];
const paymentProviders = ["Papara", "Havale/EFT", "CepBank", "Credit Card", "Crypto Currency", "Other"];

function ActionModal({id, data}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      {id ? (
        <Button variant="contained" onClick={() => setOpen(true)}>
          {t('pages.settings.limitation.Edit New Package')}
        </Button>
      ) : (
        <Button variant="contained" onClick={() => setOpen(true)}>
          {t('pages.settings.limitation.Create New Package')}
        </Button>
      )}

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {id ? (
                t('pages.tools.announcements.Edit Announcement')
              ) : (
                t('pages.settings.limitation.Create New Package')
              )}
            </Typography>
            <Button autoFocus variant="contained" color="success" onClick={() => {
              console.log(value)
              setValue({})
              setOpen(false);
            }}>
              {t('i.Save')}
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3} className={"p-6"} sx={{marginBottom:"70px"}}>
          <Grid item xs={12}>
            <CustomFormLabel sx={{mt:0}} htmlFor="packageName">{t('pages.settings.limitation.packageName')}</CustomFormLabel>
            <CustomTextField
              id="packageName"
              name="packageName"
              variant="outlined"
              fullWidth
              value={value?.packageName}
            />
          </Grid>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Typography variant="h6">{t('pages.settings.limitation.liveCasino')}</Typography>
                  <Typography variant="h6">8/12</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <CustomFormLabel sx={{mt:0}} htmlFor="upperLimit">{t('pages.settings.limitation.upperLimit')}</CustomFormLabel>
                <CustomTextField
                  id="upperLimit"
                  name="upperLimit"
                  variant="outlined"
                  fullWidth
                  value={value?.upperLimit}
                />
                <Typography mt={3} mb={2}  variant="h5">{t('pages.settings.limitation.providers')}</Typography>
                <Grid container spacing={2}>
                  {casinoProviders.map((provider) => (
                    <Grid item xs={6} key={provider}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                          label={provider}
                          variant="outlined"
                          fullWidth
                          sx={{ mr: 1 }}
                        />
                        <Typography sx={{ mr: 1 }}>2/65</Typography>
                        <ProviderLimitsModal category={"casino"} title={(t('pages.settings.limitation.liveCasino')+' - '+provider)} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Typography variant="h6">{t('pages.settings.limitation.casino')}</Typography>
                  <Typography variant="h6">8/12</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <CustomFormLabel sx={{mt:0}} htmlFor="upperLimit">{t('pages.settings.limitation.upperLimit')}</CustomFormLabel>
                <CustomTextField
                  id="upperLimit"
                  name="upperLimit"
                  variant="outlined"
                  fullWidth
                  value={value?.upperLimit}
                />
                <Typography mt={3} mb={2}  variant="h5">{t('pages.settings.limitation.providers')}</Typography>
                <Grid container spacing={2}>
                  {casinoProviders.map((provider) => (
                    <Grid item xs={6} key={provider}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                          label={provider}
                          variant="outlined"
                          fullWidth
                          sx={{ mr: 1 }}
                        />
                        <Typography sx={{ mr: 1 }}>2/65</Typography>
                        <ProviderLimitsModal category={"casino"} title={(t('pages.settings.limitation.casino')+' - '+provider)} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Typography variant="h6">{t('pages.settings.limitation.virtualGames')}</Typography>
                  <Typography variant="h6">8/12</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <CustomFormLabel sx={{mt:0}} htmlFor="upperLimit">{t('pages.settings.limitation.upperLimit')}</CustomFormLabel>
                <CustomTextField
                  id="upperLimit"
                  name="upperLimit"
                  variant="outlined"
                  fullWidth
                  value={value?.upperLimit}
                />
                <Typography mt={3} mb={2}  variant="h5">{t('pages.settings.limitation.providers')}</Typography>
                <Grid container spacing={2}>
                  {casinoProviders.map((provider) => (
                    <Grid item xs={6} key={provider}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                          label={provider}
                          variant="outlined"
                          fullWidth
                          sx={{ mr: 1 }}
                        />
                        <Typography sx={{ mr: 1 }}>2/65</Typography>

                        <ProviderLimitsModal category={"casino"} title={(t('pages.settings.limitation.virtualGames')+' - '+provider)} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Typography variant="h6">{t('pages.settings.limitation.Deposit')}</Typography>
                  <Typography variant="h6">8/12</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container item spacing={3} xs={12}>
                  <Grid item xs={6}>
                    <CustomFormLabel sx={{mt:0}} htmlFor="maxSingleDeposit">{t('pages.settings.limitation.Max. Single Deposit')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxSingleDeposit"
                      name="maxSingleDeposit"
                      type="number"
                      fullWidth
                      value={value?.maxSingleDeposit}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomFormLabel sx={{mt:0}} htmlFor="maxDailyDeposit">{t('pages.settings.limitation.Max. Daily Deposit')}</CustomFormLabel>
                    <CustomOutlinedInput
                      startAdornment={
                        <InputAdornment position="start">₺</InputAdornment>
                      }
                      id="maxDailyDeposit"
                      name="maxDailyDeposit"
                      type="number"
                      fullWidth
                      value={value?.maxDailyDeposit}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomFormLabel sx={{mt:0}} htmlFor="maxWeeklyDeposit">{t('pages.settings.limitation.Max. Weekly Deposit')}</CustomFormLabel>
                    <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="maxWeeklyDeposit"
                    name="maxWeeklyDeposit"
                    type="number"
                    fullWidth
                    value={value?.maxWeeklyDeposit}
                  />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomFormLabel sx={{mt:0}} htmlFor="maxMonthlyDeposit">{t('pages.settings.limitation.Max. Monthly Deposit')}</CustomFormLabel>
                    <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="maxMonthlyDeposit"
                    name="maxMonthlyDeposit"
                    type="number"
                    fullWidth
                    value={value?.maxMonthlyDeposit}
                  />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomFormLabel sx={{mt:0}} htmlFor="maxYearlyDeposit">{t('pages.settings.limitation.Max. Yearly Deposit')}</CustomFormLabel>
                    <CustomOutlinedInput
                    startAdornment={
                      <InputAdornment position="start">₺</InputAdornment>
                    }
                    id="maxYearlyDeposit"
                    name="maxYearlyDeposit"
                    type="number"
                    fullWidth
                    value={value?.maxYearlyDeposit}
                  />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomFormLabel sx={{mt:0}} htmlFor="shouldBlock">{t('pages.settings.limitation.Should it be Blocked?')}</CustomFormLabel>
                    <CustomSelect
                      id="shouldBlock"
                      name="shouldBlock"
                      fullWidth
                      variant="outlined"
                    >
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no">No</MenuItem>
                    </CustomSelect>
                  </Grid>
                </Grid>
                <Typography mt={3} mb={2}  variant="h5">{t('pages.settings.limitation.Payment Providers')}</Typography>
                <Grid container spacing={2}>
                  {paymentProviders.map((provider) => (
                    <Grid item xs={6} key={provider}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                          label={provider}
                          variant="outlined"
                          fullWidth
                        />
                        <FormControlLabel
                          value="start"
                          control={<Switch color="primary" />}
                          label="Blocked"
                          labelPlacement="start"
                        />
                        <Typography sx={{ mx: 1 }}>2/65</Typography>
                        <ProviderLimitsModal category={"finance"} title={(t('pages.settings.limitation.Deposit')+' - '+provider)} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Typography variant="h6">{t('pages.settings.limitation.Withdraw')}</Typography>
                  <Typography variant="h6">8/12</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <CustomFormLabel htmlFor="upperLimit">{t('pages.settings.limitation.Payment Providers')}</CustomFormLabel>
                <Grid container spacing={2}>
                  {paymentProviders.map((provider) => (
                    <Grid item xs={6} key={provider}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                          label={provider}
                          variant="outlined"
                          fullWidth
                        />
                        <FormControlLabel
                          value="start"
                          control={<Switch color="primary" />}
                          label="Blocked"
                          labelPlacement="start"
                        />
                        <Typography sx={{ mx: 1 }}>2/65</Typography>
                        <ProviderLimitsModal category={"finance"} title={(t('pages.settings.limitation.Withdraw')+' - '+provider)} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Card variant="outlined" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <Typography variant="h6">{t('pages.settings.limitation.Sportsbook')}</Typography>
              <Button variant="outlined" color="secondary">{t('pages.settings.limitation.Click For Sportsbook Limits')}</Button>
            </Card>
          </Grid>
        </Grid>

        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            backgroundColor: 'background.paper',
            boxShadow: 3,
          }}
        >
          <Box className={"flex justify-end"}>
            <Button sx={{mr: 1}} variant="contained" onClick={() => {
              console.log(value)
              setValue({})
              setOpen(false);
            }}>
              {t('i.Save')}
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              {t('i.Cancel')}
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Fragment>
  );
}

export default memo(ActionModal);