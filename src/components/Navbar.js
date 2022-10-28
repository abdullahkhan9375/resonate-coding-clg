// import { home } from "../icons/home.svg";
import { ReactComponent as ContactsIcon } from "../icons/ContactsIcon.svg";
import { ReactComponent as HomeIcon } from "../icons/HomeIcon.svg";

const NavButtons =
[
    {
        title: "Home",
        icon: <HomeIcon className="navbar--icons"/>,
        value: "home",
    },
    {
        title: "Contacts",
        icon: <ContactsIcon className="navbar--icons"/>,
        value: "contacts"
    }
];

export const Navbar = (props) =>
{
    return (
    <div className="container--navbar">
        { NavButtons.map((aNavButtonInfo) =>
        {
            const { title, icon, value } = aNavButtonInfo;
            return (
                <div className="navbar--item"
                    onClick={() => props.handleSelectTab(value) }>
                    { icon }
                </div>
            );
        })}
    </div>
    );
};
