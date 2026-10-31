import AppRoutes from './routes/AppRoutes';
import { AppThemeProvider } from './theme';

export default function App() {
  return (
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  );
}
