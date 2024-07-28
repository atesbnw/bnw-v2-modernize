"use client";
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import TitleBar from '@/app/components/TitleBar';
import {t} from "i18next";
import Button from '@mui/material/Button';
import ParentCard from '@/app/components/shared/ParentCard';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import { MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import { uniqueId } from 'lodash';
import { faker } from '@faker-js/faker';
import IconButton from '@mui/material/IconButton';
import { IconGridDots, IconLayoutGrid } from '@tabler/icons-react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

function Page() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    grid: 6,
    list: "onPublished"
  });

  const updateFilter = useCallback((field, value) => {
    setFilter(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);


  useEffect(() => {
    setData(Array.from(Array(18)).map(() => ({
      id: uniqueId(),
      img: faker.helpers.arrayElement([
        "https://i.ytimg.com/vi/txOc_mLVhqE/maxresdefault.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzt-5PcdZmevmaOMX8FBhQehZi_JTukvlqg&s",
        "https://pbs.twimg.com/media/GH0W6GmXQAESrDI?format=jpg&name=900x900",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLm2POuqLGr5jdanrnS155O1cFkDvJy4eoa3Ja8KXfokxf-9RkK5jnFMtJwTQJ4lrA3M&usqp=CAU",
        "https://ekcfbmsotzc.exactdn.com/en/blog/wp-content/uploads/2023/07/betmgm-bonus-bet-1080x610-1.jpg?strip=all&lossy=1&ssl=1",
        "https://play-lh.googleusercontent.com/SQOLTgnsyaIgSVxRLi7tcarWZKZcdjK5CZXAFHZRjX547v6VOvSBV89347aRagPDbQ=w526-h296-rw",
        "https://i0.wp.com/www.tycoonstory.com/wp-content/uploads/2022/11/Play-Aviator-at-Mostbet-Casino-Tycoonstory.jpg?fit=700%2C400&ssl=1",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHekE7WdvW7JXZ26bRVd0YfuGP5o9OPzD3hA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtb1Yvw-eClgQR3B6KlVfP5l_KLMGqAvmCg&s"
      ]),
      title: faker.company.catchPhrase(),

    })));
  }, [page]);

  return (
    <Box>
      <TitleBar title={t("Content Management.All Media")}
        Right={(
          <Button variant={"contained"} onClick={() => {}}>
            {t("pages.content-management.addMedia")}
          </Button>
        )}
      />

      <ParentCard
        footer={(
          <Box className={"flex justify-end"}>
            <Pagination count={10} color="primary" onChange={(event, page) => setPage(page)} />
          </Box>
        )}
        title={(
          <Box>
            <CustomFormLabel>{t("pages.content-management.list")}</CustomFormLabel>
            <CustomSelect
              id="list"
              name="list"
              value={filter.list}
              onChange={(e) => updateFilter("list", e?.target?.value)}
            >
              <MenuItem value="onPublished">
                {t("pages.content-management.onPublished")}
              </MenuItem>
              <MenuItem value="expired">
                {t("pages.content-management.expired")}
              </MenuItem>
            </CustomSelect>
          </Box>
        )}
        action={(
          <Box className={"flex gap-2 items-center"}>
            <IconButton color={filter?.grid === 6 ? "primary" : "grey.500"}
                        onClick={() => updateFilter("grid", 6)}
            >
              <IconGridDots />
            </IconButton>
            <IconButton color={filter?.grid === 3 ? "primary" : "grey.500"}
                        onClick={() => updateFilter("grid", 3)}
            >
              <IconLayoutGrid />
            </IconButton>
          </Box>
      )}
        >

        <Grid container spacing={3}>
          {data && data?.map((item, key) => (
            <Grid item xs={filter?.grid===3 ? 12 : 6} md={filter?.grid===3 ? 4 : 2} key={key}>
              <img
                src={item?.img}
                alt={item?.title}
                className={"w-full h-full bg-white object-contain rounded"}
              />
            </Grid>
          ))}
        </Grid>
      </ParentCard>

    </Box>
  );
}

export default memo(Page);
