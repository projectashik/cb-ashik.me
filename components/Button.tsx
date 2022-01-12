interface ButtonProps {
  href: string;
  children: string;
}
const Button = (props: ButtonProps) => {
  return (
    <a
      href={props.href}
      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-500 hover:bg-primary-700 focus:shadow-outline focus:outline-none"
    >
      {props.children}
    </a>
  );
};

export default Button;
