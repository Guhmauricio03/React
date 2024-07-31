import './styles.css';
import Counter from '../../components/counter';

function Main() {
  return (
    <div className="container-main">
      <Counter title='Contador 1'/>
      <Counter title='Contador 2'/>
    </div>
  );
}

export default Main;
