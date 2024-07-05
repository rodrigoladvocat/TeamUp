import GradesManagerContent from './GradesManager';
import { SearchBarProvider } from '@/context/SearchBarContext'

export default function GradesManagerPage() {
  return (
    <SearchBarProvider>
        <GradesManagerContent />
    </SearchBarProvider>
  )
}
