import './App.css';
import { LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MuiDatePIcker } from './components/MuiDatePIcker';
import { MuiTabs } from './components/MuiTabs';
// import { MuiDateRangePIcker } from './components/MuiDateRangePIcker';
// import { MuiLoadingButton } from './components/MuiLoadingButton';
// import { MuiSkeleton } from './components/MuiSkeleton';
// import { MuiProgress } from './components/MuiProgress';
// import { MuiDialog } from './components/MuiDialog';
// import { MuiAlert } from './components/MuiAlert';
// import { MuiSnackbar } from './components/MuiSnackbar';
// import { MuiTable } from './components/MuiTable';
// import { MuiTooltip } from './components/MuiTooltip';
// import { MuiChip } from './components/MuiChip';
// import { MuiList } from './components/MuiList';
// import { MuiAvatar } from './components/MuiAvatar';
// import { MuiBadge } from './components/MuiBadge';
// import { MuiBottomNavigation } from './components/MuiBottomNavigation';
// import { MuiBreadCrumbs } from './components/MuiBreadCrumbs';
// import { MuiDrawer } from './components/MuiDrawer';
// // import { MuiLink } from './components/MuiLink';
// import { MuiNavBar } from './components/MuiNavBar';
// import { MuiSpeedDial } from './components/MuiSpeedDial';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiAccordion } from './components/MuiAccordion';
// import { MuiCard } from './components/MuiCard';
// import { MuiTesting } from './components/MuiTesting';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiAutocomplete } from './components/MuiAutocomplete';
// import { MuiRating } from './components/MuiRating';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiCheckBox } from './components/MuiCheckBox';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiButton } from './components/MuiButton';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiTypography } from './components/MuiTypography';
// import { MuiSelect } from './components/MuiSelect';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="App">
     {/* <MuiTypography /> */}
     {/* <MuiButton /> */}
     {/* <MuiTextField /> */}
     {/* <MuiSelect /> */}
     {/* <MuiRadioButton /> */}
     {/* <MuiCheckBox /> */}
     {/* <MuiSwitch /> */}
     {/* <MuiRating /> */}
     {/* <MuiAutocomplete /> */}
     {/* <MuiLayout /> */}
     {/* <MuiTesting /> */}
     {/* <MuiCard /> */}
     {/* <MuiAccordion /> */}
     {/* <MuiImageList /> */}
     {/* <MuiNavBar /> */}
     {/* <MuiLink /> */}
     {/* <MuiBreadCrumbs /> */}
     {/* <MuiDrawer /> */}
     {/* <MuiSpeedDial /> */}
     {/* <MuiBottomNavigation /> */}
     {/* <MuiAvatar /> */}
     {/* <MuiBadge /> */}
     {/* <MuiList /> */}
     {/* <MuiChip /> */}
     {/* <MuiTooltip /> */}
     {/* <MuiTable /> */}
     {/* <MuiAlert /> */}
     {/* <MuiSnackbar /> */}
     {/* <MuiDialog /> */}
     {/* <MuiProgress /> */}
     {/* <MuiSkeleton /> */}
     {/* <MuiLoadingButton /> */}
     <MuiDatePIcker />
     {/* <MuiDateRangePIcker /> */}
     <MuiTabs />
    </div>
    </LocalizationProvider>
  );
}

export default App;
