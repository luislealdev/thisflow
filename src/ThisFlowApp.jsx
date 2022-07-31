import { AppRoutes } from "./routes/AppRoutes";
import { AppTheme } from "./theme/AppTheme";

export const ThisFlowApp = () => {
  return (
    <AppTheme>
      <AppRoutes />
    </AppTheme>
  );
};
