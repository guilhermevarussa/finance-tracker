import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Categories } from "./types/Categories";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import {TableArea} from "./components/TableArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filterList, setFilterList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilterList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Relatório financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/**Area de informações do sistema */}
        {/**Area de inserção do sistema do sistema */}
        {<TableArea list={filterList} />}
      </C.Body>
    </C.Container>
  );
};

export default App;
