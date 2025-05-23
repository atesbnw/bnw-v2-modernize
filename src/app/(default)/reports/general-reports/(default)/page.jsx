"use client";
import React, { memo, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';


function Page() {

  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    router.push(`/reports/general-reports/commission-reports`);
  }, []);

  return (
    <></>
  );
}

export default memo(Page);
