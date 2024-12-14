
type NavItemsProps = {
  className: string;
};
export default function NavItems({ className }: NavItemsProps) {
  return (
    <ul className={className}>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#careers">Careers</a>
      </li>
      <li>
        <a href="#events">Events</a>
      </li>
      <li>
        <a href="#products">Products</a>
      </li>
      <li>
        <a href="#support">Support</a>
      </li>
    </ul>
  );
}
