import * as React from 'react';

import { Box, Button, Divider, Modal, ModalDialog, Typography } from '@mui/joy';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';


/**
 * A confirmation dialog (Joy Modal)
 * Pass the question and the positive answer, and get called when it's time to close the dialog, or when the positive action is taken
 */
export function ConfirmationModal(props: { open: boolean, onClose: () => void, onPositive: () => void, confirmationText: string | JSX.Element, positiveActionText: string }) {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <ModalDialog variant='outlined' color='neutral' >
        <Typography dir='rtl' component='h2' startDecorator={<WarningRoundedIcon />}>
          تائیدیه
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography dir='rtl'>
          {props.confirmationText}
        </Typography>
        <Box dir='rtl' sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', mt: 2 }}>
          <Button variant='plain' color='neutral' onClick={props.onClose}>
            انصراف
          </Button>
          <Button variant='solid' color='danger' onClick={props.onPositive}>
            {props.positiveActionText}
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  );
}