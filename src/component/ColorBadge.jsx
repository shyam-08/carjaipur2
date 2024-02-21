import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';

export default function ColorBadge() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent='sold' color="secondary">
        {/* <MailIcon color="action" /> */}
      </Badge>
    
    </Stack>
  );
}
