import React, {useState} from "react";
import BlockHeader from "../components/UI/BlockHeader/BlockHeader.jsx";
import {useAuth} from "../AuthProvider.jsx";
import {Button, Card, CardBody, CardTitle, FormGroup, Input, Label} from "reactstrap";

const ProfilePage = () => {
    const auth = useAuth();
    const currentUser = auth.user
    const updateProfile = auth.signin
    const [newDisplayName, setNewDisplayName] = useState(currentUser?.displayName ? currentUser.displayName : '');
    const [newEmail, setNewEmail] = useState(currentUser?.email ? currentUser.email : '');

    const handleDisplayNameChange = (e) => {
        alert("TODO");
        setNewDisplayName(e.target.value);
    };

    const handleEmailChange = (e) => {
        alert("TODO");
        setNewEmail(e.target.value);
    };

    const handleUpdateProfile = async () => {
        try {
            if (newDisplayName !== '') {
                await updateProfile({displayName: newDisplayName})
            }
            if (newEmail !== '') {
                await updateProfile({email: newEmail});
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };
    return (<>
        <BlockHeader></BlockHeader>
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Paramétrage du profile</CardTitle>
                    <FormGroup>
                        <Label for="displayName">Pseudo</Label>
                        <Input
                            type="text"
                            name="displayName"
                            id="displayName"
                            placeholder="Entrer un nouveau pseudo"
                            value={newDisplayName}
                            onChange={handleDisplayNameChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Entrer un nouvel email"
                            value={newEmail}
                            onChange={handleEmailChange}
                        />
                    </FormGroup>
                    <Button color="warning" onClick={handleUpdateProfile}>
                        Update Profile
                    </Button>
                </CardBody>
            </Card>
        </div>
    </>)
};

export default ProfilePage;