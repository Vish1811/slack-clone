import React,{useState,useEffect} from 'react';
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecordRounded"
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from './SidebarOption';
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookMarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessicon from "@material-ui/icons/ExpandLess";
import ExpandMoreicon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from './firebase';
import { useStateValue } from './Stateprovider';

function Sidebar() {
    const [channels,setChannels] = useState([]);
    const [{user}] = useStateValue();
    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) =>{
            setChannels(
                snapshot.docs.map(doc =>({
                    id:doc.id,
                    name:doc.data().name
                }))  
            )
        }
        );

    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2> Vishnu Programmer</h2>
                    <h3> 
                        <FiberManualRecordIcon/>
                        {user?.displayName}

                    </h3>

                </div>
            <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved items"/>
            <SidebarOption Icon={BookMarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessicon} title="Show less"/>
            <hr/>
            <SidebarOption Icon={ExpandMoreicon} title="Channels"/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption  title="Add Channel"/>
            {/*Connect to Db */}
            {/*<SidebarOption/> ...............*/}
            {channels.map((channel) =>(
                <SidebarOption  title={channel.name} id={channel.id}/>
            ))}
            
        </div>
    );
}

export default Sidebar
