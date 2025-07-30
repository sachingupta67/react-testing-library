import Application from "./application";
import Counter from "./Counter/counter";
import MuiMode from "./mui/mui-mode";
import Provider from "./providers/app-providers";
import Users from "./Users";

const App = () => {
  return (
    <Provider>
      <div>
        <p>Test App</p>
        {/* <Application /> */}
        <Counter />
        <MuiMode/>
        <Users/>
      </div>
    </Provider>
  );
};
export default App;
