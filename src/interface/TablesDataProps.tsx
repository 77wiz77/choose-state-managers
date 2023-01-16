interface Row {
  idRow: number;
  row: Data;
}

interface Data {
  0: string;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
}

export default interface TablesDataProps {
  id: number;
  name: string;
  table: Row[];
}
