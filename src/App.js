import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Card, Divider, Header, Icon, Modal, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import pdf from './cv.pdf';

function App() {
  const [spotifyOpen, setSpotifyOpen] = React.useState(false)
  const [caredemicOpen, setCaredemicOpen] = React.useState(false)
  const [portfolioOpen, setPortfolioOpen] = React.useState(false)
  return (
    <div className="App">
      <Segment color='purple' inverted className="segment-header">
        <Header as='h1'>
          <Header.Content>
            Philip Smyth
            <Header.Subheader>Software Engineer, enjoys creating and learning to create</Header.Subheader>
          </Header.Content>
        </Header>
      </Segment>
      <Divider />
      <Container>
        <Card.Group itemsPerRow={1}>
          <Card>
            <Card.Content>
              <Card.Header>
                Resume/CV
                <Icon name='newspaper outline' className="card-icon" float='right'/>
              </Card.Header>
              <Card.Meta>Overview of qualifications, experiance etc.</Card.Meta>
              <Card.Description>
                This is my current CV, it will cover generalized experiance, projects, education and so on that may or may not be present here. This can be viewed or downloaded.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui buttons'>
                <Button basic color='purple'>
                  View CV
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Github
                <Icon name='github' className="card-icon" float='right'/>
              </Card.Header>
              <Card.Meta>Personal github repo</Card.Meta>
              <Card.Description>
                My personal github repo. This has a number of projects that I have worked upon, from University to recently.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui'>
                <Button basic color='purple' as='a' href='https://github.com/Philip-Smyth?tab=repositories' target="_blank">
                  View Github projects
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Social networks
                <Icon name='sitemap' className="card-icon" float='right'/>
              </Card.Header>
              <Card.Meta>Twitter and LinkedIn</Card.Meta>
              <Card.Description>
                Social networks where I would often post technology or work related content.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui buttons'>
                <Button color='twitter' as='a' href='https://twitter.com/psmyth231' target="_blank">
                  <Icon name='twitter' /> Twitter
                </Button>
                <Button color='linkedin' as='a' href='https://www.linkedin.com/in/psmyth231/' target="_blank">
                  <Icon name='linkedin' /> LinkedIn
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Medium Articles
                <Icon name='sitemap' className="card-icon" float='right'/>
              </Card.Header>
              <Card.Meta>Medium Stories</Card.Meta>
              <Card.Description>
                I write articles on Medium, ranging from design to arduino programming and other projects I find interesting.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui'>
                <Button basic color='purple' as='a' href='https://psmyth231.medium.com/' target="_blank">
                  <Icon name='medium' />
                  Medium
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Divider />
          <Header as='h1' className="header-projects" textAlign='center'>
            <Header.Content>
              Software Projects
              <Header.Subheader>Various side-projects I have been working on currently or in the past.</Header.Subheader>
            </Header.Content>
          </Header>
          <Divider />
          <Card>
            <Card.Content>
              <Card.Header>
                Caredemic
                <Icon name='sitemap' className="card-icon" float='right'/>
              </Card.Header>
              <Card.Meta>How to help out during Covid-19</Card.Meta>
              <Card.Description>
                A simple website to suggest ideas and options to help other people during the pandemic.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui buttons'>
              <Button color='purple' onClick={() => setCaredemicOpen(true)}>
                  More info
                </Button>
                <Button color='blue' as='a' href="https://github.com/SaysKez/caredemic" target="_blank">
                  Github
                </Button>
                <Button color='black' as='a' href="https://www.caredemic.life/" target="_blank">
                  Website
                </Button>
              </div>
              <Modal
                onClose={() => setCaredemicOpen(false)}
                onOpen={() => setCaredemicOpen(true)}
                open={caredemicOpen}
              >
                <Modal.Header>Caredemic - React based site to help during pandemic</Modal.Header>
                <Modal.Content image>
                  <div className='image'>
                    <Icon name='heart outline' />
                  </div>
                  <Modal.Description>
                    <p>This project was a small side project to give suggestions on how folks could help one another during this pandemic. It was a basic site consisting of React and semantic ui components for the overall structure, while also making use of airtable for the basic storage of the information. This was done along with Kezie Todd who handled much of the design and styling of the site.</p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Spotify daily soundtrack
                <Icon name='sitemap' className="card-icon" float='right'/>
              </Card.Header>
              <Card.Meta>Automating a daily soundtrack for myself on spotify</Card.Meta>
              <Card.Description>
                A small inconcenvience I decided to solve using python and the spotify api.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui buttons'>
              <Button color='purple' onClick={() => setSpotifyOpen(true)}>
                More info
              </Button>
              <Button color='blue' as='a' href="https://github.com/Philip-Smyth" target="_blank">
                Github
              </Button>
              </div>
              <Modal
                onClose={() => setSpotifyOpen(false)}
                onOpen={() => setSpotifyOpen(true)}
                open={spotifyOpen}
              >
                <Modal.Header>Daily spotify soundtrack</Modal.Header>
                <Modal.Content image>
                  <div className='image'>
                    <Icon name='spotify' />
                  </div>
                  <Modal.Description>
                    <p>This small project came from a few annoyances with the current spotify daily drive playlist, so this project uses python to create a spotify playlist and create a random playlist everyday</p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                This portfolio site
                <Icon name='sitemap' className="card-icon" float='right'/>
              </Card.Header>
              <Card.Meta>Created this to encapsulate what I have done and like to do</Card.Meta>
              <Card.Description>
                Did this in an afternoon to offer better insite concerning projects and interests
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui'>
                <Button color='purple' onClick={() => setPortfolioOpen(true)}>
                  More info
                </Button>
                <Button color='blue' as='a' href="https://github.com/Philip-Smyth/portfolio" target="_blank">
                  Github
                </Button>
              </div>
              <Modal
                onClose={() => setPortfolioOpen(false)}
                onOpen={() => setPortfolioOpen(true)}
                open={portfolioOpen}
              >
                <Modal.Header>Online directory and portfolio - This webpage</Modal.Header>
                <Modal.Content image>
                  <div className='image'>
                    <Icon name='folder open outline' />
                  </div>
                  <Modal.Description>
                    <p>I wanted a website that could be used as a single point of contact for all my resume information (CV, projects, articles etc.) So decided to spend an afternoon quickly putting this together</p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </div>
  );
}

export default App;
