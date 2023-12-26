import { Chip } from "@mui/material";
import { Boton } from "./components/Boton";
import { ComponenteSelect } from "./components/ComponenteSelect";
import { GrupoBotones } from "./components/GrupoBotones";
import { Iconos } from "./components/Iconos";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiAutoComplete } from "./components/MuiAutoComplete";
import { MuiAvatar } from "./components/MuiAvatar";
import { MuiBadge } from "./components/MuiBadge";
import { MuiCard } from "./components/MuiCard";
import { MuiCheckcbos } from "./components/MuiCheckcbos";
import { MuiLayout } from "./components/MuiLayout";
import { MuiList } from "./components/MuiList";
import { MuiRating } from "./components/MuiRating";
import { MuiSwitch } from "./components/MuiSwitch";
import { NavBar } from "./components/NavBar";
import { RadioBoton } from "./components/RadioBoton";
import { TextCampo } from "./components/TextCampo";
import { Tipografia } from "./components/Tipografia";
import { ToggleBoton } from "./components/ToggleBoton";
import { MuiChip } from "./components/MuiChip";
import { MuiTooltip } from "./components/MuiTooltip";
import { MuiTable } from "./components/MuiTable";
import { MuiAlert } from "./components/MuiAlert";
import { MuiSnack } from "./components/MuiSnack";
import { MuiDialog } from "./components/MuiDialog";
import { MuiProgress } from "./components/MuiProgress";
import { MuiSkeleton } from "./components/MuiSkeleton";
import { MuiLoadingButton } from "./components/MuiLoadingButton";
import { MuiDateAndTime } from "./components/MuiDateAndTime";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MuiTabs } from "./components/MuiTabs";
import { MuiTimeline } from "./components/MuiTimeline";
import { MuiResponsiveness } from "./components/MuiResponsiveness";
import { createTheme, colors, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: colors.orange[500],
      },
      otro: {
        main: colors.blue[300],
        darker: colors.blue[500],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
        {/* <Tipografia /> */}
        {/* <Boton /> */}
        {/* <Iconos /> */}
        {/* <GrupoBotones />
      <ToggleBoton /> */}
        {/* <TextCampo /> */}
        {/* <ComponenteSelect /> */}
        {/* <RadioBoton /> */}
        {/* <MuiCheckcbos /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutoComplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <NavBar /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnack /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiDateAndTime /> */}
        {/* </LocalizationProvider> */}
        {/* <MuiTabs /> */}
        {/* <MuiTimeline /> */}
        <MuiResponsiveness />
      </ThemeProvider>
    </>
  );
}

export default App;
