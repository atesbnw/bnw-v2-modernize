"use client";
import React, { memo, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';


function Page() {

  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    router.push(`/users/${params?.uid}/game-management/casino-management`);
  }, []);

  return (
    <></>
  );
}

export default memo(Page);
