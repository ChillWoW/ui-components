import { IconScript, IconSettings, IconUser } from "@tabler/icons-react";
import {
  TextArea,
  Pagination,
  SelectInput,
  Switch,
  Text,
  Tooltip,
  Button,
} from "../components";
import { useState } from "react";

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="h-screen w-screen p-15 bg-black">
      <Tooltip label="Hello World">
        <Button>Click me</Button>
      </Tooltip>
    </div>
  );
};

export default App;
