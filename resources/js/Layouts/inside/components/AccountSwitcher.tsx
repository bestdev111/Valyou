import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { AppContext } from '@/src/AppContextProvider';

export default function AccountSwitcher() {
  const appContext = React.useContext(AppContext);

  return (
    <div>
      <Dialog
        onClose={() => appContext?.setAccountSwitcherStatus(false)}
        open={appContext?.accountSwitcherStatus!}
      >
        <div className="w-[300px]">
          <DialogTitle>Switch Account To</DialogTitle>
          <List sx={{ pt: 0 }}>
            <ListItem disableGutters>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    src="/image/investor_icon.svg"
                    sx={{ width: '30px', height: '30px' }}
                  />
                </ListItemAvatar>
                <ListItemText primary={'Investor'} />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    src="/image/artist_icon.svg"
                    sx={{ width: '30px', height: '30px' }}
                  />
                </ListItemAvatar>
                <ListItemText primary={'Artist'} />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    src="/image/business_icon.svg"
                    sx={{ width: '30px', height: '30px' }}
                  />
                </ListItemAvatar>
                <ListItemText primary={'Business'} />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    src="/image/admin_icon.svg"
                    sx={{ width: '30px', height: '30px' }}
                  />
                </ListItemAvatar>
                <ListItemText primary={'Admin'} />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Dialog>
    </div>
  );
}
