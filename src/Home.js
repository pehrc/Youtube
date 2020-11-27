import React from 'react';
import { 
  makeStyles, 
  Typography, 
  Box, 
  AppBar, 
  Toolbar, 
  IconButton, 
  Button, 
  List, 
  ListItemIcon, 
  ListItem, 
  ListItemText,
  ListSubheader, 
  Drawer, 
  Divider,
  Hidden,
  Grid,
  Switch } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HistoryIcon from '@material-ui/icons/History';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import VideocamIcon from '@material-ui/icons/Videocam';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
  },
  appBar:{
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  grow:{
    flexGrow:'1',
  },
  icons:{
    paddinRight: theme.spacing(5)
  },
  menuIcon:{
    paddinRight: theme.spacing(5),
    paddinLeft: theme.spacing(5)
  },
  logo:{
    height: 28,
  },
  listItemText:{
    fontSize: 14,
  },
  listItem:{
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader:{
    textTransform: 'uppercase'
  },
}));

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];

function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return(
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={ theme.palette.type === 'dark' ? "/images/branco.png" : "/images/preto.png" } alt="logo" className={classes.logo}/>
          <div className={classes.grow} />
          <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)} className={classes.icons}/>
          <IconButton className={classes.icons} >
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons} >
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons} >
            <NotificationsIcon />
          </IconButton>
          <Button startIcon={<AccountCircleIcon />} variant="outlined" color="secondary">Fazer login</Button>
        </Toolbar>
      </AppBar>
      <Box display='flex'>
      <Hidden mdDown>
      <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <List>
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
              <ListItemText classes={{ primary: classes.listItemText }} primary={'Início'} /> 
            </ListItem>
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
              <ListItemText classes={{ primary: classes.listItemText }} primary={'Em alta'} /> 
            </ListItem>
            <ListItem button classes={{root: classes.listItem}}>
              <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
              <ListItemText classes={{ primary: classes.listItemText }} primary={'Inscrições '} /> 
            </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} primary={'Biblioteca'} /> 
          </ListItem>
          <ListItem button classes={{root: classes.listItem}}>
            <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
            <ListItemText classes={{ primary: classes.listItemText }} primary={'Histórico'} /> 
          </ListItem>
        </List>
        <Divider />
        <Box p={2}>
          <Typography variant="body3">
            Faça login para curtir vídeos, comentar e se inscrever.
          </Typography>
          <Box mt={2} >
            <Button variant="outlined" color="secondary" startIcon = {<AccountCircleIcon/>}>Fazer login</Button>
          </Box>
        </Box>
        <Divider />
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader
              component='div'
              id='nested-list-subheader'
              className={classes.subheader}
            >
              O Melhor do youtube
            </ListSubheader>
          }
        >
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <QueueMusicIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Música'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <SportsBasketballIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Esportes'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <SportsEsportsIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Jogos'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <LocalMoviesIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Filmes'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AnnouncementIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Notícias'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <LiveTvIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Ao vivo'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <FeaturedVideoIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Destaques'}
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <VideocamIcon />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Videos 360'}
            />
          </ListItem>
        </List>
        <Divider />
        <ListItem button classes={{ root: classes.listItem }}>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={'Procurar mais'}
          />
        </ListItem>
        <Divider />
      </div>
      </Drawer>
      </Hidden>
      <Box p={8}>
          <Toolbar />
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
