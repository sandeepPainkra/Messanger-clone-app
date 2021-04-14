import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import Flipmove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import logo from "./logo.png";
const App = () => {
   const [input, setInput] = useState("");
   const [message, setMessage] = useState([]);
   const [username, setUsername] = useState("");

   useEffect(() => {
      db.collection("messages")
         .orderBy("timestamp", "desc")
         .onSnapshot((onsnapshot) => {
            setMessage(
               onsnapshot.docs.map((doc) => ({
                  id: doc.id,
                  message: doc.data(),
               }))
            );
         });
   }, []);
   useEffect(() => {
      setUsername(prompt("Username:"));
   }, []);

   const SendMessage = (event) => {
      event.preventDefault();

      // Add into database
      db.collection("messages").add({
         message: input,
         username: username,
         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setMessage((olditem) => {
         return [...olditem, { username: username, message: input }];
      });
      setInput("");
   };

   return (
      <div className="forAlign">
      <img src={logo} alt="messenger logo"/>
         <h2>Facebook Messenger-Clone🚀</h2>
         <h3>Hello {username}</h3>
         <br />
         <form className="app_form">
            <FormControl className="app_formcontroll">
               <Input
               className="app_input"
                  placeholder="Enter a message..."
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
               />
               <IconButton
               className="app_button"
                  disabled={!input}
                  type="submit"
                  onClick={SendMessage}
                  variant="contained"
                  color="primary"
               >
                  <SendIcon />
               </IconButton>
            </FormControl>
         </form>

         <Flipmove>
            {message.map(({ id, message }) => {
               return (
                  <Message key={id} username={username} message={message} />
               );
            })}
         </Flipmove>
      </div>
   );
};

export default App;
