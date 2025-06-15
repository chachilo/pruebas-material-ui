import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Chip
} from '@mui/material';
import {
  Code as CodeIcon,
  BugReport as BugIcon,
  Coffee as CoffeeIcon,
  SentimentVerySatisfied as HappyIcon,
  Warning as WarningIcon,
  Lightbulb as IdeaIcon
} from '@mui/icons-material';

const Messages = () => {
  const programmingMessages = [
    {
      id: 1,
      text: "¡Commit hecho! Mensaje: 'Arreglos varios' (como siempre)",
      sender: "Git Master",
      time: "10:30 AM",
      icon: <CodeIcon />,
      mood: "success"
    },
    {
      id: 2,
      text: "¿Quién ha escrito 'TODO: arreglar esto' y lo ha dejado ahí desde 2019?",
      sender: "El Detective del Código",
      time: "Ayer",
      icon: <BugIcon />,
      mood: "warning"
    },
    {
      id: 3,
      text: "Mi código tiene 99 problemas pero el merge no es uno",
      sender: "Rapper Frontend",
      time: "11:45 AM",
      icon: <HappyIcon />,
      mood: "info"
    },
    {
      id: 4,
      text: "La cafetera está vacía. REPITO: LA CAFETERA ESTÁ VACÍA",
      sender: "Team DevOps",
      time: "Hace 2 horas",
      icon: <CoffeeIcon />,
      mood: "error"
    },
    {
      id: 5,
      text: "He encontrado una solución... pero no sé por qué funciona",
      sender: "FullStack Wizard",
      time: "9:15 AM",
      icon: <IdeaIcon />,
      mood: "info"
    },
    {
      id: 6,
      text: "Nunca toques código que funciona. Es como despertar a un dragón dormido",
      sender: "Senior Developer",
      time: "Ayer",
      icon: <WarningIcon />,
      mood: "warning"
    },
    {
      id: 7,
      text: "¿Alguien más piensa que los puntos y comas son solo decoración en JavaScript?",
      sender: "JS Lover",
      time: "3:20 PM",
      icon: <CodeIcon />,
      mood: "success"
    },
    {
      id: 8,
      text: "Mi habilidad para depurar es inversamente proporcional a la proximidad de la fecha límite",
      sender: "Debugger Man",
      time: "Hace 30 min",
      icon: <BugIcon />,
      mood: "error"
    }
  ];

  const getColorByMood = (mood) => {
    switch(mood) {
      case 'success': return 'success';
      case 'warning': return 'warning';
      case 'error': return 'error';
      default: return 'primary';
    }
  };

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Mensajes del Equipo
        <Chip 
          label={`${programmingMessages.length} nuevos`} 
          color="primary" 
          size="small" 
          sx={{ ml: 2 }}
        />
      </Typography>
      
      <List sx={{ 
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
        p: 1
      }}>
        {programmingMessages.map((message) => (
          <Box key={message.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: `${getColorByMood(message.mood)}.light` }}>
                  {message.icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <>
                    <Typography 
                      component="span" 
                      variant="subtitle1" 
                      sx={{ fontWeight: 600 }}
                    >
                      {message.sender}
                    </Typography>
                    <Typography 
                      component="span" 
                      variant="caption" 
                      sx={{ ml: 1, color: 'text.secondary' }}
                    >
                      {message.time}
                    </Typography>
                  </>
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ 
                      display: 'inline-block',
                      mt: 0.5,
                      fontStyle: message.mood === 'warning' ? 'italic' : 'normal'
                    }}
                  >
                    {message.text}
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Messages;