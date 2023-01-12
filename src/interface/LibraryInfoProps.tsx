interface Body {
  id: number;
  name: string;
  text: string;
}

export default interface LibraryInfoProps {
  id: number;
  library: string;
  body: Body[];
}
