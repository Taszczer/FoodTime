export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
  
export interface Background {
  id: number,
  title: string, 
  butOn: string,
  colorForBt: string,
  product: string,
  imageUrl: string
  colors: string,
  backImage:string
}

export interface SearchManufacturerProps {
  selected: string
  setSelected: (selected: string) => void
}
