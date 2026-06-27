import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useApp } from "../context/AppContext";
function Settings() {
  const { state, dispatch } = useApp();

  function handleTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch id="switch-theme" onClick={handleTheme} />
      <Label htmlFor="switch-theme">{`Switch to ${state.theme === "dark" ? "light" : "dark"} mode`}</Label>
    </div>
  );
}

export default Settings;
