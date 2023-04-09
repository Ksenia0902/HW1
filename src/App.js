import React from 'react';
import { Home, News, CallBack, Contacts } from './components';




const links = [
  {
    id: '1',
    title: "Home",
    content: <Home />
  },
  {
    id: '2',
    title: "News",
    content: <News />, 
  },
  {
    id: '3',
    title: "CallBack",
    content: <CallBack />  },
  {
    id: '4',
    title: "Contacts",
    content: <Contacts />, 
  },
]


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: links[0].title,
    };
  }

  changePage = (props) => {
    this.setState({currentPage: props}) 
  }

  renderPage = () => { 
      const find = links.find(page => page.title === this.state.currentPage) 
        return find.content 
    } 

  render(){
    
    return (
    <div>
      <nav className='nav'>
        {links.map(({id, title}) => <a href='#' key={id} onClick={(e) => this.changePage(title)}>{title}</a>)}
        </nav> 
        <div>
          {this.renderPage()}
        </div>
    </div>
    
    )
  }
}

export default App;
