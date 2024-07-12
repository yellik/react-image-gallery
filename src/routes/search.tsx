import { createFileRoute } from '@tanstack/react-router'
import { Board } from '../components/Board'

export const Route = createFileRoute('/search')({
  component: () => <div>
    <Board/>
  //need to add feature for prop drilling saerch searchTerm
  </div>
})