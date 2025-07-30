import Application from "./application";
import Counter from "./Counter/counter";
import MuiMode from "./mui/mui-mode";
import Provider from "./providers/app-providers";

const App = () => {
  return (
    <Provider>
      <div>
        <p>Test App</p>
        {/* <Application /> */}
        <Counter />
        <MuiMode/>
      </div>
    </Provider>
  );
};
export default App;
