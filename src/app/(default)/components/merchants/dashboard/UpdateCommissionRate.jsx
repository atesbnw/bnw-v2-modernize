import React, { memo, useState, useCallback, Fragment } from 'react';
import Button from '@mui/material/Button';
import { t } from 'i18next';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import { MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {
  Stack,
  Radio,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Switch,
  TextField,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import classNames from 'classnames';

function CommissionDialog({ open, onClose, handleSave }) {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState("option1");
  const [options, setOptions] = useState({
    option1: {
      totalDeposit: true,
      totalWithdrawal: true,
      financialCost: true,
      providerCommission: true,
      bonus: false,
      merchantFee: "%8",
    },
    option2: {
      totalPlayed: true,
      totalWon: true,
      financialCost: true,
      providerCommission: true,
      bonus: true,
      merchantFee: "%8",
    },
  });

  const handleToggle = (option, key) => {
    setOptions((prev) => ({
      ...prev,
      [option]: {
        ...prev[option],
        [key]: !prev[option][key],
      },
    }));
  };

  const handleMerchantFeeChange = (option, value) => {
    setOptions((prev) => ({
      ...prev,
      [option]: {
        ...prev[option],
        merchantFee: value,
      },
    }));
  };

  const tpClass = "text-lg font-bold whitespace-nowrap";

  const renderFormula = (optionKey, formulaKeys) => {
    const isDisabled = selectedOption !== optionKey;

    return (
      <Box
        mt={2}
        p={2}
        sx={{
          border: `2px solid ${
            selectedOption === optionKey ? theme.palette.primary.main : "rgba(56, 56, 56,0.4)"
          }`,
          backgroundColor: selectedOption === optionKey ? "primary.light" : "transparent",
          borderRadius: "20px",
          transition: "all 0.3s ease",
        }}
        className={classNames("transition-all ease-in-out",{
          "opacity-60 hover:opacity-100": selectedOption !== optionKey
        })}
      >
        <Box display="flex" alignItems="center" mb={2} onClick={() => {
          setSelectedOption(optionKey)
        }}>
          <Radio
            checked={selectedOption === optionKey}
            onChange={() => setSelectedOption(optionKey)}
            color="primary"
          />
          <Typography variant="subtitle1" fontWeight="bold" className={"cursor-pointer"}>
            {t(`pages.tools.bonus.${optionKey}`)}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexWrap="nowrap"
          alignItems="center"
          sx={{ fontSize: "1.2rem" }}
        >
          <Typography className={tpClass} sx={{ mx: 1 }}>[ (</Typography>
          {formulaKeys.map((key, index) => (
            <Fragment key={key}>
              {index > 0 && (
                <Typography  className={tpClass} sx={{ mx: 1 }}>
                  {index % 2 !== 0 && "-"}
                </Typography>
              )}
              {index > 0 && (
                <Typography className={tpClass} sx={{ mx: 1 }}>
                  {index === 2 ? ") - (" : ""}
                  {index === 4 ? ") - (" : ""}
                </Typography>
              )}
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  border: `1px solid ${
                    selectedOption === optionKey ? theme.palette.primary.main : "rgba(56, 56, 56,0.4)"
                  }`,
                  borderRadius: "4px",
                  p: "4px 8px",
                  mx: 0.5,
                  backgroundColor: selectedOption === optionKey ? "secondary.light" : "transparent",
                  transition: "all 0.3s ease",
                }}
              >
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <CustomFormLabel className={"whitespace-nowrap overflow-ellipsis"} sx={{ mt: 1 }} htmlFor="searchText">
                      {t(`pages.tools.bonus.${key}`)}
                    </CustomFormLabel>
                    <Switch
                      checked={options[optionKey][key]}
                      onChange={() => handleToggle(optionKey, key)}
                      color="primary"
                      size="small"
                      disabled={isDisabled}
                    />
                  </Stack>
                  <CustomTextField
                    size="small"
                    disabled={!options[optionKey][key] || isDisabled}
                    placeholder={t(`pages.tools.bonus.${key}`)}
                    sx={{ ml: 1 }}
                  />
                </Box>
              </Box>
            </Fragment>
          ))}
          <Typography sx={{ mx: 1 }} className={tpClass}>) ] ×</Typography>

          <Box
            display="flex"
            alignItems="center"
            sx={{
              border: `1px solid ${
                selectedOption === optionKey ? theme.palette.primary.main  : "rgba(56, 56, 56,0.4)"
              }`,
              borderRadius: "4px",
              p: "4px 8px",
              mx: 0.5,
              backgroundColor: selectedOption === optionKey ? "secondary.light" : "transparent",
              transition: "all 0.3s ease",
            }}
          >
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <CustomFormLabel sx={{ mt: 1 }} htmlFor="searchText">
                  {t(`pages.tools.bonus.merchantFee`)}
                </CustomFormLabel>
              </Stack>
              <CustomTextField
                size="small"
                value={options[optionKey].merchantFee}
                onChange={(e) =>
                  handleMerchantFeeChange(optionKey, e.target.value)
                }
                disabled={isDisabled}
                sx={{
                  width: "100px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };


  const renderAdditionalSections = () => {
    const isDisabled = selectedOption !== "option1" && selectedOption !== "option2";

    const sectionData = [
      {
        title: "Sağlayıcı Komisyonu",
        formula: "(Toplam Oynanan - Toplam Kazanan) × Sağlayıcı Komisyonu",
      },
      {
        title: "Finansal Masraf",
        formula: "(Toplam Oynanan - Toplam Kazanan) × Sağlayıcı Komisyonu",
      },
    ];

    return (
      <Stack direction="row" spacing={1} alignItems="center" justifyContent={"between"} mt={4}>
        {sectionData.map((section, index) => (
          <Box
            key={index}
            mt={2}
            p={2}
            sx={{
              flex:1,
              border: "1px solid rgba(56, 56, 56,0.4)",
              borderRadius: "8px",
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              {section.title}
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              sx={{ fontSize: "1.2rem" }}
            >
               <Typography className={tpClass}>(</Typography>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  border: "1px solid rgba(56, 56, 56,0.4)",
                  borderRadius: "4px",
                  p: "4px 8px",
                  mx: 0.5,
                }}
              >
                <Box>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent={"between"}>
                  <CustomFormLabel sx={{mt:1}} htmlFor="searchText">{t(`pages.tools.bonus.totalPlayed`)}</CustomFormLabel>

                </Stack>

                <CustomTextField
                  size="small"
                  placeholder={t(`pages.tools.bonus.totalPlayed`)}
                  disabled={isDisabled}
                  sx={{ width: "120px" }}
                />
              </Box>
              </Box>
              <Typography className={tpClass} sx={{ mx: 1 }}>-</Typography>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  border: "1px solid rgba(56, 56, 56,0.4)",
                  borderRadius: "4px",
                  p: "4px 8px",
                  mx: 0.5,
                }}
              ><Box>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent={"between"}>
                  <CustomFormLabel sx={{mt:1}} htmlFor="searchText">{t(`pages.tools.bonus.totalWon`)}</CustomFormLabel>

                </Stack>

                <CustomTextField
                  size="small"
                  placeholder={t(`pages.tools.bonus.totalWon`)}
                  disabled={isDisabled}
                  sx={{ width: "120px" }}
                />
              </Box>
              </Box>
               <Typography className={tpClass}>) ×</Typography>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  border: "1px solid rgba(56, 56, 56,0.4)",
                  borderRadius: "4px",
                  p: "4px 8px",
                  mx: 0.5,
                }}
              ><Box>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent={"between"}>
                  <CustomFormLabel sx={{mt:1}} htmlFor="searchText">{t(`pages.tools.bonus.providerFee`)}</CustomFormLabel>

                </Stack>

                <CustomTextField
                  size="small"
                  placeholder={t(`pages.tools.bonus.providerFee`)}
                  disabled={isDisabled}
                  sx={{ width: "100px" }}
                />
              </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    );
  };


  return (
    <Fragment>
      <Dialog open={open} onClose={onClose} maxWidth="xl" fullWidth>
        <DialogTitle>{t("pages.tools.bonus.dialogTitle")}</DialogTitle>
        <DialogContent>
          {renderFormula("option1", [
            "totalDeposit",
            "totalWithdrawal",
            "financialCost",
            "providerCommission",
            "bonus",
          ])}
          {renderFormula("option2", [
            "totalPlayed",
            "totalWon",
            "financialCost",
            "providerCommission",
            "bonus",
          ])}
          {renderAdditionalSections()}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="inherit">
            {t("i.Cancel")}
          </Button>
          <Button onClick={() => handleSave(options)} color="primary" variant={"contained"}>
            {t("i.Save")}
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}


function UpdateCommissionRate() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState({});
  const updateValue = useCallback((field, value) => {
    setValue(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleSave = useCallback((value) => {
    setLoading(true);

    setValue({});

    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1000)
  }, []);

  return (
    <Fragment>
      <Button variant={'contained'} onClick={() => setOpen(true)}>
        {t('pages.merchants.dashboard.Update Commission Rate')}
      </Button>

      {!loading && (
        <CommissionDialog
          open={open}
          onClose={() => setOpen(false)}
          handleSave={(value) => handleSave(value)}
        />
      ) || (
        <Box className={'w-full h-full flex items-center justify-center'}>
          <CircularProgress />
        </Box>
      )}



    </Fragment>
  );
}

export default memo(UpdateCommissionRate);
