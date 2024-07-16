import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import { useDispatch,useSelector   } from 'react-redux';
import MessagesListItem from './MessagesListItem';
import {
  fetchEmails,
  SelectEmail,
  starEmail,
  importantEmail,
  deleteEmail,
  checkEmail,
} from '@/store/apps/email/EmailSlice';

import Scrollbar from '../../../components/custom-scroll/Scrollbar';

const MessagesList = ({ showrightSidebar }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmails());
  }, [dispatch]);

  const getVisibleEmail = (emails, filter, emailSearch) => {
    switch (filter) {
      case 'inbox':
        return emails.filter(
          (t) => t.inbox && !t.trash && t.from.toLocaleLowerCase().includes(emailSearch),
        );
      case 'Sent':
        return emails.filter(
          (t) => t.sent && !t.trash && t.from.toLocaleLowerCase().includes(emailSearch),
        );
      case 'draft':
        return emails.filter(
          (t) => t.draft && !t.trash && t.from.toLocaleLowerCase().includes(emailSearch),
        );
      case 'spam':
        return emails.filter(
          (t) => t.spam && !t.trash && t.from.toLocaleLowerCase().includes(emailSearch),
        );
      case 'Trash':
        return emails.filter((t) => t.trash && t.from.toLocaleLowerCase().includes(emailSearch));
      case 'Starred':
        return emails.filter(
          (t) => t.starred && !t.trash && t.from.toLocaleLowerCase().includes(emailSearch),
        );
      case 'Personal':
        return emails.filter(
          (t) =>
            t.label === 'Personal' &&
            !t.trash &&
            t.from.toLocaleLowerCase().includes(emailSearch),
        );
      case 'System':
        return emails.filter(
          (t) =>
            t.label === 'System' && !t.trash && t.from.toLocaleLowerCase().includes(emailSearch),
        );
      case 'Examine':
        return emails.filter(
          (t) =>
            t.label === 'Examine' && !t.trash && t.from.toLocaleLowerCase().includes(emailSearch),
        );
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

  const emails = useSelector((state) =>
    getVisibleEmail(
      state.emailReducer.emails,
      state.emailReducer.currentFilter,
      state.emailReducer.emailSearch,
    ),
  );

  const active = useSelector((state) => state.emailReducer.emailContent);

  return (
    <List>
      <Scrollbar
        sx={{
          height: { lg: 'calc(100vh - 100px)', md: '100vh' },
          maxHeight: '800px',
        }}
      >
        {/* ------------------------------------------- */}
        {/* Email page */}
        {/* ------------------------------------------- */}
        {emails.map((email) => (
          <MessagesListItem
            key={email.id}
            {...email}
            onClick={() => {
              dispatch(SelectEmail(email.id));
              showrightSidebar();
            }}
            onDelete={() => dispatch(deleteEmail(email.id))}
            isSelected={email.id === active}
            onStar={() => dispatch(starEmail(email.id))}
            onImportant={() => dispatch(importantEmail(email.id))}
            onChange={(e) => {
              if (e.target.checked === true) dispatch(checkEmail(email.id));
              else dispatch(checkEmail(email.id));
            }}
          />
        ))}
      </Scrollbar>
    </List>
  );
};

export default MessagesList;
