import { RiUserSettingsLine } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { LuNewspaper } from "react-icons/lu";
import { BiHomeAlt } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
const iconMap = {
  newspaper: LuNewspaper,
  home: BiHomeAlt,
  people: IoPeopleOutline,
  error: BiError,
  leftArrow: AiOutlineArrowLeft,
  user: RiUserSettingsLine,
  products : MdFastfood
};

const Icon = ({ name, className }) => {
  const SelectedIcon = iconMap[name];

  if (!SelectedIcon) return null;

  return <SelectedIcon className={className} />;
};

export default Icon;
