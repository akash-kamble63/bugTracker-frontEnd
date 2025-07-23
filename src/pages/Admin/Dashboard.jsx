import React, { use, useState } from "react";
import DashbordLayout from "../../components/layout/DashbordLayout";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { IoMdCard } from "react-icons/io";
import { addThousandsSeparator } from "../../utils/helper";
import InfoCard from "../../components/cards/InfoCard";
import { LuArrowRight } from "react-icons/lu";
import TaskListTable from "../../components/TaskListTable";
import CustomPieChart from "../../components/charts/CustomPieChart";
import CustomBarChart from "../../components/charts/CustomBarChart";

const Dashboard = () => {
  const COLORS = ["#8D51FF", "#00B8DB", "#7BCE00"];

  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [pieChartData, setPieChartData] = useState([
    { status: "Completed", count: 10 },
    { status: "In-Progress", count: 5 },
    { status: "Pending", count: 8 },
  ]);
  const [barChartData, setBarChartData] = useState([
    { priority: "High", count: 3 },
  { priority: "Medium", count: 7 },
  { priority: "Low", count: 8 },
  ]);

  const [user, clearUser] = useState({
    name: "Akash Kamble",
    email: "akash@example.com",
    profileImageUrl: "https://i.pravatar.cc/100",
    role: "admin", // or "user"
  });

  //add axios method to fetch dashboard data
  // const getDashboardData = async () => {
  //   try {}
  //   catch (error) {
  //     console.error("Error fetching dashboard data:", error);
  //   }
  // }

  // useEffect(() => {
  //   getDashboardData();

  // },[]);

  //prepare chart data
  const prepareChartData = (data) => {
    const taskDistribution = data?.taskDistribution || null;
    const taskPriorityLevels = data?.taskPriorityLevels || null;

    const taskDistributionData = [
      { status: "Pending", count: taskDistribution?.pending || 0 },
      { status: "In Progress", count: taskDistribution?.InProgress || 0 },
      { status: "Complete", count: taskDistribution?.Complete || 0 },
    ];
    setPieChartData(taskDistributionData);
    const PriorityLevelData = [
      { priority: "High", count: taskPriorityLevels?.High || 0 },
      { priority: "Medium", count: taskPriorityLevels?.Medium || 0 },
      { priority: "Low", count: taskPriorityLevels?.Low || 0 },
    ];
    setBarChartData(PriorityLevelData);
  };

  const onSeeMore = () => {
    navigate("/admin/tasks");
  };

  return (
    <DashbordLayout activeMenu="dashboard">
      <div className="card my-5">
        <div>
          <div className="col-span-3">
            <h2 className="text-xl md:text-2xl">Good Morning! {user?.name}</h2>
            <p className="text-xs md:text-[13px] text-gray-400 mt-1.5">
              {moment().format("dddd Do MM YYYY")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-5">
          <InfoCard
            icon={<IoMdCard />}
            label="Total Bugs"
            value={addThousandsSeparator(
              dashboardData?.charts.taskDistribution?.All || 0
            )}
            color="bg-blue-600"
          />

          <InfoCard
            icon={<IoMdCard />}
            label="Pending Bugs"
            value={addThousandsSeparator(
              dashboardData?.charts.taskDistribution?.pending || 0
            )}
            color="bg-violet-600"
          />

          <InfoCard
            icon={<IoMdCard />}
            label="In Progress"
            value={addThousandsSeparator(
              dashboardData?.charts.taskDistribution?.Inprogess || 0
            )}
            color="bg-cyan-600"
          />

          <InfoCard
            icon={<IoMdCard />}
            label="Compeleted"
            value={addThousandsSeparator(
              dashboardData?.charts.taskDistribution?.Completed || 0
            )}
            color="bg-lime-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 md:my-6">
        <div>
          <div className="card">
            <div className="flex items-center justify-between">
              <h5 className="font-medium">Task Distribustion</h5>
            </div>

            <CustomPieChart data={pieChartData} color={COLORS} />
          </div>
        </div>

        <div>
          <div className="card">
            <div className="flex items-center justify-between">
              <h5 className="font-medium">Task Priority Levels</h5>
            </div>

            <CustomBarChart data={barChartData} />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="card">
            <div className="flex items-center justify-between">
              <h5 className="text-lg">Recent Tasks</h5>

              <button className="card-btn" onClick={onSeeMore}>
                See All
                <LuArrowRight className="text-base" />
              </button>
            </div>
            <TaskListTable
              tableData={
                dashboardData?.recentTasks || [
                  {
                    _id: "1",
                    title: "Fix login bug",
                    status: "completed",
                    priority: "High",
                    createdAt: "2025-07-20T08:30:00Z",
                  },
                  {
                    _id: "2",
                    title: "Create user onboarding flow",
                    status: "in-progress",
                    priority: "Medium",
                    createdAt: "2025-07-18T10:15:00Z",
                  },
                  {
                    _id: "3",
                    title: "Update API documentation",
                    status: "pending",
                    priority: "Low",
                    createdAt: "2025-07-16T14:00:00Z",
                  },
                  {
                    _id: "4",
                    title: "Refactor task service",
                    status: "in-progress",
                    priority: "High",
                    createdAt: "2025-07-14T12:45:00Z",
                  },
                  {
                    _id: "5",
                    title: "Design Kanban board UI",
                    status: "completed",
                    priority: "Medium",
                    createdAt: "2025-07-10T09:00:00Z",
                  },
                ]
              }
            />
          </div>
        </div>
      </div>
    </DashbordLayout>
  );
};

export default Dashboard;
