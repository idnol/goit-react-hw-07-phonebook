import { ListItem } from '../ListItem/ListItem';
import { useSelector } from 'react-redux';

export const List = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  console.log(contacts);

  const contactArr = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter);
  })

  return <ul>
    {contactArr.map(contact => (
      <li key={contact.id}>
        <ListItem id={contact.id} name={contact.name} number={contact.number} />
      </li>
    ))}
  </ul>
}
