import React from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const SideBar = () => {
    return (
        <Box sx={{ display: 'flex', position: "static"}}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: 160,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 80, boxSizing: 'border-box',  height: `calc(100% - 60px)`, mt: `65px`},
                }}
            >
                <List sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <ListItem button>
                        <ListItemIcon><HouseRoundedIcon /></ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><InsertChartOutlinedIcon /></ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><AssignmentTurnedInRoundedIcon /></ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><AccountBalanceWalletRoundedIcon /></ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><LocalMallRoundedIcon /></ListItemIcon>
                    </ListItem>
                    <Box sx={{ flexGrow: 1 }} />
                    <ListItem button>
                        <ListItemIcon><LogoutRoundedIcon /></ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default SideBar;
