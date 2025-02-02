import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskProvider from './contexts/TaskContext';

export default function App(){
  return (
    <div>
      <h1>TODO Application</h1>
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </div>
  )
}