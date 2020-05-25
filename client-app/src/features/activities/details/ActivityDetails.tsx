import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'

interface IProps {
    activity: IActivity
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (selectedActivity: IActivity|null) => void;
    submitting: boolean;
}

export const ActivityDetails: React.FC<IProps> = ({activity, setEditMode, setSelectedActivity,submitting}) => {
    return (
        
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => setEditMode(true)} basic color='blue' content='Edit'></Button>
                    <Button onClick={() => setSelectedActivity(null)} basic color='red' content='Cancel'></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
