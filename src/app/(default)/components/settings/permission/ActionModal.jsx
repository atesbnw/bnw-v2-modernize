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
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialPermissions = {
  category1: {
    title: 'User Management',
    number: '8/12',
    parent: true,
    children: {
      permission1: { title: 'Permission 1', checked: true },
      permission2: { title: 'Permission 2', checked: true },
      permission3: { title: 'Permission 3', checked: true },
    },
  },
  category2: {
    title: 'Accounting Management',
    number: '2/20',
    parent: false,
    children: {
      permission1: { title: 'Permission 1', checked: false },
      permission2: { title: 'Permission 2', checked: false },
      permission3: { title: 'Permission 3', checked: false },
    },
  },
  category3: {
    title: 'Game Management',
    number: '5/28',
    parent: false,
    children: {
      permission1: { title: 'Permission 1', checked: false },
      permission2: { title: 'Permission 2', checked: true },
      permission3: { title: 'Permission 3', checked: false },
    },
  },
};

const calculateParentState = (children) => {
  const allChildrenChecked = Object.keys(children).every((key) => children[key].checked);
  const someChildrenChecked = Object.keys(children).some((key) => children[key].checked);
  return {
    parent: allChildrenChecked,
    indeterminate: !allChildrenChecked && someChildrenChecked,
  };
};

function ActionModal({id, data}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    data && setValue(prev => ({
      ...prev,
      ...data
    }))
  }, [data]);

  const [permissions, setPermissions] = useState(initialPermissions);

  useEffect(() => {
    const newPermissions = { ...permissions };
    Object.keys(newPermissions).forEach((category) => {
      const { parent, indeterminate } = calculateParentState(newPermissions[category].children);
      newPermissions[category].parent = parent;
      newPermissions[category].indeterminate = indeterminate;
    });
    setPermissions(newPermissions);
  }, []);

  const handleParentChange = (category) => {
    setPermissions((prevPermissions) => {
      const parentChecked = !prevPermissions[category].parent;
      const updatedChildren = Object.keys(prevPermissions[category].children).reduce((acc, key) => {
        acc[key] = { ...prevPermissions[category].children[key], checked: parentChecked };
        return acc;
      }, {});

      return {
        ...prevPermissions,
        [category]: {
          ...prevPermissions[category],
          parent: parentChecked,
          indeterminate: false,
          children: updatedChildren,
        },
      };
    });
  };

  const handleChildChange = (category, permission) => {
    setPermissions((prevPermissions) => {
      const updatedChildren = {
        ...prevPermissions[category].children,
        [permission]: {
          ...prevPermissions[category].children[permission],
          checked: !prevPermissions[category].children[permission].checked,
        },
      };

      const { parent, indeterminate } = calculateParentState(updatedChildren);

      return {
        ...prevPermissions,
        [category]: {
          ...prevPermissions[category],
          parent: parent,
          indeterminate: indeterminate,
          children: updatedChildren,
        },
      };
    });
  };

  const handleCheckboxClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Fragment>
      {id ? (
        <Button
          variant="contained"
          fullWidth
          onClick={() => setOpen(true)}
          sx={{
            border: '1px solid #f0f0f0',
            backgroundColor: '#ffffff',
            color: '#000000',
            '&:hover': {
              backgroundColor: '#f0f0f0',
          },
          }}>
            {t('i.See Details')}
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
            <CustomFormLabel sx={{mt:0}} htmlFor="packageTitle">{t('pages.settings.limitation.packageName')}</CustomFormLabel>
            <CustomTextField
              id="packageTitle"
              name="packageTitle"
              variant="outlined"
              fullWidth
              value={value?.packageTitle}
            />
          </Grid>
          {Object.keys(permissions).map((category) => (
            <Grid item xs={12} key={category}>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Box>
                      <FormControlLabel
                        label=''
                        className={"mr-0"}
                        control={
                          <Checkbox
                            checked={permissions[category].parent}
                            indeterminate={permissions[category].indeterminate}
                            onChange={() => handleParentChange(category)}
                            onClick={handleCheckboxClick}
                          />
                        }
                       />
                      <Typography variant="div" className={"ml-0 font-bold text-lg"}>{permissions[category].title}</Typography>
                    </Box>
                    <Typography variant="h6">{permissions[category].number}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    {Object.keys(permissions[category].children).map((permission) => (
                      <Grid item xs={6} sm={4} lg={3} key={permission}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={permissions[category].children[permission].checked}
                              onChange={() => handleChildChange(category, permission)}
                              onClick={handleCheckboxClick}
                            />
                          }
                          label={permissions[category].children[permission].title}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
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