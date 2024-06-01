import { BiSolidError } from "react-icons/bi";
export default function ErrorMessage() {
  return (
    <div>
      <p>Oops! We can't find that page</p>
      <BiSolidError />
    </div>
  );
}