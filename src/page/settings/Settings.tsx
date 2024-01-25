import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/layout/Layout";
import Container from "@/layout/container/Container";
import { Units } from "@/models/Units";
import { useSettings } from "./Settings.hooks";

const Settings = () => {
  const { units, changeUnits, theme, changeTheme } = useSettings();
  console.log(units, theme);
  return (
    <Layout>
      <Container className="py-5 px-2">
        <Card>
          <div className="p-3 border-b">
            <h2 className="font-semibold text-lg">Settings</h2>
          </div>

          <ul>
            <li className="flex justify-between items-center border-b p-2">
              <span>Units</span>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={units} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      value={Units.IMPERIAL}
                      onClick={() => changeUnits(Units.IMPERIAL)}
                    >
                      {Units.IMPERIAL}
                    </SelectItem>
                    <SelectItem
                      value={Units.METRIC}
                      onClick={() => changeUnits(Units.METRIC)}
                    >
                      {Units.METRIC}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </li>
            <li className="flex justify-between  items-center p-2">
              <span>Theme</span>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={theme} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      value="light"
                      onClick={() => changeTheme("light")}
                    >
                      light
                    </SelectItem>
                    <SelectItem
                      value="dark"
                      onClick={() => changeTheme("dark")}
                    >
                      dark
                    </SelectItem>
                    <SelectItem
                      value="system"
                      onClick={() => changeTheme("system")}
                    >
                      system
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </li>
          </ul>
        </Card>
      </Container>
    </Layout>
  );
};

export default Settings;
