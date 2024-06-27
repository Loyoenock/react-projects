import "./styles.css";
import data from "../accordian/data";

import { useState } from "react";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelect, setEnableMultipleSelect] = useState(false);
  const [multipleSelect, setMultipleSelect] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multipleSelect];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultipleSelect(copyMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultipleSelect(!enableMultipleSelect)}>
        Enable Multi Selection{" "}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={
                  enableMultipleSelect
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              <div className="content">
                {selected === dataItem.id ||
                multipleSelect.indexOf(dataItem.id) !== -1 ? (
                  <div>{dataItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}