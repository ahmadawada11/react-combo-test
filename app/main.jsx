import * as React from "react";
import * as ReactDOM from "react-dom";
import { ComboBox } from "@progress/kendo-react-dropdowns";

const App = () => {
  const sports = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
  const [allowCustom, setAllowCustom] = React.useState(false);

  const onChange = event => {
    setAllowCustom(event.target.checked);
  };

  return <div className="example-wrapper">
      <div className="example-config">
        <input id="ac" type="checkbox" className="k-checkbox k-checkbox-md k-rounded-md" onChange={onChange} checked={allowCustom} />
        <label className="k-checkbox-label" htmlFor="ac">
          Allow custom values
        </label>
      </div>
      <div>
        <div>Favorite sport:</div>
        <ComboBox style={{
        width: '300px'
      }} data={sports} allowCustom={allowCustom} />
      </div>
    </div>;
};

ReactDOM.render(<App />, document.querySelector("my-app"));