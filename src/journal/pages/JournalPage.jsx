import { MailOutline } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"


export const JournalPage = () => {
  return (
    <JournalLayout>
    
{/*     <Typography >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, sunt!</Typography>
 */}   

 {/* <NothingSelectedView/> */}
 < NoteView/>
    
    </JournalLayout>
  )
}
