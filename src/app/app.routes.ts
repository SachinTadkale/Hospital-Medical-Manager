import { Routes } from '@angular/router';
import { OnlineAppointmentComponent } from './Pages/Dashboard/receptionist-dashboard/Sidebar-Sections/online-appointment/online-appointment.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => {
      return import('./Pages/Landing/landing.component').then(
        (m) => m.LandingComponent
      );
    },
  },
  {
    path: 'signup',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/Authentication/signup/signup.component').then(
        (m) => m.SignupComponent
      );
    },
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./Pages/Authentication/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
  },

  // ------------------------------- Dashboards ------------------------------------
  // ------------------------------- Doctor Dashboard ------------------------------------
  {
    path: 'doctor-dashboard',
    loadComponent: () => {
      return import(
        './Pages/Dashboard/doctor-dashboard/doctor-dashboard.component'
      ).then((m) => m.DoctorDashboardComponent);
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'doctor-dashboard-home', // Redirect to the default page
      },
      {
        path: 'doctor-dashboard-home',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/doctor-dashboard/Sidebar-Sections/doctor-dashboard-home/doctor-dashboard-home.component'
          ).then((m) => m.DoctorDashboardHomeComponent);
        },
      },
      {
        path: 'patient-reports',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/doctor-dashboard/Sidebar-Sections/patient-reports/patient-reports.component'
          ).then((m) => m.PatientReportsComponent);
        },
      },
      {
        path: 'schedule-management',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/doctor-dashboard/Sidebar-Sections/schedule-management/schedule-management.component'
          ).then((m) => m.ScheduleManagementComponent);
        },
      },
    ],
  },

  // ------------------------------- Receptionist Dashboard ------------------------------------
  {
    path: 'receptionist-dashboard',
    loadComponent: () => {
      return import(
        './Pages/Dashboard/receptionist-dashboard/receptionist-dashboard.component'
      ).then((m) => m.ReceptionistDashboardComponent);
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'receptionist-dashboard-home', // Redirect to default home page
      },
      {
        path: 'receptionist-dashboard-home',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/receptionist-dashboard/Sidebar-Sections/receptionist-dashboard-home/receptionist-dashboard-home.component'
          ).then((m) => m.ReceptionistDashboardHomeComponent);
        },
      },
      {
        path: 'billing-management',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/receptionist-dashboard/Sidebar-Sections/billing-management/billing-management.component'
          ).then((m) => m.BillingManagementComponent);
        },
      },
      {
        path: 'doctor-schedule',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/receptionist-dashboard/Sidebar-Sections/doctor-schedule/doctor-schedule.component'
          ).then((m) => m.DoctorScheduleComponent);
        },
      },
      {
        path: 'patient-details',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/receptionist-dashboard/Sidebar-Sections/patient-details/patient-details.component'
          ).then((m) => m.PatientDetailsComponent);
        },
      },{
        path:'online-appointment', component: OnlineAppointmentComponent
      }
    ],
  },

  // ------------------------------- Medical Dashboard ------------------------------------
  {
    path: 'medical-dashboard',
    loadComponent: () => {
      return import(
        './Pages/Dashboard/medical-dashboard/medical-dashboard.component'
      ).then((m) => m.MedicalDashboardComponent);
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'medical-dashboard-home', // Redirect to default home page
      },
      {
        path: 'medical-dashboard-home',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/medical-dashboard/Sidebar-Sections/medical-dashboard-home/medical-dashboard-home.component'
          ).then((m) => m.MedicalDashboardHomeComponent);
        },
      },
      {
        path: 'medical-manage-products',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/medical-dashboard/Sidebar-Sections/manage-products/manage-products.component'
          ).then((m) => m.ManageProductsComponent);
        },
      },
      {
        path: 'medical-billing',
        pathMatch: 'full',
        loadComponent: () => {
          return import(
            './Pages/Dashboard/medical-dashboard/Sidebar-Sections/medical-billing/medical-billing.component'
          ).then((m) => m.MedicalBillingComponent);
        },
      },
    ],
  },
  // patient History 
  {
    path:'patient-history',
    pathMatch:'full',
    loadComponent: () => {
      return import('./Pages/patient-history/patient-history.component').then(
        (m) => m.PatientHistoryComponent
      )
    }
  },
];

