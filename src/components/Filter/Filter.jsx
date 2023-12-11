import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();

  return <div>
    <h2>Contacts</h2>
    <input type='text' name='filter' onChange={e => dispatch(updateFilter(e.target.value))} />
  </div>
}
