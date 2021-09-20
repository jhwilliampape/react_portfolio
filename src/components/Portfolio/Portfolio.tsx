import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import matrix from '../assets/images/matrix.jpg';


interface Props {
    title: string
}

const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0'
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


export const Portfolio = (props:Props) => {

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
                            <Link to="/contact" className={classes.nav_a}>Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h2>Check This Out!</h2>
                    <div className={classes.main_body}>
                        <ul>
                            <a href="https://github.com/jhwilliampape/amazon-login-replica" className={classes.nav_a}>Amazon Log In Replica</a>
                        </ul>
                        <ul>
                            <a href="https://github.com/jhwilliampape/Marvel-VS-DC" className={classes.nav_a}>Marvel vs DC -- CSS Grid Example</a>
                        </ul>
                        <ul>
                            <a href="https://github.com/jhwilliampape/racer_api/tree/master" className={classes.nav_a}>Formula 1 Rankings API</a>
                        </ul>
                        <ul>
                            <a href="https://github.com/jhwilliampape/weather_api" className={classes.nav_a}>Weather Search API</a>
                        </ul>
                        <ul>
                            <a href="https://github.com/jhwilliampape/nza_react/tree/master" className={classes.nav_a}>NZA Law React Website</a>
                        </ul>
                        <ul>
                            <a href="https://github.com/jhwilliampape/vinylist_collectorbase/tree/master" className={classes.nav_a}>Vinylist React App</a>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

