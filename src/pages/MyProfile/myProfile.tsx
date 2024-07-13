import React, { useContext, useEffect, useState } from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";
import {
  Box,
  Avatar,
  Typography,
  Button,
  Tab,
  Tabs,
  Badge,
} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
// Icons
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TemporaryDrawer from "../../Layout/Drawer";
import { StateContext, StateProvider } from "../Sign/PrivacyInput";
// student data
import students from "../../mock-data/students";
import MenteeControl from "./MenteeControl";
import MatchRequest from "./MatchRequest";

const MyProfile: React.FC = () => {
  const { name, setName } = React.useContext(StateContext);
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const profileInfo = [
    {
      id: 1,
      icon: <PersonIcon sx={{ color: "#1564FF", fontSize: "1.2rem" }} />,
      text: "회원 유형 :",
      content: "선배",
    },
    {
      id: 2,
      icon: (
        <WorkspacePremiumIcon sx={{ color: "#1564FF", fontSize: "1.2rem" }} />
      ),
      text: "코드 캠퍼스 멤버쉽 :",
      content: "LV.0",
    },
    {
      id: 3,
      icon: <CheckCircleIcon sx={{ color: "#1564FF", fontSize: "1.2rem" }} />,
      text: "인증된 사용자",
      content: "",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: 1,
          borderColor: "divider",
          padding: "0.3rem 24px",
        }}
      >
        <TemporaryDrawer />
        <S.LogInTitle>내 정보 페이지</S.LogInTitle>
        <Link to="/index">
          <CloseIcon sx={{ fontSize: "28px" }} />
        </Link>
      </Box>
      {/* 사용자 프로필 페이지 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginTop: "1.5rem",
        }}
      >
        <Avatar alt="사용자 프로필 사진" sx={{ width: "5rem", height: "5rem" }}>
          <PersonIcon />
        </Avatar>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              {name}님
            </Typography>
            <Button
              variant="contained"
              sx={{ fontSize: "0.5rem", fontWeight: "bold" }}
            >
              정보 수정
            </Button>
          </Box>
          {profileInfo.map((index) => {
            return (
              <Box
                key={index.id}
                sx={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                {index.icon}
                <Typography sx={{ fontSize: "0.6rem" }}>
                  {index.text}
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "0.6rem" }}>
                  {index.content}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      {/* 나의 정보 탭 페이지 */}
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab
              sx={{ width: "100%", fontSize: "0.5rem" }}
              label="후배 관리"
              value="1"
            />

            <Tab
              sx={{ width: "100%", fontSize: "0.5rem" }}
              label={<TabLabel />}
              value="2"
            />

            <Tab
              sx={{ width: "100%", fontSize: "0.5rem" }}
              label="코드캠퍼스 멤버쉽"
              value="3"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <MenteeControl />
        </TabPanel>
        <TabPanel value="2">
          <Typography>
            <MatchRequest />
          </Typography>
        </TabPanel>
        <TabPanel value="3">
          <Typography>코드캠퍼스 멤버쉽</Typography>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

function TabLabel() {
  return (
    <Box>
      <S.TabBadge sx={{ fontSize: "0.4rem" }} color="info" badgeContent={3}>
        <Typography sx={{ fontSize: "0.5rem" }}>매칭 요청</Typography>
      </S.TabBadge>
    </Box>
  );
}
export default MyProfile;
