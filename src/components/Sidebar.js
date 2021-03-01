import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import SidebarOption from './SidebarOption'
import {useCollection} from "react-firebase-hooks/firestore"
import { db,auth } from '../firebase';
import {useAuthState} from "react-firebase-hooks/auth"

function Sidebar() {
    //in channels we are going to collect all the rooms available in rooms using firebase hooks
    const [channels]= useCollection(db.collection('rooms'))
    const [user] = useAuthState(auth);
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>PAPA FAM HQ</h2>
                    <h3>
                        <FiberManualRecord/>
                        {user.displayName}
                    </h3>
                </SidebarInfo>
                <Create/>
            </SidebarHeader>
            <SidebarOption Icon={InsertComment} title="Threads"/>
            <SidebarOption Icon={Inbox} title="Mentions & Icons"/>
            <SidebarOption Icon={Drafts} title="Saved Items"/>
            <SidebarOption Icon={BookmarkBorder} title="Channel browser"/>
            <SidebarOption Icon={PeopleAlt} title="People & User Groups"/>
            <SidebarOption Icon={Apps} title="Apps"/>
            <SidebarOption Icon={FileCopy} title="File Browser"/>
            <SidebarOption Icon={ExpandLess} title="Show Less"/>
            <hr/>
            <SidebarOption Icon={ExpandMore} title="Channels"/>
            <hr/>
            <SidebarOption Icon={Add} addChannelOption title="Add Channel"/>
            {channels?.docs.map(doc=>(
                <SidebarOption title={doc.data().name} key={doc.id} id={doc.id}/>
            ))}
        </SidebarContainer>
        
    )
}

export default Sidebar

const SidebarContainer=styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top:1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
`
const SidebarHeader=styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`
const SidebarInfo=styled.div`
    flex: 1;
    >h2{
        font-size:15px;
        font-weight:900;
        margin-bottom: 5px;
    }
    >h3{
        display: flex;
        font-weight: 400;
        font-size: 13px;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`