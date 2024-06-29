import GradeManager from './GradesManager'
import { SearchBarProvider } from '@/context/SearchBarContext'

export default function GradesManagerPage() {
  return (
    <div className="flex-1">
        <SearchBarProvider>
            <GradeManager />
        </SearchBarProvider>
    </div>
  )
}