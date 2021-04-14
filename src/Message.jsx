import {
   Card,
   CardActionArea,
   CardContent,
   Typography,
} from "@material-ui/core";
import React,{forwardRef} from "react";
import "./Message.css";

const Message =forwardRef( ({ message, username },ref) => {
   const isUser = username === message.username;
   return (
      <div ref={ref} className={isUser ? "message_user" : "message"}>
         <Card className={isUser ? "user_card" : "guest_card"}>
            <CardActionArea>
               <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     {!isUser && `${message.username || 'Unknown user'}:`}{message.message}
                  </Typography>
               </CardContent>
            </CardActionArea>
         </Card>
      </div>
   );
});

export default Message;
