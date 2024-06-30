


interface Props {
  value: number;
  name: string;
  checked?: boolean;
  onChange: (value: number) => void;
}

export default function CircleCheckbox({ value, name, checked, onChange }: Props): JSX.Element {
  return (
    <span className="size-[1.5rem] rounded-full border-solid border-[3px] border-primary bg-transparent flex justify-center items-center">
      <input 
        type="checkbox" 
        className="size-[70%] appearance-none rounded-full bg-transparent checked:bg-primary"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
    </span>
  );
}
