import AdminJS from "adminjs";
import adminJsExpress from "@adminjs/express";
import adminJsSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";

AdminJS.registerAdapter(adminJsSequelize);

export const adminJsInst = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminJsResources,
  locale: locale,
  branding: brandingOptions,
  dashboard: dashboardOptions,
});

export const adminJsRouter = adminJsExpress.buildAuthenticatedRouter(
  adminJsInst,
  authenticationOptions,
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
);
