type ButtonProps = {
  className: string;
};
export default function Button({ className }: ButtonProps) {
  return (
    <button
      className={`block py-2 mx-auto mt-10 text-lg tracking-widest uppercase border-2 border-black px-14 alata-regular hover:bg-black hover:text-white ${className}`}
    >
      See all
    </button>
  );
}
