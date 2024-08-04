import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DynamicIcon from './Icons/dynamicIcon';
import DynamicIcon2 from './Icons/dynamicIcon2';
import DynamicIcon3 from './Icons/dynamicIcon3';
import DynamicIcon4 from './Icons/dynamicIcon4';
import { MdOutlineAttachMoney } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import Chart from './chart';
import { FaBurger } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BiFoodMenu } from "react-icons/bi";
import RecentOrders from "./recentOrders"
import CustomerFeedBack from './customerFeedBack';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function Dashboardcomponent() {
    return (
        <div style={{ marginTop: "85px" }}>
            <h1>DashBoard</h1>
            <Box sx={{ flexGrow: 1, width: `calc(100% - 140px)`, ml: `100px` }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={2}>
                        <Item>
                            <Grid item xs={6} sm={6} md={2}>
                                <DynamicIcon />
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                Total Orders
                            </Grid>
                            <div
                                style={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <div style={{ fontWeight: "900px", fontSize: "20px" }}>75</div>
                                <div style={{ paddingTop: "5px", color: "#2be02b" }}>3%</div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <Item>
                            <Grid item xs={6} sm={6} md={2}>
                                <DynamicIcon2 />
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                Total Delivered
                            </Grid>
                            <div
                                style={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <div style={{ fontWeight: "900px", fontSize: "20px" }}>70</div>
                                <div style={{ paddingTop: "5px", color: "red" }}>3%</div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <Item>
                            <Grid item xs={6} sm={6} md={2}>
                                <DynamicIcon3 sx={{ color: "red" }} />
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                Total Cancled
                            </Grid>
                            <div
                                style={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <div style={{ fontWeight: "900px", fontSize: "20px" }}>5</div>
                                <div style={{ paddingTop: "5px", color: "#2be02b" }}>3%</div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <Item>
                            <Grid item xs={6} sm={6} md={2}>
                                <DynamicIcon4 />
                            </Grid>
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                Total Revenue
                            </Grid>
                            <div
                                style={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <div style={{ fontWeight: "900px", fontSize: "20px" }}>$12K</div>
                                <div style={{ paddingTop: "5px", color: "red" }}>3%</div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Item>
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                Net Profit
                            </Grid>
                            <div
                                style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}
                            >
                                <div
                                    style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "flex-start" }}
                                >
                                    <div style={{ fontWeight: "900px", fontSize: "20px" }}>$6759.25</div>
                                    <div style={{ paddingTop: "5px", color: "red" }}>3%</div>
                                </div>
                                <div>
                                    <MdOutlineAttachMoney size={80} />
                                </div>
                            </div>

                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Item>
                            <Chart />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Item>
                            <div
                                style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                            >
                                <div
                                    style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "20px" }}
                                >
                                    <div>
                                        <GoGoal size={100} />
                                    </div>
                                    <div style={{ fontSize: "19px", fontWeight: "900" }}>
                                        Goal
                                    </div>
                                </div>
                                <div>
                                    <FaCircleArrowRight size={20} />
                                </div>
                            </div>
                            <br />
                        </Item>
                        <Item>
                            <div
                                style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                            >
                                <div
                                    style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "20px" }}
                                >
                                    <div>
                                        <FaBurger size={100} />
                                    </div>
                                    <div style={{ fontSize: "20px", fontWeight: "900" }}>
                                        Popular Dishes
                                    </div>
                                </div>
                                <div>
                                    <FaCircleArrowRight size={20} />
                                </div>
                            </div>
                            <br />
                        </Item>
                        <Item>
                            <div
                                style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                            >
                                <div
                                    style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "20px" }}
                                >
                                    <div>
                                        <BiFoodMenu size={100} />
                                    </div>
                                    <div style={{ fontSize: "20px", fontWeight: "900" }}>
                                        Menus
                                    </div>
                                </div>
                                <div>
                                    <FaCircleArrowRight size={20} />
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Item>
                            <div style={{ fontSize: "20px", fontWeight: "900" }}>
                                Recent Orders
                            </div>
                            <RecentOrders />
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Item>
                            <div style={{ fontSize: "20px", fontWeight: "900" }}>
                                Customer's Feedback
                            </div>
                            <CustomerFeedBack />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <br />
            <br />
        </div>
    )
}
export default Dashboardcomponent;