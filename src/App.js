import { Typography, Stack, Fab, Paper, Input } from '@mui/material';
import { Box } from '@mui/system';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import React from 'react';
import './App.css';
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";
import ScrollToBottom from 'react-scroll-to-bottom';


function App() {

  const [name, setname] = React.useState('')
  const [chats, setChats] = React.useState([])
  const [msg, setMsg] = React.useState('')
  const [value, setValue] = React.useState(false)
  const db = getDatabase();
  const chatListRef = ref(db, 'posts');
  console.log("chatListRef", chatListRef);

  console.log("chats1", chats);

  React.useEffect(() => {
    if (value) {
      onChildAdded(chatListRef, (data) => {
        console.log("data", data.val());
        setChats(chats => [...chats, data.val()])
        console.log("chats12", chats)
      });
    }

    else {
      console.log("--none--");
    }

  }, [value])

  React.useEffect(() => {
    setValue(true)
  }, [])







  const sendchat = () => {

    if (!msg) {
      alert('Enter some message!!!!')
    }
    else {
      const chatRef = push(chatListRef);
      set(chatRef, {
        name, message: msg
      });

    }


    setMsg('')
  }

  return (
    <>

      <Paper sx={{ bgcolor: '#1F1B24', width:{xl:'35vw',xs:'auto'}, mx: {xl:'25%'}, height: {xl:'98vh',xs:'100vh'}, my: {xl:1,xs:0}, borderRadius: {xl:'14px',xs:'0px'} }} elevation={7} >

        <Box component='div' sx={{ bgcolor: '#6200EE', height:{xl:0.08,xs:0.09}, mt: 0, width: 'inherit', fontFamily: 'fantasy', borderRadius: { xl:'14px 14px 0px 0px',xs:'0px 0px 0px 0px'}  }}>
          <Typography sx={{ color: 'white', fontFamily: 'fantasy', fontSize: 35, p: 1, ml: 1 }}>
            chat app
          </Typography>
        </Box>

        {
          name ?
            <>
              <ScrollToBottom initialScrollBehavior='smooth'>
                <Box component='div' sx={{ width:{xl:580,xs:'350px'}, height:{xl:715,xs:'516px'} }} >

                  {chats?.map((c, i) => (

                    <Stack key={i} alignItems={c.name === name ? 'flex-end' : 'flex-start'} sx={{ ml: 2, mr: 2 }} >
                      <Box component='p' sx={{ width: 'auto', height: 'auto', bgcolor: '#AA00FF', color: 'white', borderRadius: 25, p: 2, fontSize: 18, fontFamily: 'cursive', textTransform: 'capitalize' }}>{c?.name} : {c?.message}</Box>
                    </Stack>

                  ))
                  }

                </Box>
              </ScrollToBottom>

              <Box component='div' sx={{ position: 'sticky', mt: 3 }} >
                <Stack direction='row' >
                  <Input onChange={e => setMsg(e.target.value)} value={msg} sx={{ bgcolor: '#3700B3', borderRadius:25, color: 'white', fontFamily: "cursive", p: 1.5, fontSize: 20, ml:2, width: {xl:'87%',xs:'auto'} }} disableUnderline></Input>
                  <Fab onClick={sendchat} aria-label="edit" style={{ backgroundColor: '#BB86FC' }} sx={{ ml: 1 }}>
                    <SendRoundedIcon sx={{ color: 'white' }} />
                  </Fab>
                </Stack>
              </Box>

            </>
            :
            <>
              <Typography sx={{ color: 'white', ml:{xl:20,xs:7}, mt: 10, textTransform: 'capitalize', fontWeight: 600 }}>enter the name & click on screen</Typography>
              {/* <Paper sx={{ height: 50, width: 250, ml:{xl:18,xs:7}, bgcolor: '#7E57C2' }}>
              </Paper> */}
                <Input disableUnderline sx={{ bgcolor: '#3700B3', color: 'white', mt: 1, ml: {xl:15,xs:6}, borderRadius: 25, pl: 1.5, pr: 1.5 }} onBlur={e => setname(e.target.value)}></Input>
            </>
        }



      </Paper>



    </>
  );
}

export default App;
