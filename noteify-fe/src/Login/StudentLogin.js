import React, {Component} from "react";
import {Button, Form, Grid, Header, Image, Message, Segment, Container} from "semantic-ui-react";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";

class StudentLogin extends Component {
    state = {
        username: "",
        password: "",
        set_username: "Timmy Jones",
        set_password: "HackUci",
        valid: false,
        wrong: false,
        sessId: null,
        openModal: false,
    };

    constructor(){
        super();
    };

    handleChangeName = event => {
        this.setState({username: event.target.value})
    };

    handleChangePassword = event => {
        this.setState({password: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();

        if((this.state.set_password === this.state.password) &&
            this.state.set_username === this.state.username){
            this.setState({valid:true});
        }else{
            this.setState({wrong:true})
        }
    };


    render() {

        if (this.state.valid === true) {
            return <Redirect to={'/student'}/>;
        }

        if (this.state.valid === false) {
            return (
                <Container className='login-form'>
                    <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                        <Grid.Column style={{maxWidth: 450}}>
                            <Header as='h2' color={'red'} textAlign='center'>
                                <Image src='/logo.png'/> Log-in to your account
                            </Header>
                            <Form error size='large'>
                                <Segment stacked>
                                    <Form.Input onChange={this.handleChangeName.bind(this)} fluid icon='user'
                                                iconPosition='left' placeholder='E-mail address'/>
                                    <Form.Input
                                        onChange={this.handleChangePassword.bind(this)}
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                    />
                                    {this.state.wrong ?
                                        <Message error
                                                 header={"Invalid Credentials"}
                                                 content={"You Donked up! Please Try again!"}/>
                                        :
                                        null
                                    }

                                    <Button color={'red'} fluid size='large' onClick={this.handleSubmit}>
                                        Login
                                    </Button>
                                </Segment>

                            </Form>
                            <Message>
                                Are you a Professor? <Link to={'/profLogin'}>Switch</Link>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </Container>
            );
        }
    }
}

export default StudentLogin;