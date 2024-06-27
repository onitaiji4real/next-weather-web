import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function ModeSwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="Cloudy-mode">Cloudy Mode</Label>
    </div>
  );
}
