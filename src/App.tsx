
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'
import TopicsList from './components/TopicsList'
import TrendsList from './components/TrendsList'

const App = () => {
  return (
    <div>
      <Navigation/>
      <div className="flex justify-center">
        <div className="w-[30%]">
          <PeopleToFollow/>
          <TrendsList/>
          <TopicsList/>
        </div>
      </div>
    </div>
  )
}

export default App