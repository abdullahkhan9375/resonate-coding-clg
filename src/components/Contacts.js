import { useEffect, useState } from "react";
import { ReactComponent as MailIcon } from "../icons/MailIcon.svg";
import { ReactComponent as PhoneIcon } from "../icons/PhoneIcon.svg";
import { ReactComponent as WebsiteIcon } from "../icons/WebsiteIcon.svg";



const contact =
[
{
  id: 7,
  name: "Cat",
  username: "Cat123",
  email: "email.com",
  address:
  {
    street: "street",
    suite: "suite",
    city: "howemouth",
    zipcode: "566",
  },
  geo:
  {
    lat: "",
    lng: "",
  },
  phone: "phone",
  website: "website",
  company: {
    name: "name",
    catchPhrase: "catch",
    bs: "gen"
  },
},
];

const ContactCard = (props) =>
{
    const
    {
        name,
        username,
        email,
        address,
        geo,
        phone,
        website,
        company
    } = props;
    return (
        <div className="centered-flex contact--card">
            <div className="contact--card-details">
                <h1> {username} ({name})</h1>
                <h3>
                    Address: {address.suite}, {address.street}, {address.city}, {address.zipcode}
                </h3>
                <h3>
                    Office: {company.name} ({company.bs})
                </h3>
            </div>
            <div className="contact--card-links">
                <div>
                    <a href={`mailto: ${email}`}>
                        <MailIcon className="contact--icons" href={`mailto: ${email}`}/>
                    </a>
                </div>
                <div>
                    <a href={`tel: ${phone}`}>
                        <PhoneIcon className="contact--icons"/>
                    </a>
                </div>
                <div>
                    <a href={`${website}`} target="_blank">
                        <WebsiteIcon className="contact--icons"/>
                    </a>
                </div>
            </div>

        </div>
    )
}

export const Contacts = () =>
{
    const [contacts, setContacts] = useState(contact);
    const requestURL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() =>
    {
        (async() =>
        {
            const response = await fetch(requestURL);
            const data = await response.json();
            setContacts(data);
        })();
    }, []);

    return (
    <div className="container--contacts">
        
        {contacts.length === 0 && <p> Loading... </p> }
        { contacts.length != 0 && contacts.map((aContact) =>
        {
            return <ContactCard {...aContact} />
        })}
    </div>
    );
}