import React, { Fragment } from 'react';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Content status={<Status />} page={<Page />} help={<Help />}>
      </Content>
      <Footer />
    </div>
  );
}

const Header = () => {
  const style = { backgroundColor: 'red' }
  return <div style={style}>Header</div>
}

const Nav = () => {
  const style = { backgroundColor: 'green' }
  return <div style={style}>Nav</div>
}

const Content = ({ status, page, help }) => {
  const style = { backgroundColor: 'blue' }
  return <div style={style}>Content {status} {page} {help}</div>
}

const Status = () => {
  const style = { backgroundColor: 'orange' }
  return <div style={style}>Status</div>
}

const Page = () => {
  const style = { backgroundColor: 'purple' }
  return <div style={style}>Page</div>
}

const Help = () => {
  const style = { backgroundColor: 'yellow' }
  return <div style={style}>Help</div>
}

const Footer = () => {
  const style = { backgroundColor: 'pink' }
  return <div style={style}>Footer</div>
}

export default App;