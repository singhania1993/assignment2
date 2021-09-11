import { v4 } from 'uuid'
import { books, desk, meeting, office, space } from '../../images'
export const background = [
  {
    id: v4(),
    backgroundImg: books,
    name: 'Books',
  },

  {
    id: v4(),
    backgroundImg: desk,
    name: 'Desk',
  },
  {
    id: v4(),
    backgroundImg: meeting,
    name: 'Meeting',
  },
  {
    id: v4(),
    backgroundImg: office,
    name: 'Office',
  },
  {
    id: v4(),
    backgroundImg: space,
    name: 'Space',
  },
]
