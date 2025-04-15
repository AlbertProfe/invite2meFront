import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Stack,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CancelIcon from "@mui/icons-material/Cancel";
import BundleAnalytics from "./BundleAnalytics";
// Sample data types
interface ChartDataPoint {
  name: string;
  value: number;
}

interface TimelineDataPoint {
  name: string;
  sent: number;
  opened: number;
  responded: number;
  checkedIn: number;
  notShow: number;
}

interface QuotaAllocationDataPoint {
  name: string;
  general: number;
  vip: number;
  compromis: number;
  backstage: number;
  generalNotShow: number;
  vipNotShow: number;
  compromisNotShow: number;
  backstageNotShow: number;
}

interface QuotaDataPoint extends ChartDataPoint {
  color: string;
}

const totalQuotaDistribution: QuotaDataPoint[] = [
  { name: "GENERAL", value: 300, color: "#2196f3" },
  { name: "VIP", value: 100, color: "#f50057" },
  { name: "COMPROMIS", value: 50, color: "#9c27b0" },
  { name: "BACKSTAGE", value: 50, color: "#ff9800" },
];

const dailyQuotaDistribution: QuotaDataPoint[] = [
  { name: "GENERAL", value: 75, color: "#2196f3" },
  { name: "VIP", value: 25, color: "#f50057" },
  { name: "COMPROMIS", value: 12.5, color: "#9c27b0" },
  { name: "BACKSTAGE", value: 12.5, color: "#ff9800" },
];

const notShowQuotaDistribution: QuotaDataPoint[] = [
  { name: "GENERAL", value: 132, color: "#2196f3" },
  { name: "VIP", value: 44, color: "#f50057" },
  { name: "COMPROMIS", value: 22, color: "#9c27b0" },
  { name: "BACKSTAGE", value: 22, color: "#ff9800" },
];

const quotaAllocationData: QuotaAllocationDataPoint[] = [
  {
    name: "Day 1",
    general: 200,
    vip: 50,
    compromis: 25,
    backstage: 25,
    generalNotShow: 60,
    vipNotShow: 15,
    compromisNotShow: 7.5,
    backstageNotShow: 7.5,
  },
  {
    name: "Day 2",
    general: 50,
    vip: 25,
    compromis: 12.5,
    backstage: 12.5,
    generalNotShow: 12.5,
    vipNotShow: 6.25,
    compromisNotShow: 3.125,
    backstageNotShow: 3.125,
  },
  {
    name: "Day 3",
    general: 25,
    vip: 12.5,
    compromis: 6.25,
    backstage: 6.25,
    generalNotShow: 10,
    vipNotShow: 5,
    compromisNotShow: 2.5,
    backstageNotShow: 2.5,
  },
  {
    name: "Day 4",
    general: 25,
    vip: 12.5,
    compromis: 6.25,
    backstage: 6.25,
    generalNotShow: 7.5,
    vipNotShow: 3.75,
    compromisNotShow: 1.875,
    backstageNotShow: 1.875,
  },
];

const timelineData: TimelineDataPoint[] = [
  {
    name: "Day 1",
    sent: 140,
    opened: 112,
    responded: 84,
    checkedIn: 70,
    notShow: 70,
  },
  {
    name: "Day 2",
    sent: 130,
    opened: 104,
    responded: 78,
    checkedIn: 65,
    notShow: 65,
  },
  {
    name: "Day 3",
    sent: 120,
    opened: 96,
    responded: 72,
    checkedIn: 60,
    notShow: 60,
  },
  {
    name: "Day 4",
    sent: 110,
    opened: 88,
    responded: 66,
    checkedIn: 55,
    notShow: 55,
  },
];

export const Analytics = () => {
  const totalInvitations = 500;
  const sentInvitations = 480;
  const progress = (sentInvitations / totalInvitations) * 100;

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", pt: 2 }}>
      {/* Summary Cards */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        sx={{ mb: 4, justifyContent: "space-between" }}
      >
        <Card sx={{ flex: 1, minWidth: { xs: "100%", sm: "auto" } }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <EmailIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Sent Invitations</Typography>
            </Box>
            <Typography variant="h5">
              {sentInvitations}/{totalInvitations}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ mt: 2 }}
            />
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minWidth: { xs: "100%", sm: "auto" } }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <PeopleIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Opened</Typography>
            </Box>
            <Typography variant="h5">400</Typography>
            <Typography variant="body2" color="text.secondary">
              80% open rate
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minWidth: { xs: "100%", sm: "auto" } }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CheckCircleIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Responded</Typography>
            </Box>
            <Typography variant="h5">320</Typography>
            <Typography variant="body2" color="text.secondary">
              64% response rate
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minWidth: { xs: "100%", sm: "auto" } }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <HowToRegIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Checked In</Typography>
            </Box>
            <Typography variant="h5">280</Typography>
            <Typography variant="body2" color="text.secondary">
              56% attendance rate
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minWidth: { xs: "100%", sm: "auto" } }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <CancelIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">Not Show</Typography>
            </Box>
            <Typography variant="h5">220</Typography>
            <Typography variant="body2" color="text.secondary">
              Tickets available for sale
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Invitation Progress Timeline */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Invitation Progress Timeline
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={timelineData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sent" fill="#2196f3" name="Sent" />
                  <Bar dataKey="opened" fill="#4caf50" name="Opened" />
                  <Bar dataKey="responded" fill="#ff9800" name="Responded" />
                  <Bar dataKey="checkedIn" fill="#9c27b0" name="Checked In" />
                  <Bar dataKey="notShow" fill="#f50057" name="Not Show" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Quota Allocation Chart */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quota Allocation by Day & Not Show
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={quotaAllocationData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="general" fill="#2196f3" name="General" />
                  <Bar
                    dataKey="generalNotShow"
                    fill="#6ab7f5"
                    name="General Not Show"
                  />
                  <Bar dataKey="vip" fill="#f50057" name="VIP" />
                  <Bar
                    dataKey="vipNotShow"
                    fill="#f6668b"
                    name="VIP Not Show"
                  />
                  <Bar dataKey="compromis" fill="#9c27b0" name="Compromis" />
                  <Bar
                    dataKey="compromisNotShow"
                    fill="#b552c7"
                    name="Compromis Not Show"
                  />
                  <Bar dataKey="backstage" fill="#ff9800" name="Backstage" />
                  <Bar
                    dataKey="backstageNotShow"
                    fill="#ffbb4d"
                    name="Backstage Not Show"
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Quota Distributions */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Total Quota Distribution
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={totalQuotaDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({
                      name,
                      percent,
                    }: {
                      name: string;
                      percent: number;
                    }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {totalQuotaDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Opened Quota Distribution
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dailyQuotaDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({
                      name,
                      percent,
                    }: {
                      name: string;
                      percent: number;
                    }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dailyQuotaDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Not Show Quota Distribution
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={notShowQuotaDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({
                      name,
                      percent,
                    }: {
                      name: string;
                      percent: number;
                    }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {notShowQuotaDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <BundleAnalytics />
    </Box>
  );
};

export default Analytics;
