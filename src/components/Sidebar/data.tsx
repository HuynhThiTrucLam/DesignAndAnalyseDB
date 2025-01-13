import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

import {
  ChartNoAxesCombined,
  List,
  TicketPercent,
  UserCog,
} from "lucide-react";

const Menuitems = [
  {
    title: "Quản lý sản phẩm",
    icon: List,
    href: "/admin",
  },
  {
    title: "Quản lý đơn hàng",
    icon: AssignmentTurnedInOutlinedIcon,
    href: "/admin/manage-order",
  },
  {
    title: "Quản lý voucher",
    icon: TicketPercent,
    href: "/admin/manage-voucher",
  },
  {
    title: "Thống kê doanh thu",
    icon: ChartNoAxesCombined,
    href: "/admin/analyze-revenue",
  },
];

export default Menuitems;
