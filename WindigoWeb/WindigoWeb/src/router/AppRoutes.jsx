import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/Home/HomePage'
import TeamsDashboard from '../pages/Teams/TeamsDashboard'
import IceMaintenanceDashboard from '../pages/IceMaintenance/IceMaintenanceDashboard'
import IceDepthDashboard from '../pages/IceMaintenance/IceDepthDashboard'
import MaintenanceDashboard from '../pages/IceMaintenance/MaintenanceDashboard'
import RinkBuildingInfo from '../pages/BuildingInfo/RinkBuildingInfo'
import IceDepthForm from '../pages/BuildingInfo/IceDepthForm'
import MaintenanceForm from '../pages/BuildingInfo/MaintenanceForm'
import RinkTemperatureForm from '../pages/BuildingInfo/RinkTemperatureForm'
import BillingForms from '../pages/BuildingInfo/BillingForms'
import HVACMaintenance from '../pages/Maintenance/HVACMaintenance'
import IceMaintenance from '../pages/Maintenance/IceMaintenance'
import RinkMaintenance from '../pages/Maintenance/RinkMaintenance'
import ZamboniSchedule from '../pages/Maintenance/ZamboniSchedule'
import ZamboniMaintenance from '../pages/Maintenance/ZamboniMaintenance'
import GasUsageForm from '../pages/Billing/GasUsageForm'
import ElectricityUsageForm from '../pages/Billing/ElectricityUsageForm'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamsDashboard />} />
          <Route path="/ice-maintenance" element={<IceMaintenanceDashboard />} />
          <Route path="/ice-maintenance/ice-depth" element={<IceDepthDashboard />} />
          <Route path="/ice-maintenance/maintenance" element={<MaintenanceDashboard />} />
          <Route path="/building-info" element={<RinkBuildingInfo />} />
          <Route path="/building-info/ice-depth" element={<IceDepthForm />} />
          <Route path="/building-info/maintenance" element={<MaintenanceForm />} />
          <Route path="/building-info/rink-temperature" element={<RinkTemperatureForm />} />
          <Route path="/building-info/billing" element={<BillingForms />} />
          <Route path="/maintenance/hvac" element={<HVACMaintenance />} />
          <Route path="/maintenance/ice" element={<IceMaintenance />} />
          <Route path="/maintenance/rink" element={<RinkMaintenance />} />
          <Route path="/maintenance/zamboni/schedule" element={<ZamboniSchedule />} />
          <Route path="/maintenance/zamboni/maintenance" element={<ZamboniMaintenance />} />
          <Route path="/billing/gas" element={<GasUsageForm />} />
          <Route path="/billing/electricity" element={<ElectricityUsageForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
