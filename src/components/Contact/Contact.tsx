import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import matrix from '../assets/images/matrix.jpg';


interface Props {
    title: string
}

const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0'
    },

    container: {
        borderRadius: "5px",
        backgroundColor: "Black",
        padding: "20px",
        color: "White",
        display: 'flex',
        fontFamily: "Arial",
    },

    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    
    navigation: {
        display: 'flex'
    },

    nav_a: {
        display: 'block',
        padding: '1em',
        color: 'Chartreuse'
    },

    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${matrix});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute'
    },

    main_text: {
        fontFamily: "Arial",
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'White',
        fontSize: '30px'
    },
    main_body: {
        fontFamily: "Arial",
        textAlign: 'center',
        position: 'relative',
        color: 'Yellow',
        fontSize: '15px'
    }
});

export const Contact = (props:Props) => {
    const classes = useStyles();

        return (
            
            <div className={classes.root}>
                <nav>
                    <div className={classes.navbar_container}>
                         
                        <ul className={`${classes.navigation}`}>
                            <li>
                                <Link to="/" className={classes.nav_a}>Home</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className={classes.nav_a}>Portfolio / Resume</Link>
                            </li>
                            <li>
                                <Link to="/contactme" className={classes.nav_a}>Contact Me</Link>
                            </li>
                        </ul>
                     </div>
                </nav>
                <main className={classes.main}>
                    <div className={classes.main_text}>
                        <h1>
                            J H William Pape is a midwestern junior developer with attention to detail, a strong work ethic, and an ambition to 
                            level up.  He packs an Associate's Degree in Graphic Design, and has been practicing skills involving Full Stack 
                            Development including Python, JavaScript, HTML and CSS.  Contact for more information or to inquire about services.
                            Thank you!
                        </h1>
                    </div>
                    <div className={classes.container}>
                        <form action="action_page.php">
                        <input type="text" id="first" name="firstname"/>
                            <label htmlFor="first">    First Name    </label>
                                <br/><br/>
                            <input type="text" id="last" name="lastname"/>
                            <label htmlFor="last">    Last Name    </label>
                                <br/><br/>
                            <input type="text" id="phone" name="phonenumber"/>
                            <label htmlFor="phone">    Phone Number    </label>
                                <br/><br/>
                            <input type="text" id="email" name="email"/>
                            <label htmlFor="email">    Email    </label>
                                <br/><br/>
                            <textarea id="subject" name="subject"></textarea>
                            <label htmlFor="subject">    Subject    </label>
                                <br/><br/>
                            <Button color='secondary' variant="contained">Send</Button>
                        </form>
                    </div>

                </main>

            </div>
        )
}