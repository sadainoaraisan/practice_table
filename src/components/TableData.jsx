import { memo, VFC } from "react";

// type Props = {
//   No: number;
//   Name: string;
//   Total: number;
// };
const typedata = [];
const Typedata = () => {
  let cntNo = 1;

  for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
    typedata.push({
      No: cntNo++,
      Name: String.fromCharCode([i]),
      Total: 0
    });
  }

  console.log(typedata);

  writeTable(26, typedata);

  function writeTable(row, data) {
    const tableData = document.getElementById("tableData");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    for (let i = 0; i < 1; i++) {
      const data_Header = ["No", "Name", "Total"];
      const tr = document.createElement("tr");

      for (let j = 0; j < 3; j++) {
        const th = document.createElement("th");
        th.textContent = data_Header[j];
        tr.appendChild(th);
        th.setAttribute("id", [j]);
        th.setAttribute("data-sort", "");

        thead.appendChild(tr);
      }
      table.appendChild(thead);
      tableData.appendChild(table);
    }
    for (let k = 0; k < row; k++) {
      const data_Array = [data[k].No, data[k].Name, data[k].Total];
      const tr = document.createElement("tr");

      for (let z = 0; z < 3; z++) {
        let td = document.createElement("td");
        td.textContent = data_Array[z];
        tr.appendChild(td);
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
    }
  }
};

// export const TableData: VFC<Props> = memo(() => {
//   return <h1>aaa</h1>;
// });
export const TableData = memo(() => {
  return (
    <>
      <h1>aaa</h1>
      {Typedata()}
    </>
  );
});
